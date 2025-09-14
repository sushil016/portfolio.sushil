'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  Tag, 
  User, 
  ArrowRight, 
  Search,
  Filter,
  TrendingUp,
  Sparkles,
  ArrowLeft,
  Home
} from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: number;
  category: string;
  tags: string[];
  featured: boolean;
  views: number;
  slug: string;
}

const CATEGORIES = [
  { id: 'all', name: 'All Posts', icon: '📚', color: '#CAA6F7' },
  { id: 'devops', name: 'DevOps & Backend', icon: '🐳', color: '#06B6D4' },
  { id: 'robotics', name: 'Robotics & Drones', icon: '🤖', color: '#FFBE6F' },
  { id: 'teaching', name: 'Teaching & Mentoring', icon: '🎓', color: '#CAA6F7' },
  { id: 'startups', name: 'Startups & Internships', icon: '💼', color: '#06B6D4' },
  { id: 'growth', name: 'Personal Growth', icon: '📈', color: '#FFBE6F' }
];

// Mock blog posts - in real implementation, this would come from your CMS/API
const MOCK_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'How I landed my IIT Bombay internship in 3rd semester',
    excerpt: "From cold emails to interviews — my step-by-step playbook to land an IIT Bombay internship in 3rd semester.",
    content: '',
    author: 'Sushil Sahani',
    date: '2024-08-15T10:00:00Z',
    readTime: 8,
    category: 'startups',
    tags: ['internship', 'iit-bombay', 'career', 'devops'],
    featured: true,
    views: 1647,
    slug: 'iit-bombay-internship'
  },
  {
    id: '2',
    title: 'How I won Hackathon (SIH) - guide to win',
    excerpt: 'Team formation, problem breakdown, MVP strategy, and presentation tips that helped us win. A practical roadmap.',
    content: '',
    author: 'Sushil Sahani',
    date: '2024-07-30T14:30:00Z',
    readTime: 10,
    category: 'growth',
    tags: ['hackathon', 'sih', 'mvp', 'product', 'presentation'],
    featured: true,
    views: 1289,
    slug: 'sih-hackathon-guide'
  },
  {
    id: '3',
    title: 'How I started my own dev agency in 4th semester',
    excerpt: 'From side projects to paid clients — setting up operations, pricing, delivery, and scaling the LumaDev agency.',
    content: '',
    author: 'Sushil Sahani',
    date: '2024-06-10T09:15:00Z',
    readTime: 10,
    category: 'startups',
    tags: ['entrepreneurship', 'devops', 'agency', 'business'],
    featured: true,
    views: 1756,
    slug: 'started-dev-agency-4th-sem'
  },
  {
    id: '4',
    title: 'How I learned DevOps and landed a remote startup job in 4th semester',
    excerpt: 'A practical roadmap: projects, stack choices, interviews, and networking that led to a remote role.',
    content: '',
    author: 'Sushil Sahani',
    date: '2024-05-28T11:00:00Z',
    readTime: 12,
    category: 'devops',
    tags: ['devops', 'remote-job', 'kubernetes', 'ci-cd'],
    featured: false,
    views: 1123,
    slug: 'learned-devops-remote-job-4th-sem'
  },
  {
    id: '5',
    title: 'Teaching DSA/Development in college community club',
    excerpt: 'Curriculum design, helping peers build fundamentals, and making learning fun through projects.',
    content: '',
    author: 'Sushil Sahani',
    date: '2024-05-18T16:45:00Z',
    readTime: 6,
    category: 'teaching',
    tags: ['dsa', 'mentoring', 'education', 'community'],
    featured: false,
    views: 934,
    slug: 'teaching-dsa-dev-community-club'
  },
  {
    id: '6',
    title: 'How I balance all these with academics',
    excerpt: 'Timeboxing, ruthless prioritization, and weekly systems to juggle internships, agency work, and college.',
    content: '',
    author: 'Sushil Sahani',
    date: '2024-04-26T08:30:00Z',
    readTime: 7,
    category: 'growth',
    tags: ['productivity', 'planning', 'routines', 'work-life'],
    featured: false,
    views: 756,
    slug: 'balance-with-academics'
  },
  {
    id: '7',
    title: 'Building a Drone That Saves Lives',
    excerpt: 'Developing autonomous drones for emergency response and healthcare delivery in remote areas.',
    content: '',
    author: 'Sushil Sahani',
    date: '2024-07-22T14:30:00Z',
    readTime: 12,
    category: 'robotics',
    tags: ['drone', 'healthcare', 'automation', 'emergency'],
    featured: false,
    views: 892,
    slug: 'life-saving-drone'
  },
  {
    id: '8',
    title: 'Kubernetes in Production: My First Year',
    excerpt: 'Real-world experiences, mistakes, and learnings from deploying Kubernetes at scale.',
    content: '',
    author: 'Sushil Sahani',
    date: '2024-04-25T11:20:00Z',
    readTime: 15,
    category: 'devops',
    tags: ['kubernetes', 'production', 'devops', 'scaling'],
    featured: false,
    views: 2103,
    slug: 'kubernetes-production-year'
  }
];

