interface GitHubCommit {
  sha: string;
  commit: {
    message: string;
    author: {
      name: string;
      email: string;
      date: string;
    };
  };
  html_url: string;
  author: {
    login: string;
    avatar_url: string;
  } | null;
}

interface GitHubContributor {
  total: number;
  weeks: Array<{
    w: number;
    a: number;
    d: number;
    c: number;
  }>;
}

export class GitHubService {
  private static readonly BASE_URL = 'https://api.github.com';
  private static readonly GITHUB_TOKEN = process.env.GITHUB_SECRET;

  static async fetchCommits(
    username: string,
    repo?: string,
    limit: number = 10
  ): Promise<GitHubCommit[]> {
    try {
      const repoPath = repo ? `${username}/${repo}` : `${username}/${username}`;
      const url = `${this.BASE_URL}/repos/${repoPath}/commits?per_page=${limit}`;
      
      const headers: HeadersInit = {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Portfolio-App'
      };

      if (this.GITHUB_TOKEN) {
        headers['Authorization'] = `token ${this.GITHUB_TOKEN}`;
      }

      const response = await fetch(url, {
        headers,
        next: { revalidate: 300 } // Cache for 5 minutes
      });

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching GitHub commits:', error);
      return [];
    }
  }

  static async fetchTILCommits(
    username: string,
    repo: string = 'til',
    limit: number = 10
  ): Promise<GitHubCommit[]> {
    const commits = await this.fetchCommits(username, repo, limit * 2);
    
    // Filter commits that start with "TIL:" or contain learning-related keywords
    return commits.filter(commit => 
      commit.commit.message.toLowerCase().includes('til:') ||
      commit.commit.message.toLowerCase().includes('learned') ||
      commit.commit.message.toLowerCase().includes('today i learned')
    ).slice(0, limit);
  }

  static async fetchContributions(username: string): Promise<GitHubContributor | null> {
    try {
      const url = `${this.BASE_URL}/repos/${username}/${username}/stats/commit_activity`;
      
      const headers: HeadersInit = {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Portfolio-App'
      };

      if (this.GITHUB_TOKEN) {
        headers['Authorization'] = `token ${this.GITHUB_TOKEN}`;
      }

      const response = await fetch(url, {
        headers,
        next: { revalidate: 3600 } // Cache for 1 hour
      });

      if (!response.ok) {
        return null;
      }

      const data = await response.json();
      return data[0] || null;
    } catch (error) {
      console.error('Error fetching GitHub contributions:', error);
      return null;
    }
  }

  static formatCommitMessage(message: string): string {
    // Remove "TIL:" prefix and clean up the message
    return message
      .replace(/^TIL:\s*/i, '')
      .replace(/^Today I Learned:\s*/i, '')
      .replace(/^Learned:\s*/i, '')
      .trim();
  }

  static getCommitCategory(message: string): string {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('docker') || lowerMessage.includes('kubernetes') || lowerMessage.includes('devops')) {
      return '🐳 DevOps';
    }
    if (lowerMessage.includes('react') || lowerMessage.includes('next') || lowerMessage.includes('frontend')) {
      return '⚛️ Frontend';
    }
    if (lowerMessage.includes('node') || lowerMessage.includes('backend') || lowerMessage.includes('api')) {
      return '🚀 Backend';
    }
    if (lowerMessage.includes('robot') || lowerMessage.includes('drone') || lowerMessage.includes('hardware')) {
      return '🤖 Robotics';
    }
    if (lowerMessage.includes('algorithm') || lowerMessage.includes('dsa') || lowerMessage.includes('leetcode')) {
      return '📊 DSA';
    }
    
    return '💡 General';
  }
}
