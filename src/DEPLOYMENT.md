# Deployment Guide

This guide will help you deploy SignSpeak to various platforms.

## Prerequisites

- GitHub account
- Node.js 16+ installed locally
- Repository cloned: `https://github.com/OMgaupale1024/sign-language-to-text-converter.git`

## Quick Deploy Options

### Option 1: Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/OMgaupale1024/sign-language-to-text-converter)

**Steps:**
1. Click the "Deploy with Vercel" button above
2. Sign in with GitHub
3. Import the repository
4. Configure project:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click "Deploy"

Your app will be live at: `https://your-project.vercel.app`

### Option 2: Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/OMgaupale1024/sign-language-to-text-converter)

**Steps:**
1. Click the "Deploy to Netlify" button above
2. Connect to GitHub
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Click "Deploy site"

### Option 3: GitHub Pages

**Steps:**

1. **Enable GitHub Pages in your repository:**
   - Go to Settings → Pages
   - Source: GitHub Actions

2. **Create workflow file:**

This file `.github/workflows/deploy.yml` will be created automatically:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

3. **Push to trigger deployment:**
   ```bash
   git add .
   git commit -m "feat: add GitHub Pages deployment"
   git push origin main
   ```

Your app will be available at: `https://devansh-47.github.io/Sign-Language-To-Text-and-Speech-Conversion/`

### Option 4: Manual Build

**Build locally and deploy to any static hosting:**

```bash
# Install dependencies
npm install

# Create production build
npm run build

# The dist/ folder contains your production-ready app
# Upload the contents of dist/ to your hosting provider
```

## Environment Variables

Currently, SignSpeak doesn't require environment variables for frontend deployment. 

If you add backend features (Supabase, APIs, etc.), you'll need to configure:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

Add these in your hosting platform's environment variables section.

## Post-Deployment

After deployment:

1. ✅ **Test the live app** - Check all screens work
2. ✅ **Test dark mode** - Toggle and verify
3. ✅ **Test responsive design** - Check on mobile
4. ✅ **Check console** - No errors
5. ✅ **Update README** - Add live demo link

## Updating Your Deployment

All platforms support automatic deployment:

1. **Make changes** to your code
2. **Commit and push** to main branch:
   ```bash
   git add .
   git commit -m "feat: your changes"
   git push origin main
   ```
3. **Automatic deploy** triggers on push
4. **Live in 1-2 minutes**

## Troubleshooting

### Build fails with "command not found"
- Ensure `package.json` has correct build script
- Check Node version (requires 16+)

### Blank page after deployment
- Check browser console for errors
- Verify base path in `vite.config.ts` if using subdirectory
- Ensure all assets are properly referenced

### Styles not loading
- Run `npm run build` locally to test
- Check that Tailwind CSS is properly configured
- Verify `styles/globals.css` is imported in `App.tsx`

### Images not showing
- Ensure images are imported correctly
- Check Unsplash API calls are working
- Verify image paths in production

## Performance Optimization

For production, consider:

- ✅ **Enable gzip compression** (automatic on most platforms)
- ✅ **Configure caching headers** for static assets
- ✅ **Enable CDN** (Vercel/Netlify provide this)
- ✅ **Optimize images** - Use WebP format when possible
- ✅ **Code splitting** - Already configured with Vite

## Custom Domain

To use a custom domain:

### Vercel
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed

### Netlify
1. Go to Domain Settings
2. Add custom domain
3. Configure DNS

### GitHub Pages
1. Add `CNAME` file with your domain
2. Update DNS to point to GitHub Pages
3. Enable HTTPS in repository settings

## Support

For deployment issues:
- Check platform documentation (Vercel, Netlify, GitHub)
- Review build logs for errors
- Open an issue: https://github.com/OMgaupale1024/sign-language-to-text-converter/issues

---

**Happy Deploying! 🚀**