const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [posts] = useState<BlogPost[]>(MOCK_POSTS);

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = posts.filter(post => post.featured);

  return (
    <div className="bg-[#1E1E2E] min-h-screen">
      {/* Navigation */}
      <div className="fixed top-4 left-4 z-50">
        <Link href="/">
          <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#2A2A3E] to-[#1A1A2E] border border-[#3A3A4E] rounded-full text-[#CAA6F7] hover:border-[#CAA6F7] hover:text-[#06B6D4] transition-all duration-300 hover:scale-105">
            <Home className="h-4 w-4" />
            <span className="hidden sm:inline">Home</span>
          </button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <Sparkles className="text-[#FFBE6F] h-6 w-6" />
            <h1 className="text-5xl lg:text-6xl font-bold text-[#CAA6F7]">
              My Journey & Learnings
            </h1>
            <Sparkles className="text-[#06B6D4] h-6 w-6" />
          </div>
          <p className="text-xl text-[#B3B3C3] max-w-3xl mx-auto leading-relaxed">
            Stories, projects, and insights from my path as a DevOps engineer, entrepreneur, and student leader.
            Documenting the journey from beginner to builder.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="text-[#FFBE6F] h-6 w-6" />
            <h2 className="text-3xl font-bold text-[#CAA6F7]">Featured Stories</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <FeaturedPostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <BookOpen className="text-[#06B6D4] h-6 w-6" />
              <h2 className="text-3xl font-bold text-[#CAA6F7]">All Posts</h2>
            </div>
            
            {/* Search Bar */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#B3B3C3] h-5 w-5" />
              <input
                type="text"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-[#2A2A3E] border border-[#3A3A4E] rounded-xl text-[#CAA6F7] placeholder-[#B3B3C3] focus:border-[#CAA6F7] focus:ring-2 focus:ring-[#CAA6F7]/20 outline-none transition-all"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-3 mb-8 overflow-x-auto pb-2">
            <Filter className="text-[#B3B3C3] h-5 w-5 flex-shrink-0" />
            <div className="flex gap-2">
              {CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? 'bg-[#CAA6F7] text-[#1E1E2E]'
                      : 'bg-[#2A2A3E] text-[#B3B3C3] hover:bg-[#3A3A4E] hover:text-[#CAA6F7]'
                  }`}
                >
                  <span>{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredPosts.length === 0 ? (
              <div className="md:col-span-2 text-center py-16">
                <BookOpen className="text-[#B3B3C3] h-16 w-16 mx-auto mb-4" />
                <h3 className="text-xl text-[#CAA6F7] mb-2">No posts found</h3>
                <p className="text-[#B3B3C3]">Try adjusting your search or filter criteria</p>
              </div>
            ) : (
              filteredPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

const FeaturedPostCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  const category = CATEGORIES.find(cat => cat.id === post.category);
  
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="group bg-gradient-to-br from-[#2A2A3E] to-[#1A1A2E] rounded-2xl overflow-hidden border border-[#3A3A4E] hover:border-[#CAA6F7] transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#CAA6F7]/10 cursor-pointer">
        <div className="p-6 h-full flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <span 
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium"
              style={{ backgroundColor: `${category?.color}20`, color: category?.color }}
            >
              <span>{category?.icon}</span>
              {category?.name}
            </span>
            <span className="text-[#FFBE6F] text-sm font-medium">Featured</span>
          </div>

          <h3 className="text-xl font-bold text-[#CAA6F7] mb-3 group-hover:text-[#06B6D4] transition-colors line-clamp-2">
            {post.title}
          </h3>

          <p className="text-[#B3B3C3] mb-4 line-clamp-3 flex-grow">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between text-sm text-[#B3B3C3] mb-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime} min read</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{formatDistanceToNow(new Date(post.date), { addSuffix: true })}</span>
              </div>
            </div>
            <span className="text-[#FFBE6F]">{post.views} views</span>
          </div>

          <div className="flex items-center gap-2 text-[#CAA6F7] group-hover:text-[#06B6D4] transition-colors font-medium">
            Read More
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </article>
    </Link>
  );
};

const BlogPostCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  const category = CATEGORIES.find(cat => cat.id === post.category);
  
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="group bg-gradient-to-br from-[#2A2A3E] to-[#1A1A2E] rounded-xl p-6 border border-[#3A3A4E] hover:border-[#CAA6F7] transition-all duration-300 hover:scale-[1.01] hover:shadow-lg hover:shadow-[#CAA6F7]/5 cursor-pointer">
        <div className="flex items-start justify-between mb-4">
          <span 
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium"
            style={{ backgroundColor: `${category?.color}20`, color: category?.color }}
          >
            <span>{category?.icon}</span>
            {category?.name}
          </span>
          <span className="text-[#B3B3C3] text-sm">{post.views} views</span>
        </div>

        <h3 className="text-xl font-bold text-[#CAA6F7] mb-3 group-hover:text-[#06B6D4] transition-colors">
          {post.title}
        </h3>

        <p className="text-[#B3B3C3] mb-4 line-clamp-2">
          {post.excerpt}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-[#3A3A4E] text-[#B3B3C3] rounded text-xs"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-[#B3B3C3]">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{post.readTime} min</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{formatDistanceToNow(new Date(post.date), { addSuffix: true })}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[#CAA6F7] group-hover:text-[#06B6D4] transition-colors text-sm font-medium">
            Read
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogPage;
