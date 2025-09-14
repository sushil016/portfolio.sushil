import { NextRequest, NextResponse } from 'next/server';
import { GitHubService } from '@/lib/github-service';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const username = searchParams.get('username') || 'sushil016';
    const repo = searchParams.get('repo') || 'portfolio.sushil';
    const limit = parseInt(searchParams.get('limit') || '10');

    const commits = await GitHubService.fetchTILCommits(username, repo, limit);

    return NextResponse.json({
      success: true,
      data: commits,
      count: commits.length
    });
  } catch (error) {
    console.error('Error in TIL API:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch TIL data',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
