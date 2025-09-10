import { NextRequest, NextResponse } from 'next/server';
import ClaudeService from '@/lib/claude-service';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { query } = body;

    if (!query || typeof query !== 'string') {
      return NextResponse.json(
        { error: 'Query is required and must be a string' },
        { status: 400 }
      );
    }

    if (query.length > 500) {
      return NextResponse.json(
        { error: 'Query is too long. Please keep it under 500 characters.' },
        { status: 400 }
      );
    }

    const claudeService = ClaudeService.getInstance();
    const response = await claudeService.askAboutSushil(query);

    return NextResponse.json({
      response,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error. Please try again later.',
        details: process.env.NODE_ENV === 'development' ? (error as Error).message : undefined
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'AI Chat API is running',
    endpoints: {
      POST: '/api/chat - Send a query about Sushil',
      GET: '/api/chat/facts - Get quick facts about Sushil'
    }
  });
}
