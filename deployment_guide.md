# Deployment Guide: The Farmer Company Platform

This guide will help you take the application from your local machine to a live public URL.

## Prerequisites
1.  **GitHub Account**: To host your code repository.
2.  **Vercel Account**: For frontend hosting (free).
3.  **Supabase Account**: For the backend database and auth (free).

---

## Step 1: Push Code to GitHub
1.  Initialize git if you haven't:
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    ```
2.  Create a new repository on GitHub (e.g., `the-farmer-company-platform`).
3.  Push your code:
    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/the-farmer-company-platform.git
    git push -u origin main
    ```

---

## Step 2: Set up Supabase (Backend)
1.  Go to [supabase.com](https://supabase.com) and create a new project.
2.  **Database Setup**:
    *   Go to **SQL Editor** in the sidebar.
    *   Click **New Query**.
    *   Copy the contents of `supabase/schema.sql` from your project.
    *   Paste it into the editor and click **Run**.
    *   *Success! Your database tables are now created.*
3.  **Auth Setup**:
    *   Go to **Authentication** -> **Providers**.
    *   Enable **Phone Auth**.
    *   (Optional) For testing, you can add a fixed SMS provider or just use real numbers if you set up Twilio later.
4.  **Get API Keys**:
    *   Go to **Project Settings** (Cog icon) -> **API**.
    *   Copy the `Project URL` and `anon` public key. You will need these for Step 3.

---

## Step 3: Deployment to Vercel (Frontend)
1.  Go to [vercel.com](https://vercel.com) and click **Add New** -> **Project**.
2.  Import your `the-farmer-company-platform` GitHub repository.
3.  **Configure Project**:
    *   **Framework Preset**: Vite (should be auto-detected).
    *   **Root Directory**: `./` (default).
4.  **Environment Variables**:
    *   Expand the "Environment Variables" section.
    *   Add the following keys (using values from Supabase Step 2):
        *   `VITE_SUPABASE_URL` = `your_project_url`
        *   `VITE_SUPABASE_ANON_KEY` = `your_anon_key`
5.  Click **Deploy**.

---

## Step 4: Verification
1.  Wait for Vercel to finish building.
2.  Click the **Visit** button to see your live site!
3.  Try logging in with a mobile number.
    *   *Note*: If you haven't set up a real SMS provider in Supabase yet, use the Supabase Dashboard to view the OTP sent to the "Log" section, or enable the "Mock Mode" logic in the code if you prefer to keep testing without real SMS costs.

**Congratulations! Your ecosystem is live.** 🚀
