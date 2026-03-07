# Rutvik Raval — Portfolio Website

Terminal-inspired dark portfolio for Senior Software Engineer Rutvik Raval.
Built with pure HTML, CSS, and JS — no frameworks, no build tools.

---

## 📁 Files

```
rutvik2402.github.io/
├── index.html          ← Main page
├── style.css           ← All styles (terminal/green aesthetic)
├── script.js           ← Animations, particles, AI chat, form
├── assets/
│   └── Rutvik_Raval_Resume.pdf   ← Place your resume here!
└── README.md
```

---

## ✏️ What to Personalize

### 1. GitHub / Social Links in `index.html`
Search for `rutvik2402` and update your actual GitHub / LinkedIn handles:
```html
<a href="https://github.com/YOUR-GITHUB-USERNAME" ...>
<a href="https://linkedin.com/in/YOUR-LINKEDIN" ...>
```

### 2. AI Chat API Key in `script.js`
At the top of `script.js`, replace:
```javascript
key: "YOUR_API_KEY_HERE",
```
→ Get your key from: https://console.anthropic.com → API Keys

### 3. Your Resume PDF
Put your actual resume PDF inside the `assets/` folder named:
```
assets/Rutvik_Raval_Resume.pdf
```

---

## 🌐 Host on GitHub Pages (FREE)

### Step 1 — Create GitHub Account
Go to https://github.com → Sign up

### Step 2 — Create the Special Repository
- Click **"+"** → **"New repository"**
- Name it: `rutvik2402.github.io` (replace with YOUR username)
- Set to **Public**
- Click **Create**

### Step 3 — Upload Files
**Easy way (drag & drop):**
1. Open repo on GitHub
2. Click **"Add file"** → **"Upload files"**
3. Drag all files: `index.html`, `style.css`, `script.js`
4. Upload `assets/` folder separately
5. Click **"Commit changes"**

**Git way:**
```bash
git init
git add .
git commit -m "Launch Rutvik's portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git
git push -u origin main
```

### Step 4 — Enable GitHub Pages
1. Repository → **Settings** → **Pages** (left sidebar)
2. Source: **"Deploy from a branch"**
3. Branch: **main** → **/ (root)**
4. Click **Save**
5. Wait 2–3 minutes
6. Visit: `https://YOUR-USERNAME.github.io` 🎉

---

## 🔑 Keeping Your API Key Safe

**Option A — Direct (for personal use):**
Paste key directly in `script.js`. Fine since it's a personal portfolio.

**Option B — Vercel Proxy (recommended):**

1. Sign up at https://vercel.com
2. Create `/api/chat.js` in your project:
```javascript
export default async function handler(req, res) {
  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01"
    },
    body: JSON.stringify(req.body)
  });
  const data = await response.json();
  res.json(data);
}
```
3. In `script.js` change the fetch URL to `/api/chat`
4. Add your key in Vercel → Settings → Environment Variables

---

## 📧 Make the Contact Form Work

### Formspree (free, 50 emails/month):
1. Go to https://formspree.io → Create account → New Form
2. Copy your form endpoint (e.g. `https://formspree.io/f/xabcdefg`)
3. In `script.js`, uncomment the Formspree block and add your endpoint

---

## 🔄 How to Update

After editing files:
```bash
git add .
git commit -m "Update portfolio"
git push
```
Goes live in ~1 minute!

---

## 🌍 Custom Domain (Optional)

Want `rutvik2402.dev` instead of `rutvik2402.github.io`?

1. Buy domain (Namecheap/GoDaddy — ~₹800/year)
2. Create `CNAME` file in repo root:
   ```
   rutvik2402.dev
   ```
3. DNS settings at your registrar:
   ```
   A    @    185.199.108.153
   A    @    185.199.109.153
   A    @    185.199.110.153
   A    @    185.199.111.153
   CNAME www  rutvik2402.github.io
   ```
4. GitHub → Settings → Pages → Custom domain → Enter your domain
5. Enable "Enforce HTTPS" ✓

---

*Built with purpose · Hosted free on GitHub Pages*