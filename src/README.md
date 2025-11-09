# SignSpeak – Sign Language to Text Converter

A modern, animated mobile app UI for real-time sign language gesture recognition using machine learning and camera-based detection. Built with React, TypeScript, and featuring a bold brutalist/neobrutalist design theme.

[![GitHub stars](https://img.shields.io/github/stars/OMgaupale1024/sign-language-to-text-converter?style=flat-square)](https://github.com/OMgaupale1024/sign-language-to-text-converter/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/OMgaupale1024/sign-language-to-text-converter?style=flat-square)](https://github.com/OMgaupale1024/sign-language-to-text-converter/network)
[![GitHub issues](https://img.shields.io/github/issues/OMgaupale1024/sign-language-to-text-converter?style=flat-square)](https://github.com/OMgaupale1024/sign-language-to-text-converter/issues)
[![License](https://img.shields.io/github/license/OMgaupale1024/sign-language-to-text-converter?style=flat-square)](https://github.com/OMgaupale1024/sign-language-to-text-converter/blob/main/LICENSE)

![SignSpeak](https://images.unsplash.com/photo-1530126483408-aa533e55bdb2?w=800&q=80)

## 🔗 Links

- **Live Demo**: [Coming Soon]
- **Repository**: [GitHub](https://github.com/OMgaupale1024/sign-language-to-text-converter)
- **Issues**: [Report Bug](https://github.com/OMgaupale1024/sign-language-to-text-converter/issues)
- **Discussions**: [Join Discussion](https://github.com/OMgaupale1024/sign-language-to-text-converter/discussions)

## 🎯 Features

### Core Functionality
- **Real-time Gesture Recognition**: Detect hand gestures (A–Z) in real-time using camera
- **Voice Playback**: Text-to-speech conversion for detected gestures
- **Gesture Library**: Interactive A-Z sign language reference with animations
- **Custom Model Training**: Train AI models with custom gesture samples
- **Progress Tracking**: Monitor learning progress and accuracy metrics
- **Dark/Light Mode**: Full theme support with smooth transitions

### Design System
- **Brutalist/Neobrutalist Theme**: Bold aesthetics with thick borders (3-6px)
- **Hard Shadows**: 4px-12px offset shadows with no blur
- **High Contrast Colors**: Pink (#ff6b9d), Purple (#c084fc), Yellow (#fbbf24), Blue (#60a5fa)
- **Typography**: Inter font family with bold all-caps headings
- **Smooth Animations**: Professional motion design using Framer Motion

## 🏗️ Project Structure

```
├── App.tsx                          # Main app component with routing
├── components/
│   ├── SplashScreen.tsx            # App launch screen
│   ├── OnboardingScreen.tsx        # 3-step tutorial
│   ├── LoginScreen.tsx             # Authentication UI
│   ├── HomeScreen.tsx              # Main dashboard
│   ├── CameraScreen.tsx            # Live gesture recognition
│   ├── GestureLibrary.tsx          # A-Z gesture reference
│   ├── ModelTraining.tsx           # AI training interface
│   ├── SettingsScreen.tsx          # App preferences
│   ├── ProfileScreen.tsx           # User stats & achievements
│   ├── BottomNavigation.tsx        # Navigation bar
│   ├── figma/
│   │   └── ImageWithFallback.tsx   # Image component with fallback
│   └── ui/                         # Shadcn UI components
├── styles/
│   └── globals.css                 # Global styles & brutalist theme
└── guidelines/
    └── Guidelines.md               # Design guidelines
```

## 🎨 Screens Overview

1. **Splash Screen** - Animated app logo with loading indicator
2. **Onboarding** - 3-slide tutorial introducing key features
3. **Login/Signup** - Authentication with social login options
4. **Home Dashboard** - Quick stats and navigation cards
5. **Camera Screen** - Live gesture detection with real-time feedback
6. **Gesture Library** - Searchable A-Z sign language reference
7. **Model Training** - AI training progress with metrics
8. **Settings** - Preferences with dark mode toggle
9. **Profile** - User stats, achievements, and progress tracking
10. **Navigation** - Bottom nav with 5 main sections

## 🚀 Getting Started

### Quick Start (2 minutes)

```bash
git clone https://github.com/OMgaupale1024/sign-language-to-text-converter.git
cd sign-language-to-text-converter
npm install
npm run dev
```

Open `http://localhost:5173` - Done! 🎉

📖 **New to the project?** Check out our [Quick Start Guide](./QUICKSTART.md)  
🔧 **Need detailed setup?** Read the [Complete Setup Guide](./SETUP.md)

### Prerequisites
- Node.js 16+ and npm/yarn
- Modern web browser
- Git

## 🎨 Theme System

The app supports both light and dark modes with automatic theme switching:

### Light Mode
- Background: Cream (#fef3c7)
- Text: Black (#000000)
- Cards: White (#ffffff)

### Dark Mode
- Background: Dark (#1a1a1a)
- Text: Cream (#fef3c7)
- Cards: Dark Gray (#2d2d2d)

Toggle theme in **Settings → Preferences → Dark Mode**

## 🛠️ Key Technologies

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Framer Motion** - Smooth animations
- **Tailwind CSS v4** - Utility-first styling
- **Shadcn/UI** - Accessible component library
- **Lucide React** - Icon system
- **Radix UI** - Headless UI primitives

## 📱 Component Features

### CameraScreen
- Real-time gesture detection simulation
- Confidence percentage display
- Text output with copy/speak/clear actions
- Start/pause recognition controls

### GestureLibrary
- Search functionality for all 26 letters
- Difficulty filtering (Easy/Medium/Hard)
- Interactive gesture cards with detailed modal
- Step-by-step learning instructions

### ModelTraining
- Training progress visualization
- Real-time metrics (Accuracy, Loss, Speed)
- Dataset upload interface
- Loss chart over time

### ProfileScreen
- User avatar with level badge
- Learning statistics grid
- Progress tracking (18/26 gestures)
- Achievement system
- Model export functionality

### SettingsScreen
- Voice output toggle
- Dark/light mode switch
- Real-time preview
- Notifications & haptic feedback
- Offline mode support
- Language selection
- Help & support

## 🎯 Customization

### Colors
Edit accent colors in `/styles/globals.css`:
```css
:root {
  --brutalist-accent: #ff6b9d;     /* Pink */
  --brutalist-accent-2: #c084fc;   /* Purple */
  --brutalist-accent-3: #fbbf24;   /* Yellow */
}
```

### Typography
Change font in `/styles/globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YOUR_FONT');
```

### Brutalist Effects
Adjust shadows and borders:
```css
:root {
  --brutalist-border: 3px;
  --brutalist-shadow: 6px 6px 0 0;
}
```

## 📝 Mock Data

The app uses simulated data for demonstration:
- Gesture detection (random letters A-Z)
- Training progress (107/200 epochs)
- User stats (94.2% accuracy, 47 sessions)
- Achievements (4 total, 3 unlocked)

To connect real APIs:
1. Replace mock detection in `CameraScreen.tsx`
2. Connect real training in `ModelTraining.tsx`
3. Integrate user authentication in `LoginScreen.tsx`

## 🔒 Best Practices

- **Accessibility**: ARIA labels on interactive elements
- **Performance**: Optimized animations (0.3s transitions)
- **Responsive**: Mobile-first design (375px base)
- **Type Safety**: Full TypeScript coverage
- **Component Reusability**: Modular architecture

## 🐛 Known Limitations

- Camera functionality is simulated (no actual video feed)
- Gesture detection uses random mock data
- User authentication is UI-only (no backend)
- Progress/stats are hardcoded for demo

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Attributions

See [Attributions.md](./Attributions.md) for image credits and third-party resources.

## 🚀 Deployment

Ready to deploy? Check out our [Deployment Guide](./DEPLOYMENT.md) for:
- One-click deployment to Vercel, Netlify, or GitHub Pages
- Custom domain setup
- Environment configuration
- Performance optimization tips

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guidelines](./CONTRIBUTING.md) before submitting a PR.

To contribute:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📧 Support

- **Bug Reports**: [Open an issue](https://github.com/OMgaupale1024/sign-language-to-text-converter/issues)
- **Feature Requests**: [Start a discussion](https://github.com/OMgaupale1024/sign-language-to-text-converter/discussions)
- **Questions**: Check existing issues or create a new one

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⭐ Show Your Support

Give a ⭐️ if this project helped you!

## 🙏 Attributions

See [Attributions.md](./Attributions.md) for image credits and third-party resources.

---

**Built with ❤️ using React, TypeScript, and Brutalist Design**

*Last Updated: November 9, 2025*
