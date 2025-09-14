📘 Dynamic TIL (Today I Learned) + GitHub Streak Integration
🎯 Goal

Create a live TIL (Today I Learned) feed on your portfolio website powered by GitHub commits, and add a GitHub streak calendar for visual impact.

🛠️ Components

GitHub Repo → Stores commits (your learnings or code updates).

GitHub API → Fetches commit history + contributions.

Frontend (Portfolio) → Displays commits in a timeline / feed.

Optional: Database (if you want caching).

🏗️ Setup Steps
1. Create a Dedicated TIL Repo (Optional but Recommended)

Name: til or today-i-learned.

Each commit = one learning.
Example commit message:

TIL: Learned how Prisma migrations work with PostgreSQL.

2. Generate a GitHub Token

Go to Settings → Developer Settings → Tokens.

Create a Fine-grained, repo-scoped token.

Permissions: Contents → Read-only.

Scope: Your TIL repo (or all repos if you want).

3. Fetch Commits via GitHub API

Example endpoint:

GET https://api.github.com/repos/<username>/<repo>/commits


You’ll get JSON like:

[
  {
    "commit": {
      "message": "TIL: Learned Docker multi-stage builds.",
      "author": {
        "name": "Sushil Sahani",
        "date": "2025-09-14T12:34:56Z"
      }
    },
    "html_url": "https://github.com/username/til/commit/abc123"
  }
]


On your portfolio → parse this JSON → display as TIL feed.

4. Show GitHub Streak Calendar

Use GitHub contribution graph API or a library:

github-readme-streak-stats
 → Easy API to embed.

react-github-calendar
 → For React.

Example (React):

import GitHubCalendar from "react-github-calendar";

<GitHubCalendar username="sushilsahani" />

5. Display on Portfolio

TIL Feed Section

Fetch last 5–10 commits.

Show commit message, date, and link.

Streak Calendar Section

Embed the calendar below your TIL feed.

Adds credibility + visual activity graph.

🚀 Extra Enhancements

Filter commits starting with TIL: only.

Store commits in a DB (Supabase/SQLite) for faster load.

Add animations (Framer Motion) for feed updates.

Auto-post TIL to Twitter/LinkedIn when you push a commit.

✅ Result:
Your portfolio will have a live TIL timeline + GitHub streak calendar, proving you’re always learning & active in coding.



2nd 

A blog page on your portfolio will be a storytelling powerhouse — it will showcase your journey, projects, learnings, and leadership all in one place. Here’s how I’d approach it step by step:

🏗️ Blog Page Approach
1. 🎯 Define Your Blog’s Core Purpose

Your blog should document + inspire + position you as an expert.
Main themes you can cover:

DevOps / Backend learning journey → your notes, docs, real-world fixes.

Entrepreneurship → starting LumaDev and scaling clients.

Teaching & Leadership → mentoring DSA + workshops.

Projects → robotics, drones, smart queue, healthcare automation.

Career growth → IIT Bombay internship, remote DevOps role.

Personal productivity → fitness + coding balance.

2. 📝 Structure Your Blog Page

Think of your blog like a knowledge + journey hub.
Sections:

Hero Section

Title: “🚀 My Journey & Learnings”

Subtitle: “Stories, projects, and insights from my path as a DevOps engineer, entrepreneur, and student leader.”

Featured Posts (Highlight your signature stories):

How I Landed My IIT Bombay Internship

Building a Drone That Saves Lives

From College Notes to DevOps Agency: The LumaDev Story

Categories (to organize posts):

🛠️ DevOps & Backend

🤖 Robotics & Drones

🎓 Teaching & Mentoring

💼 Startups & Internships

📚 Personal Growth

Blog Feed → Infinite scroll or pagination with cards for each post.

3. 🛠️ Tech Stack Options

Since you already run a portfolio:

If portfolio is in Next.js/React → Add /blog route.

Store content in Markdown (MDX) for easy writing.

Or connect to Notion API (your docs auto-sync into blog).

CMS Options (optional)

Notion (your devops docs → auto-publish)

Contentlayer / Sanity / Strapi if you want advanced setup.

4. ✍️ Writing Style

Keep posts story + takeaway:

Start with story → how you faced something.

Middle = learning → what tech/process helped.

End = takeaway → 1–2 actionable insights for readers.

Example:

“When I joined IIT Bombay as a DevOps intern, I was terrified of Kubernetes. My first task: scale a service to handle 10,000+ requests. After many sleepless nights, I learned the power of autoscaling & monitoring. Here’s how I solved it — and why I think every beginner should start with metrics, not code.”

5. 🌟 Standout Features for Your Blog

TIL Auto-Publish → Commits with TIL: go to blog as micro-posts.

AI Summaries → Each blog auto-generates TL;DR.

Learning Timeline → Chronological view of milestones.

DSA Snippets Section → Short “teaching moments” from your sessions.

Meme Corner (AI) → Generate memes about dev life (Nano Banana).

Interactive Project Demos → Small embedded videos/GIFs of your robotics/drone projects.

6. 🚀 Scaling the Blog

Weekly or bi-weekly posts.

Cross-post to LinkedIn, X (Twitter), and Hashnode/Dev.to.

Position yourself as a student → leader → engineer → founder.

✅ Result:
Your blog becomes a living resume + storybook, showing recruiters, clients, and students:

Your skills (DevOps, backend, robotics).

Your impact (teaching, internships, projects).

Your growth mindset (journey from beginner → leader).