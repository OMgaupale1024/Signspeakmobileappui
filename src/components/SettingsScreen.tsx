import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Volume2,
  Moon,
  Eye,
  Bell,
  Vibrate,
  Wifi,
  Languages,
  HelpCircle,
  ChevronRight,
} from 'lucide-react';
import { Switch } from './ui/switch';

interface Theme {
  bg: string;
  text: string;
  card: string;
  border: string;
  gridPattern: string;
}

interface SettingsScreenProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
  theme: Theme;
}

export default function SettingsScreen({ isDarkMode, setIsDarkMode, theme }: SettingsScreenProps) {
  const [settings, setSettings] = useState({
    voiceOutput: true,
    realtimePreview: true,
    notifications: false,
    hapticFeedback: true,
    offlineMode: false,
  });

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleSettings = [
    {
      key: 'voiceOutput' as const,
      icon: Volume2,
      title: 'Enable Voice Output',
      description: 'Speak detected text aloud',
      color: 'bg-[#c084fc]',
    },
    {
      key: 'darkMode' as const,
      icon: Moon,
      title: 'Dark Mode',
      description: 'Use dark theme',
      color: 'bg-[#60a5fa]',
      isThemeToggle: true,
    },

    {
      key: 'realtimePreview' as const,
      icon: Eye,
      title: 'Real-time Preview',
      description: 'Show live detection feedback',
      color: 'bg-[#ff6b9d]',
    },
    {
      key: 'notifications' as const,
      icon: Bell,
      title: 'Notifications',
      description: 'Training and achievement alerts',
      color: 'bg-[#fbbf24]',
    },
    {
      key: 'hapticFeedback' as const,
      icon: Vibrate,
      title: 'Haptic Feedback',
      description: 'Vibrate on gesture detection',
      color: 'bg-[#10b981]',
    },
    {
      key: 'offlineMode' as const,
      icon: Wifi,
      title: 'Offline Mode',
      description: 'Use without internet connection',
      color: 'bg-[#ef4444]',
    },
  ];

  const actionSettings = [
    {
      icon: Languages,
      title: 'Language',
      value: 'English',
      color: 'bg-[#c084fc]',
    },
    {
      icon: HelpCircle,
      title: 'Help & Support',
      value: '',
      color: 'bg-[#60a5fa]',
    },
  ];

  return (
    <div className="h-full overflow-y-auto pb-24 transition-colors duration-300" style={{ backgroundColor: theme.bg }}>
      {/* Header */}
      <div className="p-6">
        <div className="inline-block px-4 py-2 border-[3px] shadow-[4px_4px_0_0_rgba(0,0,0,0.3)] mb-2" style={{ backgroundColor: theme.text, borderColor: theme.border }}>
          <h2 className="font-black uppercase tracking-tight" style={{ color: theme.bg }}>Settings</h2>
        </div>
        <p className="font-bold ml-1" style={{ color: theme.text }}>Customize your experience</p>
      </div>

      {/* Profile card */}
      <div className="px-6 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="brutalist-card p-6 transition-colors duration-300"
          style={{ backgroundColor: theme.card, borderColor: theme.border }}
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-[#ff6b9d] border-[3px] shadow-[4px_4px_0_0_rgba(0,0,0,0.15)] flex items-center justify-center" style={{ borderColor: theme.border }}>
              <span className="font-black text-xl" style={{ color: theme.border }}>OM</span>
            </div>
            <div className="flex-1">
              <h3 className="font-black uppercase mb-1" style={{ color: theme.text }}>Om</h3>
              <p className="font-bold text-sm opacity-70" style={{ color: theme.text }}>om@example.com</p>
            </div>
            <ChevronRight className="w-6 h-6" style={{ color: theme.text }} strokeWidth={3} />
          </div>
        </motion.div>
      </div>

      {/* Toggle settings */}
      <div className="px-6 mb-6">
        <div className="inline-block px-4 py-2 border-[3px] shadow-[4px_4px_0_0_rgba(0,0,0,0.3)] mb-4" style={{ backgroundColor: theme.text, borderColor: theme.border }}>
          <h3 className="font-black uppercase tracking-tight" style={{ color: theme.bg }}>Preferences</h3>
        </div>
        <div className="space-y-3">
          {toggleSettings.map((setting, index) => {
            const Icon = setting.icon;
            const isThemeToggle = 'isThemeToggle' in setting && setting.isThemeToggle;
            const isChecked = isThemeToggle ? isDarkMode : settings[setting.key as keyof typeof settings];
            const handleToggle = isThemeToggle ? setIsDarkMode : () => toggleSetting(setting.key as keyof typeof settings);
            
            return (
              <motion.div
                key={setting.key}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + index * 0.05, duration: 0.4, ease: "easeOut" }}
                className="brutalist-card p-4 transition-all duration-300 hover:translate-x-1"
                style={{ backgroundColor: theme.card, borderColor: theme.border }}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 ${setting.color} border-[3px] flex items-center justify-center flex-shrink-0`} style={{ borderColor: theme.border }}>
                    <Icon className="w-5 h-5" style={{ color: theme.border }} strokeWidth={2.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold uppercase text-sm mb-0.5" style={{ color: theme.text }}>{setting.title}</p>
                    <p className="font-bold text-xs opacity-70" style={{ color: theme.text }}>{setting.description}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <Switch
                      checked={isChecked}
                      onCheckedChange={handleToggle}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Action settings */}
      <div className="px-6 mb-6">
        <div className="inline-block px-4 py-2 border-[3px] shadow-[4px_4px_0_0_rgba(0,0,0,0.3)] mb-4" style={{ backgroundColor: theme.text, borderColor: theme.border }}>
          <h3 className="font-black uppercase tracking-tight" style={{ color: theme.bg }}>General</h3>
        </div>
        <div className="space-y-3">
          {actionSettings.map((setting, index) => {
            const Icon = setting.icon;
            return (
              <motion.button
                key={setting.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.05, duration: 0.4, ease: "easeOut" }}
                className="w-full brutalist-card p-4 transition-all duration-300 hover:translate-x-1"
                style={{ backgroundColor: theme.card, borderColor: theme.border }}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 ${setting.color} border-[3px] flex items-center justify-center flex-shrink-0`} style={{ borderColor: theme.border }}>
                    <Icon className="w-5 h-5" style={{ color: theme.border }} strokeWidth={2.5} />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="font-bold uppercase text-sm" style={{ color: theme.text }}>{setting.title}</p>
                    {setting.value && (
                      <p className="font-bold text-xs opacity-70" style={{ color: theme.text }}>{setting.value}</p>
                    )}
                  </div>
                  <ChevronRight className="w-6 h-6" style={{ color: theme.text }} strokeWidth={3} />
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* App info */}
      <div className="px-6 mb-6">
        <div className="brutalist-card p-6 text-center transition-colors duration-300" style={{ backgroundColor: theme.card, borderColor: theme.border }}>
          <div className="w-16 h-16 mx-auto mb-4 border-[3px] shadow-[4px_4px_0_0_rgba(0,0,0,0.15)] flex items-center justify-center transition-transform hover:translate-y-[-2px]" style={{ backgroundColor: theme.text, borderColor: theme.border }}>
            <span className="font-black text-xl" style={{ color: theme.bg }}>SS</span>
          </div>
          <h3 className="font-black uppercase mb-2" style={{ color: theme.text }}>SignSpeak</h3>
          <p className="font-bold mb-1" style={{ color: theme.text }}>Version 1.0.0</p>
          <p className="font-bold text-sm opacity-70" style={{ color: theme.text }}>© 2025 SignSpeak Team</p>
        </div>
      </div>

      {/* Sign out */}
      <div className="px-6">
        <button className="w-full brutalist-btn bg-[#ef4444] p-4 transition-transform hover:translate-y-[-2px]" style={{ color: theme.border, borderColor: theme.border }}>
          <span className="font-black uppercase">Sign Out</span>
        </button>
      </div>
    </div>
  );
}
