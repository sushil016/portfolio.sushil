import { NextRequest } from 'next/server';
import ClaudeService from '@/lib/claude-service';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { query } = body;

    if (!query || typeof query !== 'string') {
      return new Response('Query is required and must be a string', { status: 400 });
    }

    if (query.length > 500) {
      return new Response('Query is too long. Please keep it under 500 characters.', { status: 400 });
    }

    const claudeService = ClaudeService.getInstance();

    // Use the new native streaming method from ClaudeService
    const stream = await claudeService.createStreamingResponse(query);

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });

  } catch (error) {
    console.error('Stream API Error:', error);
    return new Response('Internal server error', { status: 500 });
  }
}
