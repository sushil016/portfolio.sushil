import { NextResponse } from 'next/server';
import ClaudeService from '@/lib/claude-service';

export async function GET() {
  try {
    const claudeService = ClaudeService.getInstance();
    const facts = await claudeService.generateQuickFacts();

    return NextResponse.json({
      facts,
      timestamp: new Date().toISOString(),
      count: facts.length
    });

  } catch (error) {
    console.error('Facts API Error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to generate quick facts',
        details: process.env.NODE_ENV === 'development' ? (error as Error).message : undefined
      },
      { status: 500 }
    );
  }
}
