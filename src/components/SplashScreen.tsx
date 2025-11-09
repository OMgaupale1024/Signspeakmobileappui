import { motion } from 'motion/react';
import { Hand } from 'lucide-react';

interface Theme {
  bg: string;
  text: string;
  card: string;
  border: string;
  gridPattern: string;
}

interface SplashScreenProps {
  theme: Theme;
}

export default function SplashScreen({ theme }: SplashScreenProps) {
  return (
    <div className="h-full flex items-center justify-center bg-[#ff6b9d] relative overflow-hidden">
      {/* Brutalist geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-64 h-64 border-[6px] border-black"
          style={{ top: '-20%', left: '-10%', rotate: '15deg' }}
        />
        <div
          className="absolute w-48 h-48 bg-[#fbbf24] border-[6px] border-black"
          style={{ bottom: '-10%', right: '-5%', rotate: '-20deg' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-block mb-8"
        >
          <div className="relative w-32 h-32 bg-white border-[6px] border-black shadow-[8px_8px_0_0_#1a1a1a]">
            <div className="absolute inset-0 flex items-center justify-center">
              <Hand className="w-16 h-16 text-black" strokeWidth={3} />
            </div>
          </div>
        </motion.div>

        {/* App name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <h1 className="text-5xl font-black text-black mb-2 tracking-tight" style={{ textShadow: '4px 4px 0 #fbbf24' }}>
            SignSpeak
          </h1>
          <div className="inline-block bg-black px-6 py-2 border-[3px] border-black shadow-[4px_4px_0_0_#1a1a1a]">
            <p className="text-white font-bold uppercase text-sm tracking-wider">
              Gesture Recognition
            </p>
          </div>
        </motion.div>

        {/* Loading animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-2 mt-12"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-4 h-4 bg-black border-2 border-black"
              animate={{
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
