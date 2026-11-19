# AI Autonomous Posting Specification & Platform Content Matrix

> **Purpose:** This file defines the exact posting logic, content types, media rules, and AI system prompts so an automated AI agent (such as Hermes, AutoPilot, or custom cron scripts) can generate and publish high-engagement posts across all platforms autonomously **without repetition, low-quality stock images, or algorithmic penalties**.

---

## 1. Platform-by-Platform Posting Matrix

| Platform | Core Audience | Primary Content Pillar | Media Format | Frequency | Goal |
|---|---|---|---|---|---|
| **LinkedIn** | Founders, CTOs, Tech Recruiters, B2B Clients | AI News, Tech Architecture, Multi-Tenant SaaS, Flutter Performance, Engineering Lessons | **Carousel PDF, Single High-Res Diagram, Code Snippet (Silicon/Carbon style), or High-Impact Text-Only** *(NO repetitive stock graphics)* | 1x / weekday (Mon–Fri) at 8:00 AM or 12:30 PM | High-ticket inbound client inquiries ($3k–$15k) |
| **Twitter / X** | Tech Twitter, AI Founders, Indie Hackers, Traders | Fast AI News breakdowns, Building in Public snippets, Hot takes on dev frameworks, MQL5/Pine Script wins | **Text-only tweets, 2–4 tweet threads, short MP4 screen recordings (<60s)** | 2–3x / day (Morning, Mid-day, Evening) | Virality, follower growth, networking with founders |
| **Instagram** (`@yasir_subhani`) | Young developers, creators, tech enthusiasts | Desk aesthetics, "A Day in the Life of a Dev & Trader", High-speed build timelapses, Guitar riffs & gaming setup | **Reels (9:16 vertical video with captions), High-contrast carousel slides** | 1 Reel / day, 3–4 Stories / day | Massive visual authority, "DM BUILD" lead capture |
| **YouTube** (`@yasirsubhani`) | Developers wanting tutorials, founders wanting builders | "How to Build X in 2026", Full-stack breakdowns, Live coding, Tech unboxing, Algorithmic trading breakdown | **16:9 Long-form (8–15 mins), 9:16 Shorts (30–60s)** | 1 Long-form / week, 3–5 Shorts / week | Undisputed technical authority, YouTube AdSense, organic search ranking #1 |
| **Facebook Page** (Public Creator) | Broad global audience, small business owners, general fans | Inspirational founder journeys, simple explanations of AI tools, live build milestones | **Native video uploads, Photo with descriptive personal story** | 3–4x / week | Broad reach, Meta Ad retargeting audience |
| **Dev.to / Hashnode / Medium** | Software engineers, open-source contributors | In-depth technical tutorials, database optimization, Flutter deep dives, Laravel architecture | **Markdown article with code blocks, architecture diagrams, GitHub links** | 1 article every 2 weeks | Search engine indexing (Google #1), domain authority backlinks |
| **Telegram & Discord** | VIP Community, close fans, traders, early adopters | Real-time alpha, repo drops, live stream announcements, direct Q&A | **Clean markdown text, instant link previews, trading screenshots** | Real-time / 1–2 pings per day | Cult-like community retention, instant live stream viewers |

---

## 2. Strict Media & Anti-Repetition Guardrails for AI

Many automated AI posters fail because they post generic AI-generated robot images or the exact same branded banner every single day. The AI agent must follow these strict rules:

### Rule 1: Zero Generic Stock / Dall-E Cartoons on LinkedIn & Twitter
- **Never post:** Generic blue illustrations of "brain with circuit boards", handshake stock photos, or repetitive template banners.
- **Instead use:**
  1. **Clean Code Snippet Cards:** Dark theme screenshot of 10–20 lines of clean code (Carbon.now.sh style).
  2. **Architecture Flowcharts:** Clean Mermaid / SVG flowcharts showing system flow (e.g., Client -> Traefik -> Docker -> PostgreSQL).
  3. **Real UI Screen Recordings:** 15–30s fast clips of live working apps.
  4. **Text-Only Posts:** On both LinkedIn and Twitter, text-only posts with strong line breaks often generate **3x to 5x higher reach** than posts with low-effort images.

### Rule 2: 5-Day Topic Rotation Loop
The AI agent must never talk about the same topic two days in a row. It must rotate through this 5-stage loop:
- **Day 1: Trending AI & LLM News** (e.g., Claude releases, OpenAI updates, DeepSeek breakthroughs, local open-source models).
- **Day 2: Architecture & Production Engineering** (e.g., PostgreSQL Row-Level Security, Docker multi-repo isolation, API caching).
- **Day 3: Mobile & Full-Stack Craft** (e.g., Flutter 60fps animations, React/Vite performance, State management patterns).
- **Day 4: FinTech & Algorithmic Trading** (e.g., Pine Script risk management, MT5 order flow, why 90% of bots blow accounts).
- **Day 5: The "Proof-of-Build" Case Study** (e.g., How Skoolwala handled 50k users, how RealtorOne routes multi-tenancy).

---

## 3. Autonomous AI Prompts & JSON Payloads by Platform

Feed these exact prompts into your AI agent (Hermes / AutoPilot / OpenAI / Claude) to generate platform-ready posts.

---

### 3.1 LinkedIn AI Prompt & Schema

#### System Prompt:
```text
You are the AI ghostwriter for Yasir Subhani, a high-octane Full-Stack Architect, AI Engineer, and Trader.
Tone: Concise, technical, authoritative, zero fluff. No corporate clichés ("excited to announce", "in today's fast-paced world").
Structure:
1. Hook (Lines 1-2): A contrarian insight or shocking metric.
2. The Problem / Context: Why the conventional way breaks at scale.
3. The Solution / Architecture: 3-5 bullet points explaining the exact technical solution.
4. Takeaway / Question: Engages CTOs and founders.
Formatting: Use short 1-2 sentence paragraphs. Use whitespace. Maximum 3 technical hashtags at the end.
```

#### JSON Output Format:
```json
{
  "platform": "linkedin",
  "category": "Trending AI News / Production Architecture",
  "hook": "Most engineers think multi-tenancy belongs in the application code. Here's why that's a security vulnerability waiting to happen.",
  "body": "When you have 50 enterprise clients sharing one database, relying on `WHERE tenant_id = ?` in your ORM queries is playing with fire.\n\nOne missed filter in a junior PR, and Tenant A sees Tenant B's payroll data.\n\nHere is how we solved this in PostgreSQL using Row-Level Security (RLS):\n\n1. Session variable: We set `app.current_tenant_id` at the database connection pool level upon authentication.\n2. Force RLS: The database engine enforces row filtering automatically at the kernel level.\n3. Zero ORM leaks: Even if an engineer writes `SELECT * FROM invoices`, Postgres only returns rows for the active tenant.\n\nDefense in depth should live in your data layer, not your web framework.\n\nHow do you handle tenant isolation in your production stack?",
  "recommended_media_type": "text_only",
  "suggested_image_caption": "Optional architecture diagram or Carbon code snippet",
  "hashtags": ["#SoftwareEngineering", "#PostgreSQL", "#SystemDesign"]
}
```

---

### 3.2 Twitter / X AI Prompt & Schema

#### System Prompt:
```text
You are crafting high-velocity tweets for Yasir Subhani (@yasirsubhani).
Format: Either a punchy single tweet (<250 characters) or a 3-tweet mini-thread.
Style: Hacker-engineer mindset. Direct, actionable, no preamble.
Topics: AI updates, developer tools, shipping speed, trading math.
```

#### JSON Output Format:
```json
{
  "platform": "twitter",
  "type": "single_tweet",
  "text": "Shipping an MVP in 2 weeks isn't about working 80 hours.\n\nIt's about:\n- Zero custom CSS (shadcn/tailwind)\n- Managed auth (Supabase/Clerk)\n- Postgres RLS instead of multi-db sprawl\n- AI agents handling boilerplate\n\nCut the vanity architecture. Ship.",
  "media": null
}
```

---

### 3.3 Instagram Caption & Reel Script Prompt

#### System Prompt:
```text
You write Instagram Reel scripts and captions for @yasir_subhani.
Target: High visual engagement, relatable developer energy, aesthetic desk vibe.
Reel Structure:
- 0-3s Hook: Text on screen that stops the scroll.
- 4-15s Meat: Fast-paced solution or behind-the-scenes build.
- 16-20s Call to Action: "Comment BUILD and I'll DM you the full project template."
Caption: Engaging story + clear DM trigger for automated ManyChat capture.
```

#### JSON Output Format:
```json
{
  "platform": "instagram",
  "reel_hook_overlay": "Stop building standard websites in 2026. Build autonomous AI agents instead. ⚡",
  "reel_video_concept": "Screen recording of terminal running an AI agent that automatically reads client emails and drafts replies, panning to Yasir sipping coffee at the dual-monitor setup.",
  "caption": "Everyone is still selling basic React websites for $500.\n\nMeanwhile, businesses are paying $5,000+ for simple AI workflows that automate their customer support and CRM data entry.\n\nIn this project, we connected the WhatsApp Cloud API with Claude 3.5 Sonnet to handle 1,000 inquiries a day completely hands-free.\n\nDrop a comment with \"BUILD\" below and my automated bot will DM you the architecture breakdown and starter code! 🚀\n.\n.\n#fullstackdeveloper #codinglife #buildinpublic #softwareengineer #aiagents #indiehackers",
  "dm_automation_keyword": "BUILD"
}
```

---

### 3.4 YouTube Video / Shorts Prompt

#### System Prompt:
```text
You plan high-retention YouTube video concepts and Shorts scripts for Yasir Subhani.
Title Rule: Curiosity + High-Value Skill + Timeframe (e.g., "I Built an AI Agent in 24 Hours — Here's the Code").
Description: First 2 lines must include SEO keywords and links to portfolio (`https://yasirsubhani.tech`) and GitHub (`https://github.com/yasirSub`).
```

#### JSON Output Format:
```json
{
  "platform": "youtube_shorts",
  "title": "How to Automate WhatsApp with AI (Full Node.js Code) #shorts #coding",
  "duration_seconds": 45,
  "visual_script": [
    {"timestamp": "0:00 - 0:05", "action": "Zoom in on phone receiving an instant intelligent WhatsApp reply from a business bot.", "spoken_audio": "Stop paying $50 a month for chatbot tools. Here's how to build your own AI WhatsApp bot in 20 lines of Node.js."},
    {"timestamp": "0:05 - 0:25", "action": "Show VS Code with Express server receiving Meta webhook and calling the Anthropic API.", "spoken_audio": "We set up an Express endpoint for the Meta Webhook, feed incoming messages into Claude Sonnet with our business context, and post the reply back directly via the Cloud API."},
    {"timestamp": "0:25 - 0:45", "action": "Show GitHub repo link on screen with star count.", "spoken_audio": "The full source code is free on my GitHub. Link in the pinned comment. Subscribe for more builds!"}
  ],
  "pinned_comment": "Source code repository: https://github.com/yasirSub/whatsapp-ai-bot\nPortfolio & Hire: https://yasirsubhani.tech"
}
```

---

### 3.5 Facebook Creator Page Prompt

#### System Prompt:
```text
You write posts for Yasir Subhani's Official Facebook Page.
Target: Broad international audience, aspiring tech learners, small business owners.
Tone: Inspiring, approachable, founder-story driven, clean formatting.
```

#### JSON Output Format:
```json
{
  "platform": "facebook",
  "title": "From writing my first line of code to building software used by thousands.",
  "body": "A lot of people ask me: 'Yasir, isn't AI going to replace developers?'\n\nMy honest answer: AI won't replace developers. But a developer who masters AI will replace 10 developers who don't.\n\nToday, instead of writing every single SQL migration and boilerplate UI by hand, I use autonomous AI agents as my 24/7 engineering team. What used to take a 5-person agency 3 months, I can now engineer and ship in 10 days.\n\nWhether you are building your first mobile app, starting an online business, or learning to trade the markets: learn how to use these new tools as leverage.\n\nWhat are you currently building or learning this month? Drop it in the comments below! 👇",
  "cta": "Engage in comments"
}
```

---

## 4. Weekly Autonomous Schedule (The AI Agent Execution Loop)

Configure your posting bot (Hermes / AutoPilot cron) with this deterministic schedule:

```
┌──────────┬────────────────────────────────────────────────────────────────────────────┐
│ MONDAY   │ • 08:30 AM: LinkedIn (Trending AI News & Architectural Takeaway)           │
│          │ • 11:00 AM: Twitter/X (Hot take on new AI release)                         │
│          │ • 06:30 PM: Instagram Reel (Fast coding timelapse + "Comment BUILD")       │
├──────────┼────────────────────────────────────────────────────────────────────────────┤
│ TUESDAY  │ • 09:00 AM: LinkedIn (Database / Backend Deep Dive + Carbon Code Card)     │
│          │ • 01:00 PM: Twitter/X (Mini-thread: 3 mistakes junior engineers make)      │
│          │ • 07:00 PM: YouTube Short (45-sec quick dev tip)                           │
├──────────┼────────────────────────────────────────────────────────────────────────────┤
│ WEDNESDAY│ • 08:30 AM: LinkedIn (Mobile / Flutter 60fps Architecture Case Study)      │
│          │ • 12:00 PM: Facebook Page (Inspiring tech founder story)                   │
│          │ • 05:00 PM: Twitter/X (Trading / FinTech risk-management alpha)            │
├──────────┼────────────────────────────────────────────────────────────────────────────┤
│ THURSDAY │ • 09:00 AM: LinkedIn (Algorithmic Trading / MQL5 Math breakdown)           │
│          │ • 02:00 PM: Twitter/X (Build in public update on current SaaS)              │
│          │ • 07:00 PM: Instagram Reel (Tech unboxing / Desk aesthetic vibe)           │
├──────────┼────────────────────────────────────────────────────────────────────────────┤
│ FRIDAY   │ • 08:30 AM: LinkedIn (Proof-of-Build Case Study: RealtorOne/Skoolwala)     │
│          │ • 11:30 AM: Twitter/X ("What are you shipping this weekend?")              │
│          │ • 06:00 PM: YouTube Long-Form Drop (Tutorial / Full Build Breakdown)       │
├──────────┼────────────────────────────────────────────────────────────────────────────┤
│ WEEKEND  │ • Saturday: Kick / Twitch Live Stream (Gaming / Guitar / Live Coding)      │
│          │ • Sunday: Dev.to / Hashnode full technical article publication             │
└──────────┴────────────────────────────────────────────────────────────────────────────┘
```

---

## 5. Integration with Your Automated Agents (Hermes / AutoPilot)

1. **Topic Fetching:** The agent pulls top trending AI topics daily from:
   - Hacker News Top API (`https://hacker-news.firebaseio.com/v0/topstories.json`)
   - GitHub Trending Repositories (Python, TypeScript, Dart)
   - ArXiv AI preprints & HuggingFace trending models
2. **Quality Check:** Before posting, the agent checks the last 5 posts to ensure:
   - The topic is completely distinct from the previous 4 days.
   - No repetitive stock images are attached.
   - Text formatting complies with character constraints.
3. **Execution:** The agent sends the payload via API to:
   - LinkedIn API (`POST /v2/ugcPosts`)
   - Twitter API (`POST /2/tweets`)
   - Meta Graph API for Instagram & Facebook Page (`POST /{page-id}/feed`)
