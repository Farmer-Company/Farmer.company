# System Requirements & Configuration

To successfully run key features of **The Farmer Company** platform, you must configure the following environment variables.

## 💻 System Prerequisites

*   **Runtime:** Node.js v18.0.0 or higher
*   **Package Manager:** npm (v9+) or yarn

## 🔑 Environment Variables

Create a file named `.env.local` in the root of your project and populate it with the keys below.

### Core Backend (Supabase)
Required for Authentication, Database connectivity, and Real-time subscriptions.
```bash
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_public_key
```

### Maps & Location Services (Mapbox)
Required for the interactive maps in RouteMaster and Origin portals.
```bash
VITE_MAPBOX_TOKEN=your_mapbox_access_token
```

### AI Intelligence (Google Gemini)
Required for AI-driven insights and chat support features.
```bash
VITE_GEMINI_API_KEY=your_google_ai_studio_key
```

> **Note:** Do not commit `.env.local` to version control. It is already ignored in `.gitignore` to protect your secrets.
