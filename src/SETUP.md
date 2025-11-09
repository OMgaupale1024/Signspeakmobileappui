# Setup Guide for SignSpeak

Complete setup instructions to get SignSpeak running on your local machine and prepare for GitHub deployment.

## 📋 Prerequisites

Before you begin, ensure you have:
- **Node.js** 16.x or higher ([Download](https://nodejs.org/))
- **npm** 7.x or higher (comes with Node.js)
- **Git** ([Download](https://git-scm.com/))
- **GitHub Account** ([Sign up](https://github.com/signup))
- Code editor (VS Code recommended)

## 🔧 Local Setup

### Step 1: Clone the Repository

```bash
# Clone your fork or the main repository
git clone https://github.com/OMgaupale1024/sign-language-to-text-converter.git

# Navigate to project directory
cd sign-language-to-text-converter
```

### Step 2: Install Dependencies

```bash
# Install all required packages
npm install
```

This will install:
- React & React DOM
- TypeScript
- Vite
- Tailwind CSS v4
- Framer Motion (Motion)
- Lucide React (icons)
- Recharts (charts)
- Shadcn UI components
- And all other dependencies

### Step 3: Start Development Server

```bash
# Start the dev server
npm run dev
```

The app will open at: `http://localhost:5173`

### Step 4: Verify Everything Works

✅ Check that the app loads without errors  
✅ Navigate through all screens  
✅ Toggle dark/light mode  
✅ Test responsive design (resize browser)  
✅ Check browser console for errors (should be none)

## 🔄 Git Workflow

### Initial Setup (If starting fresh)

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "feat: initial commit - SignSpeak brutalist UI"

# Add remote repository
git remote add origin https://github.com/OMgaupale1024/sign-language-to-text-converter.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Making Changes

```bash
# Create a new branch for your feature
git checkout -b feature/your-feature-name

# Make your changes...

# Stage changes
git add .

# Commit with descriptive message
git commit -m "feat: add new feature description"

# Push to GitHub
git push origin feature/your-feature-name

# Create Pull Request on GitHub
```

### Syncing with Latest Changes

```bash
# Switch to main branch
git checkout main

# Pull latest changes
git pull origin main

# Switch back to your feature branch
git checkout feature/your-feature-name

# Merge main into your branch
git merge main
```

## 📦 Build for Production

### Create Production Build

```bash
# Build optimized production version
npm run build
```

The build output will be in the `dist/` folder.

### Test Production Build Locally

```bash
# Preview production build
npm run preview
```

This serves the production build at `http://localhost:4173`

### Build Verification Checklist

✅ No build errors or warnings  
✅ All assets load correctly  
✅ Dark/light mode works  
✅ All routes accessible  
✅ Images display properly  
✅ No console errors  

## 🌐 GitHub Pages Setup

### Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: **GitHub Actions**
4. The workflow file is already included at `.github/workflows/deploy.yml`

### Trigger Deployment

```bash
# Any push to main branch triggers deployment
git add .
git commit -m "feat: update app"
git push origin main
```

Wait 2-3 minutes for deployment to complete.

Your app will be live at:
```
https://devansh-47.github.io/Sign-Language-To-Text-and-Speech-Conversion/
```

## 🔐 Environment Variables (Optional)

If you add backend features, create a `.env` file:

```bash
# Create .env file in root directory
touch .env
```

Add your variables:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_key
```

**Note:** The `.env` file is gitignored and won't be committed.

For deployment platforms:
- **Vercel**: Add in Project Settings → Environment Variables
- **Netlify**: Add in Site Settings → Environment Variables
- **GitHub Pages**: Use GitHub Secrets (for GitHub Actions)

## 🛠️ Development Tools

### Recommended VS Code Extensions

- **ES7+ React/Redux/React-Native snippets**
- **Tailwind CSS IntelliSense**
- **ESLint**
- **Prettier**
- **GitLens**

### Useful Commands

```bash
# Install a new package
npm install package-name

# Remove a package
npm uninstall package-name

# Update packages
npm update

# Check for outdated packages
npm outdated

# Clear cache (if issues)
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

## 🐛 Troubleshooting

### Port Already in Use

```bash
# Kill process on port 5173 (Mac/Linux)
lsof -ti:5173 | xargs kill -9

# Or use different port
npm run dev -- --port 3000
```

### Module Not Found Errors

```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Build Fails

```bash
# Clear Vite cache
rm -rf node_modules/.vite
npm run build
```

### Git Push Rejected

```bash
# Pull latest changes first
git pull origin main --rebase
git push origin main
```

### GitHub Pages Not Deploying

1. Check Actions tab for workflow errors
2. Ensure GitHub Pages is enabled in Settings
3. Verify workflow file syntax
4. Check build logs for errors

## 📝 Project Structure Quick Reference

```
├── App.tsx                    # Main routing component
├── components/                # All React components
│   ├── *.tsx                 # Screen components
│   ├── ui/                   # Shadcn components
│   └── figma/                # Utility components
├── styles/                    # Global styles
│   └── globals.css           # Brutalist theme
├── .github/workflows/         # CI/CD workflows
├── package.json              # Dependencies
└── README.md                 # Documentation
```

## 🎯 Next Steps

After setup:

1. ✅ **Explore the app** - Navigate all screens
2. ✅ **Read the code** - Understand component structure
3. ✅ **Make changes** - Customize colors/content
4. ✅ **Deploy** - Push to GitHub and deploy
5. ✅ **Share** - Show your project to the world!

## 📚 Additional Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)
- [Motion (Framer Motion) Docs](https://motion.dev/)
- [Shadcn UI Components](https://ui.shadcn.com/)

## 💬 Get Help

Having issues? Here's how to get help:

1. Check this setup guide thoroughly
2. Search [existing issues](https://github.com/OMgaupale1024/sign-language-to-text-converter/issues)
3. Review error messages carefully
4. Open a new issue with:
   - Clear description of the problem
   - Steps to reproduce
   - Error messages/screenshots
   - Your environment (OS, Node version, etc.)

---

**Happy coding! 🚀**

If you find this helpful, give the repo a ⭐️
