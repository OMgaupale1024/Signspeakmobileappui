import { motion } from 'motion/react';
import { Download, Award, Target, Calendar, TrendingUp, BarChart3, Crown, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';

interface Theme {
  bg: string;
  text: string;
  card: string;
  border: string;
  gridPattern: string;
}

interface ProfileScreenProps {
  onNavigate?: (screen: string) => void;
  theme: Theme;
}

export default function ProfileScreen({ onNavigate, theme }: ProfileScreenProps) {
  const achievements = [
    { title: 'First Steps', description: 'Complete first gesture', icon: '🎯', unlocked: true },
    { title: 'Quick Learner', description: 'Learn 10 gestures', icon: '⚡', unlocked: true },
    { title: 'Master', description: 'Learn all 26 gestures', icon: '👑', unlocked: false },
    { title: 'Trainer', description: 'Train custom model', icon: '🧠', unlocked: true },
  ];

  const stats = [
    { label: 'Gestures Learned', value: '18/26', icon: Target, percent: 69 },
    { label: 'Practice Sessions', value: '47', icon: Calendar, percent: 78 },
    { label: 'Accuracy Rate', value: '94.2%', icon: TrendingUp, percent: 94 },
    { label: 'Total Time', value: '12h 34m', icon: BarChart3, percent: 62 },
  ];

  return (
    <div className="h-full overflow-y-auto pb-24 transition-colors duration-300" style={{ backgroundColor: theme.bg }}>
      {/* Back button */}
      <div className="absolute top-6 left-6 z-10">
        <button
          onClick={() => onNavigate?.('home')}
          className="w-12 h-12 border-[3px] shadow-[4px_4px_0_0_rgba(0,0,0,0.3)] flex items-center justify-center transition-all hover:translate-x-[-2px]"
          style={{ backgroundColor: theme.card, borderColor: theme.border }}
        >
          <ArrowLeft className="w-6 h-6" style={{ color: theme.text }} strokeWidth={3} />
        </button>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 pb-8 pt-20"
      >
        <div className="text-center">
          {/* Avatar */}
          <div className="relative inline-block mb-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative w-24 h-24 bg-[#ff6b9d] border-[4px] shadow-[8px_8px_0_0_rgba(0,0,0,0.3)] flex items-center justify-center transition-transform hover:translate-y-[-2px]"
              style={{ borderColor: theme.border }}
            >
              <span className="text-black text-3xl font-black">OM</span>
              
              {/* Level badge */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                className="absolute -top-2 -right-2 w-10 h-10 bg-[#fbbf24] border-[3px] flex items-center justify-center shadow-[4px_4px_0_0_rgba(0,0,0,0.3)]"
                style={{ borderColor: theme.border }}
              >
                <Crown className="w-5 h-5 text-black" strokeWidth={2.5} />
              </motion.div>
            </motion.div>
          </div>

          <div className="inline-block px-6 py-2 border-[3px] shadow-[4px_4px_0_0_rgba(0,0,0,0.3)] mb-2" style={{ backgroundColor: theme.text, borderColor: theme.border }}>
            <h2 className="font-black uppercase tracking-tight" style={{ color: theme.bg }}>Om</h2>
          </div>
          <p className="font-bold mb-4" style={{ color: theme.text }}>@om_signspeak</p>

          {/* Accuracy badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#10b981] border-[3px] shadow-[4px_4px_0_0_rgba(0,0,0,0.3)]"
            style={{ borderColor: theme.border }}
          >
            <Award className="w-5 h-5 text-black" strokeWidth={2.5} />
            <span className="text-black font-black uppercase text-sm">94.2% Accuracy</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Stats grid */}
      <div className="px-6 mb-6">
        <div className="grid grid-cols-2 gap-3">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
                className="brutalist-card p-5 transition-transform hover:translate-y-[-4px]"
                style={{ backgroundColor: theme.card, borderColor: theme.border }}
              >
                <div className="w-10 h-10 bg-[#c084fc] border-[3px] flex items-center justify-center mb-3" style={{ borderColor: theme.border }}>
                  <Icon className="w-5 h-5 text-black" strokeWidth={2.5} />
                </div>
                <div className="font-black mb-2" style={{ color: theme.text }}>{stat.value}</div>
                <div className="font-bold text-sm mb-3 uppercase" style={{ color: theme.text, opacity: 0.7 }}>{stat.label}</div>
                
                {/* Mini progress */}
                <div className="h-2 border-[2px] overflow-hidden" style={{ backgroundColor: theme.bg, borderColor: theme.border }}>
                  <motion.div
                    className="h-full"
                    style={{ backgroundColor: theme.text }}
                    initial={{ width: 0 }}
                    animate={{ width: `${stat.percent}%` }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Progress */}
      <div className="px-6 mb-6">
        <div className="inline-block px-4 py-2 border-[3px] shadow-[4px_4px_0_0_rgba(0,0,0,0.3)] mb-4" style={{ backgroundColor: theme.text, borderColor: theme.border }}>
          <h3 className="font-black uppercase tracking-tight" style={{ color: theme.bg }}>Learning Progress</h3>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="brutalist-card p-6 transition-colors duration-300"
          style={{ backgroundColor: theme.card, borderColor: theme.border }}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="font-bold uppercase" style={{ color: theme.text }}>Gesture Library</span>
            <span className="brutalist-badge bg-[#c084fc] text-black px-3 py-1" style={{ borderColor: theme.border }}>18/26</span>
          </div>
          
          <div className="h-3 border-[2px] mb-5 overflow-hidden" style={{ backgroundColor: theme.bg, borderColor: theme.border }}>
            <motion.div
              className="h-full bg-[#c084fc] border-r-[2px]"
              style={{ borderColor: theme.border }}
              initial={{ width: 0 }}
              animate={{ width: `${(18 / 26) * 100}%` }}
              transition={{ delay: 1, duration: 1 }}
            />
          </div>
          
          {/* Gesture dots */}
          <div className="grid grid-cols-13 gap-1.5">
            {[...Array(26)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2 + i * 0.02 }}
                className="aspect-square border-[2px]"
                style={{
                  backgroundColor: i < 18 ? '#c084fc' : theme.bg,
                  borderColor: theme.border,
                  opacity: i < 18 ? 1 : 0.5
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Achievements */}
      <div className="px-6 mb-6">
        <div className="inline-block px-4 py-2 border-[3px] shadow-[4px_4px_0_0_rgba(0,0,0,0.3)] mb-4" style={{ backgroundColor: theme.text, borderColor: theme.border }}>
          <h3 className="font-black uppercase tracking-tight" style={{ color: theme.bg }}>Achievements</h3>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4 + index * 0.1, duration: 0.3 }}
              className="brutalist-card p-5 transition-all hover:scale-105"
              style={{
                backgroundColor: achievement.unlocked ? theme.card : theme.bg,
                borderColor: theme.border,
                opacity: achievement.unlocked ? 1 : 0.6
              }}
            >
              <div className={`text-3xl mb-3 ${!achievement.unlocked && 'grayscale'}`}>
                {achievement.icon}
              </div>
              <p className="mb-1 font-black uppercase tracking-tight" style={{ color: theme.text, opacity: achievement.unlocked ? 1 : 0.6 }}>
                {achievement.title}
              </p>
              <p className="font-bold text-sm" style={{ color: theme.text, opacity: 0.7 }}>{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Export button */}
      <div className="px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
        >
          <Button className="w-full brutalist-btn bg-[#ff6b9d] text-black py-6 transition-transform hover:translate-y-[-2px]" style={{ borderColor: theme.border }}>
            <div className="flex items-center justify-center gap-2">
              <Download className="w-5 h-5" strokeWidth={2.5} />
              <span className="font-black">EXPORT MODEL</span>
            </div>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
