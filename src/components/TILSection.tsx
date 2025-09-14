'use client';

import React, { useEffect, useState } from 'react';
import { GitHubService } from '@/lib/github-service';
import { formatDistanceToNow } from 'date-fns';
import { Calendar, Clock, ExternalLink, GitCommit, Sparkles } from 'lucide-react';
import GitHubCalendar from 'react-github-calendar';

interface TILCommit {
  sha: string;
  message: string;
  author: string;
  date: string;
  url: string;
  category: string;
  avatar: string | null;
}

// Mock data for demonstration when GitHub API isn't available
const MOCK_TIL_COMMITS: TILCommit[] = [
  {
    sha: 'abc123',
    message: 'Learned how to implement proper error boundaries in React for better UX',
    author: 'Sushil Sahani',
    date: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
    url: '#',
    category: '⚛️ Frontend',
    avatar: null
  },
  {
    sha: 'def456',
    message: 'Discovered the power of Docker multi-stage builds for optimizing container size',
    author: 'Sushil Sahani',
    date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
    url: '#',
    category: '🐳 DevOps',
    avatar: null
  },
  {
    sha: 'ghi789',
    message: 'Implemented A* pathfinding algorithm for autonomous drone navigation',
    author: 'Sushil Sahani',
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
    url: '#',
    category: '🤖 Robotics',
    avatar: null
  },
  {
    sha: 'jkl012',
    message: 'Optimized PostgreSQL queries using proper indexing strategies',
    author: 'Sushil Sahani',
    date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
    url: '#',
    category: '🚀 Backend',
    avatar: null
  },
  {
    sha: 'mno345',
    message: 'Solved dynamic programming problem: longest increasing subsequence',
    author: 'Sushil Sahani',
    date: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(), // 4 days ago
    url: '#',
    category: '📊 DSA',
    avatar: null
  }
];

