import { motion } from 'motion/react';
import { Home, Camera, BookOpen, Brain, Settings } from 'lucide-react';

interface Theme {
  bg: string;
  text: string;
  card: string;
  border: string;
  gridPattern: string;
}

interface BottomNavigationProps {
  currentScreen: string;
  onNavigate: (screen: string) => void;
  theme: Theme;
}

const navItems = [
  { id: 'home', icon: Home, label: 'Home' },
  { id: 'camera', icon: Camera, label: 'Camera' },
  { id: 'library', icon: BookOpen, label: 'Library' },
  { id: 'training', icon: Brain, label: 'Training' },
  { id: 'settings', icon: Settings, label: 'Settings' },
];

export default function BottomNavigation({ currentScreen, onNavigate, theme }: BottomNavigationProps) {
  return (
    <div className="absolute bottom-0 left-0 right-0 border-t-[4px] transition-colors duration-300" style={{ backgroundColor: theme.card, borderColor: theme.border }}>
      <div className="flex items-center justify-around px-4 py-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentScreen === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="relative flex flex-col items-center gap-1 px-4 py-2 transition-transform hover:scale-105"
            >
              {/* Active background */}
              {isActive && (
                <motion.div
                  layoutId="active-nav"
                  className="absolute inset-0 bg-[#ff6b9d] border-[3px]"
                  style={{ borderColor: theme.border }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              )}

              {/* Icon */}
              <Icon
                className="w-6 h-6 relative z-10"
                style={{ color: isActive ? theme.border : theme.text, opacity: isActive ? 1 : 0.6 }}
                strokeWidth={isActive ? 3 : 2.5}
              />
              
              {/* Label */}
              <span
                className="text-[10px] font-black uppercase relative z-10"
                style={{ color: isActive ? theme.border : theme.text, opacity: isActive ? 1 : 0.6 }}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
