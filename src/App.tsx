import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SplashScreen from './components/SplashScreen';
import OnboardingScreen from './components/OnboardingScreen';
import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';
import CameraScreen from './components/CameraScreen';
import GestureLibrary from './components/GestureLibrary';
import ModelTraining from './components/ModelTraining';
import SettingsScreen from './components/SettingsScreen';
import ProfileScreen from './components/ProfileScreen';
import BottomNavigation from './components/BottomNavigation';

type Screen = 'splash' | 'onboarding' | 'login' | 'home' | 'camera' | 'library' | 'training' | 'settings' | 'profile';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [direction, setDirection] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (currentScreen === 'splash') {
      const timer = setTimeout(() => {
        setCurrentScreen('onboarding');
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  const handleNavigate = (screen: Screen) => {
    setDirection(1);
    setCurrentScreen(screen);
  };

  const showBottomNav = ['home', 'camera', 'library', 'training', 'settings'].includes(currentScreen);

  // Theme colors
  const theme = {
    bg: isDarkMode ? '#1a1a1a' : '#fef3c7',
    text: isDarkMode ? '#fef3c7' : '#000000',
    card: isDarkMode ? '#2d2d2d' : '#ffffff',
    border: isDarkMode ? '#fef3c7' : '#000000',
    gridPattern: isDarkMode ? '#fef3c7' : '#1a1a1a',
  };

  return (
    <div className="relative w-full h-screen overflow-hidden font-mono transition-colors duration-300" style={{ backgroundColor: theme.bg }}>
      {/* Brutalist grid pattern background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(${theme.gridPattern} 2px, transparent 2px),
            linear-gradient(90deg, ${theme.gridPattern} 2px, transparent 2px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Main content */}
      <div className="relative h-full">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentScreen}
            custom={direction}
            initial={{ opacity: 0, x: direction * 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -100 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {currentScreen === 'splash' && <SplashScreen theme={theme} />}
            {currentScreen === 'onboarding' && (
              <OnboardingScreen onComplete={() => handleNavigate('login')} theme={theme} />
            )}
            {currentScreen === 'login' && (
              <LoginScreen onLogin={() => handleNavigate('home')} theme={theme} />
            )}
            {currentScreen === 'home' && <HomeScreen onNavigate={handleNavigate} theme={theme} />}
            {currentScreen === 'camera' && <CameraScreen theme={theme} />}
            {currentScreen === 'library' && <GestureLibrary onNavigate={handleNavigate} theme={theme} />}
            {currentScreen === 'training' && <ModelTraining theme={theme} />}
            {currentScreen === 'settings' && <SettingsScreen isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} theme={theme} />}
            {currentScreen === 'profile' && <ProfileScreen onNavigate={handleNavigate} theme={theme} />}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Navigation */}
        {showBottomNav && (
          <BottomNavigation
            currentScreen={currentScreen}
            onNavigate={handleNavigate}
            theme={theme}
          />
        )}
      </div>
    </div>
  );
}
