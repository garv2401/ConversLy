# ConversLy

**ConversLy** is an AI-powered SaaS application where users can create, customize, and interact with their own AI companions. It's built to provide personalized, voice-based learning and conversation sessions tailored to the user's needs.

## Features

- **Custom AI Companions:** Users can create companions with specific personas (formal, male, female), assign topics for discussion, and set time limits for sessions.
- **Interactive Voice Sessions:** Engage in real-time, voice-based conversations with AI companions, powered by Vapi.
- **Live Transcription:** View a live transcript of the ongoing conversation with your companion for better understanding and review.
- **Bookmark & Search:** Easily bookmark your favorite companions and use the search functionality to discover other companions on the platform.
- **Subscription Plans:** Access the platform through multiple tiers, including a free plan to get started and paid plans for extended features.
- **Performance Monitoring:** Integrated with Sentry for robust error tracking and performance management.

## Tech Stack

- **Framework:** Next.js
- **Backend & Database:** Supabase
- **Authentication:** Clerk
- **Voice AI:** Vapi
- **Monitoring:** Sentry
- **Frontend:** React, TypeScript, Tailwind CSS
- **Deployment:** Vercel

## Getting Started

### 1. Clone the repository

```bash
git clone [https://github.com/yourusername/conversly.git](https://github.com/yourusername/conversly.git)
cd conversly
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Vapi Voice AI
VAPI_API_KEY=your_vapi_api_key

# Sentry Monitoring
SENTRY_DSN=your_sentry_dsn

# App URL for webhooks and redirects
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```
### 4. Set up the database

```bash
Set up your database schema (tables, columns, and relationships) directly within your Supabase project dashboard.
```

### 5. Start the development server

```bash
npm run dev
```
