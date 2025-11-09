import { useState } from 'react';
import { motion } from 'motion/react';
import { Upload, Brain, TrendingDown, Zap, CheckCircle, Clock } from 'lucide-react';
import { Button } from './ui/button';

interface Theme {
  bg: string;
  text: string;
  card: string;
  border: string;
  gridPattern: string;
}

interface ModelTrainingProps {
  theme: Theme;
}

export default function ModelTraining({ theme }: ModelTrainingProps) {
  const [isTraining, setIsTraining] = useState(false);
  const [progress, setProgress] = useState(107);
  const [totalEpochs] = useState(200);

  const stats = [
    { label: 'Accuracy', value: '94.2%', icon: CheckCircle, color: 'bg-[#10b981]' },
    { label: 'Loss', value: '0.082', icon: TrendingDown, color: 'bg-[#c084fc]' },
    { label: 'Speed', value: '32ms', icon: Zap, color: 'bg-[#fbbf24]' },
    { label: 'Time Left', value: '2h 14m', icon: Clock, color: 'bg-[#60a5fa]' },
  ];

  return (
    <div className="h-full overflow-y-auto pb-24 transition-colors duration-300" style={{ backgroundColor: theme.bg }}>
      {/* Header */}
      <div className="p-6">
        <div className="inline-block px-4 py-2 border-[3px] shadow-[4px_4px_0_0_rgba(0,0,0,0.3)] mb-2" style={{ backgroundColor: theme.text, borderColor: theme.border }}>
          <h2 className="font-black uppercase tracking-tight" style={{ color: theme.bg }}>Model Training</h2>
        </div>
        <p className="font-bold ml-1" style={{ color: theme.text }}>Customize AI for your gestures</p>
      </div>

      {/* Progress section */}
      <div className="px-6 mb-6">
        <div className="brutalist-card p-8 transition-colors duration-300" style={{ backgroundColor: theme.card, borderColor: theme.border }}>
          <div className="flex flex-col items-center">
            {/* Square progress indicator */}
            <div className="relative w-48 h-48 mb-6 border-[6px] transition-colors duration-300" style={{ borderColor: theme.border, backgroundColor: theme.bg }}>
              {/* Progress fill */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-[#c084fc] border-t-[6px]"
                style={{ borderColor: theme.border }}
                initial={{ height: 0 }}
                animate={{ height: `${(progress / totalEpochs) * 100}%` }}
                transition={{ duration: 1, ease: 'easeOut' }}
              />
              
              {/* Center content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                {isTraining ? (
                  <div className="w-20 h-20 flex items-center justify-center mb-3 relative">
                    <div className="spinner">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div className="spinner2">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                ) : (
                  <div className="w-20 h-20 bg-[#fbbf24] border-[4px] shadow-[4px_4px_0_0_rgba(0,0,0,0.3)] flex items-center justify-center mb-3" style={{ borderColor: theme.border }}>
                    <span className="font-black text-2xl" style={{ color: theme.border }}>{Math.round((progress / totalEpochs) * 100)}%</span>
                  </div>
                )}
                <div className="font-black text-xl mb-1" style={{ color: theme.text }}>{progress}/{totalEpochs}</div>
                <div className="font-bold uppercase text-sm tracking-wide" style={{ color: theme.text }}>Epochs</div>
              </div>
            </div>

            {/* Progress bar */}
            <div className="w-full mb-4">
              <div className="flex justify-between font-bold mb-2" style={{ color: theme.text }}>
                <span className="uppercase text-sm">Training Progress</span>
                <span className="brutalist-badge bg-[#c084fc] px-2 py-1" style={{ color: theme.border, borderColor: theme.border }}>
                  {Math.round((progress / totalEpochs) * 100)}%
                </span>
              </div>
              <div className="h-4 border-[3px] overflow-hidden transition-colors duration-300" style={{ backgroundColor: theme.bg, borderColor: theme.border }}>
                <motion.div
                  className="h-full"
                  style={{ backgroundColor: theme.text }}
                  initial={{ width: 0 }}
                  animate={{ width: `${(progress / totalEpochs) * 100}%` }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                />
              </div>
            </div>

            {/* Start/Stop */}
            <div className="w-full">
              <Button
                onClick={() => setIsTraining(!isTraining)}
                className="w-full brutalist-btn py-6 transition-transform hover:translate-y-[-2px]"
                style={{
                  backgroundColor: isTraining ? '#ef4444' : '#10b981',
                  color: theme.border,
                  borderColor: theme.border
                }}
              >
                <span className="font-black">
                  {isTraining ? 'PAUSE TRAINING' : 'START TRAINING'}
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="px-6 mb-6">
        <div className="inline-block px-4 py-2 border-[3px] shadow-[4px_4px_0_0_rgba(0,0,0,0.3)] mb-4" style={{ backgroundColor: theme.text, borderColor: theme.border }}>
          <h3 className="font-black uppercase tracking-tight" style={{ color: theme.bg }}>Training Metrics</h3>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4, ease: "easeOut" }}
                className="brutalist-card p-4 transition-all duration-300 hover:translate-y-[-2px]"
                style={{ backgroundColor: theme.card, borderColor: theme.border }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-8 h-8 ${stat.color} border-[3px] flex items-center justify-center`} style={{ borderColor: theme.border }}>
                    <Icon className="w-4 h-4" style={{ color: theme.border }} strokeWidth={2.5} />
                  </div>
                  <span className="font-bold uppercase text-xs" style={{ color: theme.text }}>{stat.label}</span>
                </div>
                <div className="font-black" style={{ color: theme.text }}>{stat.value}</div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Loss chart */}
      <div className="px-6 mb-6">
        <div className="inline-block px-4 py-2 border-[3px] shadow-[4px_4px_0_0_rgba(0,0,0,0.3)] mb-4" style={{ backgroundColor: theme.text, borderColor: theme.border }}>
          <h3 className="font-black uppercase tracking-tight" style={{ color: theme.bg }}>Loss Over Time</h3>
        </div>
        <div className="brutalist-card p-4 h-40 relative overflow-hidden transition-colors duration-300" style={{ backgroundColor: theme.card, borderColor: theme.border }}>
          <svg className="w-full h-full">
            {[...Array(5)].map((_, i) => (
              <line
                key={i}
                x1="0"
                y1={`${(i / 4) * 100}%`}
                x2="100%"
                y2={`${(i / 4) * 100}%`}
                stroke={theme.border}
                strokeWidth="2"
                opacity="0.3"
              />
            ))}
            <motion.path
              d="M 0 80 Q 25 70, 50 40 T 100 10"
              fill="none"
              stroke="#c084fc"
              strokeWidth="4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: 'easeOut' }}
            />
          </svg>
        </div>
      </div>

      {/* Upload */}
      <div className="px-6 mb-6">
        <div className="inline-block px-4 py-2 border-[3px] shadow-[4px_4px_0_0_rgba(0,0,0,0.3)] mb-4" style={{ backgroundColor: theme.text, borderColor: theme.border }}>
          <h3 className="font-black uppercase tracking-tight" style={{ color: theme.bg }}>Training Dataset</h3>
        </div>
        <button className="w-full brutalist-card bg-[#ff6b9d] p-6 transition-all duration-300 hover:translate-y-[-2px]" style={{ borderColor: theme.border }}>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 border-[3px] flex items-center justify-center shadow-[4px_4px_0_0_rgba(0,0,0,0.3)]" style={{ backgroundColor: theme.card, borderColor: theme.border }}>
              <Upload className="w-6 h-6" style={{ color: theme.border }} strokeWidth={2.5} />
            </div>
            <div className="flex-1 text-left">
              <p className="font-black uppercase mb-1" style={{ color: theme.border }}>Upload Training Images</p>
              <p className="font-bold text-sm" style={{ color: theme.border, opacity: 0.9 }}>Add custom gesture samples</p>
            </div>
          </div>
        </button>

        {/* Samples */}
        <div className="mt-4 grid grid-cols-4 gap-2">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              className="aspect-square border-[3px] flex items-center justify-center shadow-[3px_3px_0_0_rgba(0,0,0,0.15)] transition-transform hover:scale-105"
              style={{ borderColor: theme.border, backgroundColor: theme.card }}
            >
              <span className="font-black" style={{ color: theme.text }}>{i + 1}</span>
            </motion.div>
          ))}
        </div>
      </div>


    </div>
  );
}
