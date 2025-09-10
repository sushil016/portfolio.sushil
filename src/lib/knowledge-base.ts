import fs from 'fs';
import path from 'path';

export interface KnowledgeBase {
  profile: {
    personal_info: any;
    professional_experience: any;
    projects: any;
    technical_skills: any;
    achievements: any;
    education: any;
    certifications: any;
    open_source: any;
    future_roadmap: any;
    personal_interests: any;
    workspace_and_tools: any;
  };
  meta_information: any;
}

class KnowledgeBaseManager {
  private static instance: KnowledgeBaseManager;
  private knowledgeBase: KnowledgeBase | null = null;

  private constructor() {}

  public static getInstance(): KnowledgeBaseManager {
    if (!KnowledgeBaseManager.instance) {
      KnowledgeBaseManager.instance = new KnowledgeBaseManager();
    }
    return KnowledgeBaseManager.instance;
  }

  public async loadKnowledgeBase(): Promise<KnowledgeBase> {
    if (this.knowledgeBase) {
      return this.knowledgeBase;
    }

    try {
      const filePath = path.join(process.cwd(), 'mybio.md');
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      
      // Parse the JSON content from the markdown file
      this.knowledgeBase = JSON.parse(fileContent) as KnowledgeBase;
      return this.knowledgeBase;
    } catch (error) {
      console.error('Error loading knowledge base:', error);
      throw new Error('Failed to load knowledge base');
    }
  }

  public searchKnowledge(query: string): any[] {
    if (!this.knowledgeBase) {
      throw new Error('Knowledge base not loaded');
    }

    const results: any[] = [];
    const searchTerm = query.toLowerCase();

    // Search through different sections based on query keywords
    if (searchTerm.includes('project') || searchTerm.includes('work') || searchTerm.includes('built')) {
      results.push({
        section: 'projects',
        data: this.knowledgeBase.profile.projects
      });
    }

    if (searchTerm.includes('skill') || searchTerm.includes('technology') || searchTerm.includes('tech')) {
      results.push({
        section: 'technical_skills',
        data: this.knowledgeBase.profile.technical_skills
      });
    }

    if (searchTerm.includes('experience') || searchTerm.includes('work') || searchTerm.includes('intern')) {
      results.push({
        section: 'professional_experience',
        data: this.knowledgeBase.profile.professional_experience
      });
    }

    if (searchTerm.includes('education') || searchTerm.includes('study') || searchTerm.includes('college')) {
      results.push({
        section: 'education',
        data: this.knowledgeBase.profile.education
      });
    }

    if (searchTerm.includes('personal') || searchTerm.includes('about') || searchTerm.includes('hobby')) {
      results.push({
        section: 'personal_info',
        data: this.knowledgeBase.profile.personal_info
      });
    }

    if (searchTerm.includes('future') || searchTerm.includes('goal') || searchTerm.includes('plan')) {
      results.push({
        section: 'future_roadmap',
        data: this.knowledgeBase.profile.future_roadmap
      });
    }

    // If no specific section found, return all relevant sections
    if (results.length === 0) {
      return [
        { section: 'personal_info', data: this.knowledgeBase.profile.personal_info },
        { section: 'professional_experience', data: this.knowledgeBase.profile.professional_experience },
        { section: 'projects', data: this.knowledgeBase.profile.projects },
        { section: 'technical_skills', data: this.knowledgeBase.profile.technical_skills }
      ];
    }

    return results;
  }

  public getFullProfile(): KnowledgeBase | null {
    return this.knowledgeBase;
  }

  public formatContextForLLM(query: string): string {
    const relevantSections = this.searchKnowledge(query);
    
    let context = "Here is relevant information about Sushil Sahani:\n\n";
    
    relevantSections.forEach(section => {
      context += `## ${section.section.toUpperCase()}\n`;
      context += JSON.stringify(section.data, null, 2);
      context += "\n\n";
    });

    return context;
  }
}

export default KnowledgeBaseManager;
