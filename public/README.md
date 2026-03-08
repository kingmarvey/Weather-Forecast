# 🌤 Weather Prediction App

A minimal AI-powered weather forecast app built with React + Anthropic Claude.

---

## 🚀 Deploy to Vercel (Step-by-Step)

### 1. Push code to GitHub

```bash
# In your terminal, navigate to this folder
cd weather-app

# Initialize a git repo
git init
git add .
git commit -m "Initial commit"

# Create a new repo on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/weather-app.git
git push -u origin main
```

### 2. Connect to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up / log in (free)
2. Click **"Add New Project"**
3. Click **"Import"** next to your `weather-app` GitHub repo
4. Keep all default settings — Vercel auto-detects Create React App

### 3. Add your API key

Before clicking Deploy:
1. Expand **"Environment Variables"**
2. Add this variable:
   - **Name:** `REACT_APP_ANTHROPIC_API_KEY`
   - **Value:** your key from [console.anthropic.com](https://console.anthropic.com)
3. Click **Deploy**

### 4. Done! 🎉

Vercel gives you a live URL like:
```
https://weather-app-xyz.vercel.app
```

Share this link to test on any device.

---

## 🔄 Updating the app

Any time you push to GitHub, Vercel auto-redeploys:

```bash
git add .
git commit -m "Update app"
git push
```

---

## 💻 Run locally

```bash
cp .env.example .env
# Add your API key to .env

npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000)
