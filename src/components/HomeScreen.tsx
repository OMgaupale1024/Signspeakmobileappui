import { motion } from 'motion/react';
import { Camera, BookOpen, Brain, Settings, TrendingUp, Award, Zap, ArrowRight } from 'lucide-react';

interface Theme {
  bg: string;
  text: string;
  card: string;
  border: string;
  gridPattern: string;
}

interface HomeScreenProps {
  onNavigate: (screen: string) => void;
  theme: Theme;
}

const cards = [
  {
    id: 'camera',
    title: 'Start Recognition',
    description: 'Detect gestures in real-time',
    icon: Camera,
    color: '#ff6b9d',
    screen: 'camera',
  },
  {
    id: 'library',
    title: 'Learn Gestures',
    description: 'Explore A-Z sign library',
    icon: BookOpen,
    color: '#c084fc',
    screen: 'library',
  },
  {
    id: 'training',
    title: 'Train Model',
    description: 'Customize AI recognition',
    icon: Brain,
    color: '#fbbf24',
    screen: 'training',
  },
  {
    id: 'settings',
    title: 'Settings',
    description: 'Customize your experience',
    icon: Settings,
    color: '#60a5fa',
    screen: 'settings',
  },
];

const stats = [
  { label: 'Accuracy', value: '94%', icon: TrendingUp, color: '#10b981' },
  { label: 'Gestures', value: '26', icon: Award, color: '#f59e0b' },
  { label: 'Sessions', value: '47', icon: Zap, color: '#ef4444' },
];

export default function HomeScreen({ onNavigate, theme }: HomeScreenProps) {
  return (
    <div className="h-full overflow-y-auto pb-24 transition-colors duration-300" style={{ backgroundColor: theme.bg }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="p-6 pt-8"
      >
        <div className="flex items-center justify-between mb-2">
          <div>
            <div className="inline-block px-4 py-2 border-[3px] shadow-[4px_4px_0_0_rgba(0,0,0,0.3)] mb-3" style={{ backgroundColor: theme.text, borderColor: theme.border }}>
              <h1 className="font-black uppercase tracking-tight" style={{ color: theme.bg }}>Hello, Om 👋</h1>
            </div>
            <p className="font-bold ml-1" style={{ color: theme.text }}>Ready to communicate?</p>
          </div>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            onClick={() => onNavigate('profile')}
            className="w-16 h-16 bg-[#ff6b9d] border-[4px] shadow-[4px_4px_0_0_rgba(0,0,0,0.3)] flex items-center justify-center transition-transform hover:translate-y-[-2px]"
            style={{ borderColor: theme.border }}
          >
            <span className="font-black text-2xl" style={{ color: theme.border }}>O</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Stats cards */}
      <div className="px-6 mb-6">
        <div className="grid grid-cols-3 gap-3">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.4, ease: "easeOut" }}
                className="brutalist-card p-4 text-center transition-all duration-300 hover:translate-y-[-2px]"
                style={{ backgroundColor: theme.card, borderColor: theme.border }}
              >
                <div 
                  className="w-10 h-10 mx-auto mb-2 border-[3px] flex items-center justify-center"
                  style={{ backgroundColor: stat.color, borderColor: theme.border }}
                >
                  <Icon className="w-5 h-5" style={{ color: theme.border }} strokeWidth={2.5} />
                </div>
                <div className="font-black mb-1" style={{ color: theme.text }}>{stat.value}</div>
                <div className="font-bold text-xs uppercase opacity-70" style={{ color: theme.text }}>{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Main action cards */}
      <div className="px-6 space-y-3">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.button
              key={card.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.4, ease: "easeOut" }}
              onClick={() => onNavigate(card.screen)}
              className="w-full brutalist-card p-5 flex items-center gap-4 group transition-all duration-300 hover:translate-x-1"
              style={{ backgroundColor: theme.card, borderColor: theme.border }}
            >
              <div 
                className="p-4 border-[3px] flex-shrink-0"
                style={{ backgroundColor: card.color, borderColor: theme.border }}
              >
                <Icon className="w-7 h-7" style={{ color: theme.border }} strokeWidth={2.5} />
              </div>

              <div className="flex-1 text-left">
                <h3 className="font-black mb-0.5 uppercase tracking-tight" style={{ color: theme.text }}>{card.title}</h3>
                <p className="font-bold text-sm opacity-70" style={{ color: theme.text }}>{card.description}</p>
              </div>

              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" style={{ color: theme.text }} strokeWidth={3} />
            </motion.button>
          );
        })}
      </div>

      {/* Quick tip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.4, ease: "easeOut" }}
        className="mx-6 mt-6 brutalist-card p-5 transition-colors duration-300"
        style={{ backgroundColor: '#fbbf24', borderColor: theme.border }}
      >
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 border-[3px] flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'white', borderColor: theme.border }}>
            <span className="text-2xl">💡</span>
          </div>
          <div>
            <p className="font-black mb-1 uppercase tracking-tight text-black">Pro Tip!</p>
            <p className="font-bold text-sm text-black" style={{ opacity: 0.9 }}>
              Practice in well-lit environments for better gesture recognition accuracy
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
