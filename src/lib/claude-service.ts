import Anthropic from '@anthropic-ai/sdk';
import KnowledgeBaseManager from './knowledge-base';

class ClaudeService {
  private static instance: ClaudeService;
  private anthropic: Anthropic;
  private knowledgeBaseManager: KnowledgeBaseManager;

  private constructor() {
    if (!process.env.ANTHROPIC_API_KEY) {
      throw new Error('ANTHROPIC_API_KEY environment variable is required');
    }

    this.anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    });

    this.knowledgeBaseManager = KnowledgeBaseManager.getInstance();
  }

  public static getInstance(): ClaudeService {
    if (!ClaudeService.instance) {
      ClaudeService.instance = new ClaudeService();
    }
    return ClaudeService.instance;
  }

  public async initializeKnowledgeBase(): Promise<void> {
    await this.knowledgeBaseManager.loadKnowledgeBase();
  }

  public async askAboutSushil(query: string): Promise<string> {
    try {
      // Ensure knowledge base is loaded
      await this.initializeKnowledgeBase();

      // Get relevant context from knowledge base
      const context = this.knowledgeBaseManager.formatContextForLLM(query);

      // Create the system prompt
      const systemPrompt = `You are an AI assistant that helps people learn about Sushil Sahani, a DevOps and Full Stack engineer. You have access to comprehensive information about his background, experience, projects, and interests.

Guidelines:
1. Answer questions based ONLY on the provided knowledge base data
2. Be conversational and friendly, as if you're representing Sushil
3. If asked about something not in the data, politely say you don't have that information
4. Keep responses concise but informative
5. Use first person when appropriate (e.g., "I've worked on..." instead of "Sushil has worked on...")
6. Highlight key achievements and technical expertise naturally
7. If asked about contact or collaboration, mention his portfolio (sushilsahani.tech) and agency (lumadev.in)

Knowledge Base Data:
${context}`;

      // Create the user prompt
      const userPrompt = `Question about Sushil: ${query}

Please provide a helpful and informative response based on the knowledge base data provided in the system message.`;

      // Call Claude API
      const response = await this.anthropic.messages.create({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 1000,
        system: systemPrompt,
        messages: [
          {
            role: 'user',
            content: userPrompt
          }
        ],
        temperature: 0.7
      });

      // Extract the response text
      const responseContent = response.content[0];
      if (responseContent.type === 'text') {
        return responseContent.text;
      } else {
        throw new Error('Unexpected response format from Claude API');
      }

    } catch (error) {
      console.error('Error in Claude API call:', error);
      throw new Error('Failed to generate response from AI assistant');
    }
  }

  public async createStreamingResponse(query: string): Promise<ReadableStream<Uint8Array>> {
    try {
      // Ensure knowledge base is loaded
      await this.initializeKnowledgeBase();

      // Get relevant context from knowledge base
      const context = this.knowledgeBaseManager.formatContextForLLM(query);

      // Create the system prompt
      const systemPrompt = `You are an AI assistant that helps people learn about Sushil Sahani, a DevOps and Full Stack engineer. You have access to comprehensive information about his background, experience, projects, and interests.

Guidelines:
1. Answer questions based ONLY on the provided knowledge base data
2. Be conversational and friendly, as if you're representing Sushil
3. If asked about something not in the data, politely say you don't have that information
4. Keep responses concise but informative
5. Use first person when appropriate (e.g., "I've worked on..." instead of "Sushil has worked on...")
6. Highlight key achievements and technical expertise naturally
7. If asked about contact or collaboration, mention his portfolio (sushilsahani.tech) and agency (lumadev.in)

Knowledge Base Data:
${context}`;

      // Create the user prompt
      const userPrompt = `Question about Sushil: ${query}

Please provide a helpful and informative response based on the knowledge base data provided in the system message.`;

      // Use Anthropic SDK's native streaming
      const stream = this.anthropic.messages.stream({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 1000,
        system: systemPrompt,
        messages: [
          {
            role: 'user',
            content: userPrompt
          }
        ],
        temperature: 0.7
      });

      const encoder = new TextEncoder();

      return new ReadableStream({
        async start(controller) {
          try {
            // Send initial metadata
            const metadata = {
              type: 'metadata',
              timestamp: new Date().toISOString(),
              query: query
            };
            controller.enqueue(encoder.encode(`data: ${JSON.stringify(metadata)}\n\n`));

            // Process the native Anthropic stream
            for await (const messageStreamEvent of stream) {
              if (messageStreamEvent.type === 'content_block_delta' && 
                  messageStreamEvent.delta.type === 'text_delta') {
                const data = {
                  type: 'chunk',
                  content: messageStreamEvent.delta.text,
                  timestamp: new Date().toISOString()
                };
                controller.enqueue(encoder.encode(`data: ${JSON.stringify(data)}\n\n`));
              }
            }

            // Send completion signal
            const completion = {
              type: 'complete',
              timestamp: new Date().toISOString()
            };
            controller.enqueue(encoder.encode(`data: ${JSON.stringify(completion)}\n\n`));
            
            controller.close();
          } catch (error) {
            console.error('Streaming error:', error);
            const errorData = {
              type: 'error',
              error: 'Failed to generate streaming response',
              timestamp: new Date().toISOString()
            };
            controller.enqueue(encoder.encode(`data: ${JSON.stringify(errorData)}\n\n`));
            controller.close();
          }
        }
      });

    } catch (error) {
      console.error('Error creating streaming response:', error);
      throw new Error('Failed to create streaming response from AI assistant');
    }
  }

  public async generateQuickFacts(): Promise<string[]> {
    try {
      await this.initializeKnowledgeBase();
      
      const profile = this.knowledgeBaseManager.getFullProfile();
      if (!profile) {
        throw new Error('Profile data not available');
      }

      const systemPrompt = `Based on the following profile data, generate 5-7 interesting quick facts about Sushil Sahani. Make them engaging and highlight his key achievements, skills, and personality traits.

Profile Data:
${JSON.stringify(profile, null, 2)}`;

      const response = await this.anthropic.messages.create({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 500,
        system: 'You are an AI assistant that creates engaging quick facts about professionals.',
        messages: [
          {
            role: 'user',
            content: systemPrompt
          }
        ],
        temperature: 0.8
      });

      const responseContent = response.content[0];
      if (responseContent.type === 'text') {
        // Parse the response into an array of facts
        return responseContent.text
          .split('\n')
          .filter(line => line.trim().length > 0)
          .map(line => line.replace(/^\d+\.\s*/, '').trim())
          .filter(fact => fact.length > 10);
      } else {
        throw new Error('Unexpected response format from Claude API');
      }

    } catch (error) {
      console.error('Error generating quick facts:', error);
      return [
        "DevOps Engineer intern at CREW and Full Stack Developer intern at IIT Bombay",
        "Founder of LumaDev.in - an AI automation and web development agency",
        "Programming Head of Robotics Club at BVCOE",
        "Gym enthusiast who never misses workout sessions",
        "Transformed from coding newbie to DevOps engineer in under 2 years"
      ];
    }
  }
}

export default ClaudeService;