const TILSection: React.FC = () => {
  const [tilCommits, setTilCommits] = useState<TILCommit[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTILData = async () => {
      try {
        setLoading(true);
        const commits = await GitHubService.fetchTILCommits('sushil016', 'portfolio.sushil', 8);
        
        if (commits.length === 0) {
          // Use mock data when no commits are found
          setTilCommits(MOCK_TIL_COMMITS.slice(0, 8));
        } else {
          const formattedCommits: TILCommit[] = commits.map(commit => ({
            sha: commit.sha,
            message: GitHubService.formatCommitMessage(commit.commit.message),
            author: commit.commit.author.name,
            date: commit.commit.author.date,
            url: commit.html_url,
            category: GitHubService.getCommitCategory(commit.commit.message),
            avatar: commit.author?.avatar_url || null
          }));
          setTilCommits(formattedCommits);
        }
      } catch (err) {
        console.warn('GitHub API failed, using mock data:', err);
        // Use mock data as fallback
        setTilCommits(MOCK_TIL_COMMITS.slice(0, 8));
      } finally {
        setLoading(false);
      }
    };

    fetchTILData();
  }, []);

  const calendarTheme = {
    light: ['#1E1E2E', '#CAA6F7', '#FFBE6F', '#06B6D4', '#B3B3C3'],
    dark: ['#1E1E2E', '#CAA6F7', '#FFBE6F', '#06B6D4', '#B3B3C3']
  };

  return (
    <section id="til" className="bg-[#1E1E2E] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
{/*             
            <h2 className="text-4xl lg:text-5xl font-bold text-[#CAA6F7]">
              Today I Learned
            </h2> */}
           
          </div>
          <p className="text-[#B3B3C3] text-lg max-w-2xl mx-auto">
            Live feed of my daily learnings and discoveries, powered by GitHub commits
          </p>
        </div>

        {/* GitHub Activity Section - Top */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            
            <h3 className="text-2xl font-semibold text-[#CAA6F7] ">GitHub Activity</h3>
          </div>

          <div className="bg-gradient-to-br from-[#2A2A3E] to-[#1A1A2E] rounded-2xl p-6 border border-[#3A3A4E] max-w-4xl mx-auto">
            <div className="mb-6 text-center">
              <h4 className="text-lg font-medium text-[#CAA6F7] mb-2">Contribution Graph</h4>
              <p className="text-[#B3B3C3] text-sm">
                My coding journey visualized through GitHub contributions
              </p>
            </div>
            
            <div className="overflow-x-auto flex justify-center">
              <GitHubCalendar
                username="sushil016"
                colorScheme="dark"
                theme={calendarTheme}
                fontSize={12}
                blockSize={12}
                blockMargin={3}
                showWeekdayLabels
              />
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#06B6D4]">
                  {tilCommits.length}
                </div>
                <div className="text-sm text-[#B3B3C3]">TIL Entries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#FFBE6F]">
                  365+
                </div>
                <div className="text-sm text-[#B3B3C3]">Days Coding</div>
              </div>
            </div>
          </div>
        </div>

        {/* TIL Commits Section - Bottom */}
        <div>
          <div className="flex items-center gap-3 mb-8 justify-center">
            <GitCommit className="text-[#06B6D4] h-6 w-6" />
            <h3 className="text-2xl font-semibold text-[#CAA6F7]">TIL Commit</h3>
          </div>

          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[...Array(6)].map((_, i) => (
                <TILCardSkeleton key={i} />
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <div className="text-red-400 mb-2">⚠️ {error}</div>
              <p className="text-[#B3B3C3]">Unable to load TIL data</p>
            </div>
          ) : tilCommits.length === 0 ? (
            <div className="text-center py-12">
              <GitCommit className="text-[#B3B3C3] h-12 w-12 mx-auto mb-4" />
              <p className="text-[#B3B3C3]">No TIL entries found</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {tilCommits.map((commit) => (
                <TILCard key={commit.sha} commit={commit} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const TILCard: React.FC<{ commit: TILCommit }> = ({ commit }) => {
  return (
    <div className="group bg-gradient-to-br from-[#2A2A3E] to-[#1A1A2E] rounded-xl p-5 border border-[#3A3A4E] hover:border-[#CAA6F7] transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#CAA6F7]/10">
      <div className="flex items-start justify-between mb-3">
        <span className="inline-block px-3 py-1 bg-[#CAA6F7]/20 text-[#CAA6F7] rounded-full text-xs font-medium">
          {commit.category}
        </span>
        <a
          href={commit.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#B3B3C3] hover:text-[#06B6D4] transition-colors opacity-0 group-hover:opacity-100"
        >
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>

      <p className="text-[#CAA6F7] font-medium mb-3 leading-relaxed text-sm line-clamp-3">
        {commit.message}
      </p>

      <div className="flex items-center justify-between">
        {commit.avatar && (
          <img
            src={commit.avatar}
            alt={commit.author}
            className="w-6 h-6 rounded-full border border-[#CAA6F7]"
          />
        )}
        <div className="flex items-center gap-1 text-xs text-[#B3B3C3]">
          <Clock className="h-3 w-3" />
          <span>{formatDistanceToNow(new Date(commit.date), { addSuffix: true })}</span>
        </div>
      </div>
    </div>
  );
};

const TILCardSkeleton: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-[#2A2A3E] to-[#1A1A2E] rounded-xl p-5 border border-[#3A3A4E] animate-pulse">
      <div className="flex items-start justify-between mb-3">
        <div className="w-16 h-5 bg-[#3A3A4E] rounded-full"></div>
      </div>
      <div className="space-y-2 mb-3">
        <div className="h-4 bg-[#3A3A4E] rounded w-full"></div>
        <div className="h-4 bg-[#3A3A4E] rounded w-3/4"></div>
        <div className="h-4 bg-[#3A3A4E] rounded w-1/2"></div>
      </div>
      <div className="flex items-center justify-between">
        <div className="w-6 h-6 bg-[#3A3A4E] rounded-full"></div>
        <div className="w-16 h-3 bg-[#3A3A4E] rounded"></div>
      </div>
    </div>
  );
};

export default TILSection;
