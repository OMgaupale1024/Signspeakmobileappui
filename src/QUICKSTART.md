# Quick Start Guide

Get SignSpeak running in 2 minutes! ⚡

## 🚀 Installation

```bash
# 1. Clone the repository
git clone https://github.com/OMgaupale1024/sign-language-to-text-converter.git

# 2. Navigate to directory
cd sign-language-to-text-converter

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev
```

Open `http://localhost:5173` in your browser. Done! 🎉

## 📁 Project Overview

```
SignSpeak/
├── App.tsx              # Main app with routing
├── components/          # All UI components
│   ├── SplashScreen.tsx
│   ├── OnboardingScreen.tsx
│   ├── LoginScreen.tsx
│   ├── HomeScreen.tsx
│   ├── CameraScreen.tsx
│   ├── GestureLibrary.tsx
│   ├── ModelTraining.tsx
│   ├── SettingsScreen.tsx
│   ├── ProfileScreen.tsx
│   └── BottomNavigation.tsx
└── styles/
    └── globals.css      # Brutalist theme
```

## 🎨 Key Features

- ✅ 10 complete screens with brutalist design
- ✅ Dark/light mode support
- ✅ Smooth animations with Framer Motion
- ✅ Mock gesture recognition UI
- ✅ Interactive gesture library (A-Z)
- ✅ Training progress visualization
- ✅ User profile with stats & achievements

## 🛠️ Common Commands

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
```

## 🎯 Quick Changes

### Change Colors
Edit `/styles/globals.css`:
```css
:root {
  --brutalist-accent: #ff6b9d;    /* Your color */
}
```

### Add New Screen
1. Create `/components/YourScreen.tsx`
2. Add route in `App.tsx`
3. Add nav button in `BottomNavigation.tsx`

### Toggle Dark Mode
Click Settings → Preferences → Dark Mode toggle

## 📱 App Navigation

1. **Splash** → Auto-transitions to onboarding
2. **Onboarding** → 3-step tutorial
3. **Login** → Sign up or login
4. **Home** → Main dashboard with quick actions
5. **Camera** → Live gesture detection
6. **Library** → Browse A-Z gestures
7. **Training** → View AI training progress
8. **Settings** → App preferences & theme
9. **Profile** → User stats & achievements

## 🚢 Deploy in 1 Click

### Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/OMgaupale1024/sign-language-to-text-converter)

### Netlify
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/OMgaupale1024/sign-language-to-text-converter)

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## 🐛 Troubleshooting

**Port already in use?**
```bash
npm run dev -- --port 3000
```

**Dependencies not installing?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Build errors?**
```bash
rm -rf node_modules/.vite
npm run build
```

## 📚 Learn More

- **Full Setup Guide**: [SETUP.md](./SETUP.md)
- **Contributing**: [CONTRIBUTING.md](./CONTRIBUTING.md)
- **Deployment**: [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Main Docs**: [README.md](./README.md)

## 💡 Tips

- Use **dark mode** toggle in Settings to test both themes
- Check **browser console** for any errors
- Test **responsive design** by resizing browser
- All **mock data** is in component files (easy to replace)

## 🤝 Contributing

Found a bug? Want to add a feature?

```bash
# 1. Create a branch
git checkout -b feature/my-feature

# 2. Make changes
# ... edit files ...

# 3. Commit and push
git add .
git commit -m "feat: add my feature"
git push origin feature/my-feature

# 4. Open PR on GitHub
```

## 📞 Need Help?

- [Open an issue](https://github.com/OMgaupale1024/sign-language-to-text-converter/issues)
- [Check existing issues](https://github.com/OMgaupale1024/sign-language-to-text-converter/issues?q=is%3Aissue)
- [Start a discussion](https://github.com/OMgaupale1024/sign-language-to-text-converter/discussions)

---

**That's it! You're ready to build! 🚀**

⭐ Star the repo if you find it helpful!
