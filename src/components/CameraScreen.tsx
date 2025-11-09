import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Pause, Play, Volume2, Copy, RotateCcw, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Theme {
  bg: string;
  text: string;
  card: string;
  border: string;
  gridPattern: string;
}

interface CameraScreenProps {
  theme: Theme;
}

export default function CameraScreen({ theme }: CameraScreenProps) {
  const [isRecognizing, setIsRecognizing] = useState(false);
  const [detectedText, setDetectedText] = useState('');
  const [currentLetter, setCurrentLetter] = useState<string | null>(null);
  const [confidence, setConfidence] = useState(0);

  const handleCopyText = async () => {
    try {
      // Try using the Clipboard API first
      await navigator.clipboard.writeText(detectedText);
    } catch (err) {
      // Fallback method using a temporary textarea
      const textArea = document.createElement('textarea');
      textArea.value = detectedText;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
      } catch (execErr) {
        console.error('Failed to copy text:', execErr);
      }
      document.body.removeChild(textArea);
    }
  };

  useEffect(() => {
    if (isRecognizing && !currentLetter) {
      const timer = setTimeout(() => {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const randomLetter = letters[Math.floor(Math.random() * letters.length)];
        setCurrentLetter(randomLetter);
        setConfidence(85 + Math.random() * 15);
        
        setTimeout(() => {
          setDetectedText((prev) => prev + randomLetter);
          setCurrentLetter(null);
        }, 1500);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [isRecognizing, currentLetter]);

  const toggleRecognition = () => {
    setIsRecognizing(!isRecognizing);
    if (!isRecognizing) {
      setCurrentLetter(null);
    }
  };

  return (
    <div className="h-full flex flex-col pb-24 transition-colors duration-300" style={{ backgroundColor: theme.bg }}>
      {/* Header */}
      <motion.div 
        className="p-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="inline-block px-4 py-2 border-[3px] shadow-[4px_4px_0_0_rgba(0,0,0,0.3)] mb-2" style={{ backgroundColor: theme.text, borderColor: theme.border }}>
              <h2 className="font-black uppercase tracking-tight" style={{ color: theme.bg }}>Live Recognition</h2>
            </div>
            <p className="font-bold ml-1" style={{ color: theme.text }}>Position your hand in the frame</p>
          </div>
          {isRecognizing && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="brutalist-badge bg-[#ef4444] text-white px-3 py-2 flex items-center gap-2"
            >
              <motion.div
                className="w-2 h-2 bg-white"
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <span>REC</span>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Camera preview */}
      <div className="flex-1 px-6 flex flex-col">
        <motion.div 
          className="relative flex-1 overflow-hidden brutalist-card bg-black shadow-[8px_8px_0_0_#1a1a1a]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
        >
          {/* Camera feed */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-950">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32"
              alt="Camera feed"
              className="w-full h-full object-cover opacity-30"
            />
            <div 
              className="absolute inset-0 bg-black" 
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px'
              }}
            />
          </div>

          {/* Detection indicator */}
          {isRecognizing && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute top-6 right-6 brutalist-badge bg-[#c084fc] text-black px-3 py-2 flex items-center gap-2"
            >
              <motion.div
                className="w-2 h-2 bg-black"
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <span>DETECTING</span>
            </motion.div>
          )}

          {/* Detection display */}
          <AnimatePresence>
            {currentLetter && (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
              >
                <div className="p-8 bg-white border-[6px] border-black shadow-[12px_12px_0_0_#1a1a1a]">
                  <div className="text-black text-center mb-2 font-black text-6xl">{currentLetter}</div>
                  <div className="brutalist-badge bg-[#10b981] text-white px-4 py-1 text-center">
                    {Math.round(confidence)}% CONF
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Helper text */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <div className="brutalist-badge bg-white text-black px-6 py-2">
              Position your hand in view
            </div>
          </div>
        </motion.div>

        {/* Detected text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4 brutalist-card p-4 transition-colors duration-300"
          style={{ backgroundColor: theme.card, borderColor: theme.border }}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="brutalist-badge bg-[#fbbf24] text-black px-3 py-1" style={{ borderColor: theme.border }}>OUTPUT</span>
            <div className="flex gap-3">
              <button
                onClick={handleCopyText}
                className="w-8 h-8 border-[2px] flex items-center justify-center transition-all hover:translate-y-[-1px]"
                style={{ borderColor: theme.border, backgroundColor: theme.bg }}
              >
                <Copy className="w-4 h-4" style={{ color: theme.text }} strokeWidth={2.5} />
              </button>
              <button
                className="w-8 h-8 border-[2px] flex items-center justify-center transition-all hover:translate-y-[-1px]"
                style={{ borderColor: theme.border, backgroundColor: theme.bg }}
              >
                <Volume2 className="w-4 h-4" style={{ color: theme.text }} strokeWidth={2.5} />
              </button>
              <button
                onClick={() => setDetectedText('')}
                className="w-8 h-8 border-[2px] flex items-center justify-center transition-all hover:translate-y-[-1px]"
                style={{ borderColor: theme.border, backgroundColor: theme.bg }}
              >
                <RotateCcw className="w-4 h-4" style={{ color: theme.text }} strokeWidth={2.5} />
              </button>
            </div>
          </div>
          <div className="font-bold min-h-[60px] flex items-center" style={{ color: theme.text }}>
            {detectedText || <span style={{ opacity: 0.5 }}>Start recognition to see text...</span>}
          </div>
        </motion.div>
      </div>

      {/* Controls */}
      <div className="px-6 pt-4 flex gap-3">
        <div className="flex-1">
          <Button
            onClick={toggleRecognition}
            className="w-full py-6 brutalist-btn"
            style={{
              backgroundColor: isRecognizing ? '#ef4444' : '#10b981',
              color: theme.border,
              borderColor: theme.border
            }}
          >
            <div className="flex items-center justify-center gap-2">
              {isRecognizing ? <Pause className="w-5 h-5" strokeWidth={3} /> : <Play className="w-5 h-5" strokeWidth={3} />}
              <span>{isRecognizing ? 'PAUSE' : 'START'}</span>
            </div>
          </Button>
        </div>
        
        <button className="w-14 h-14 brutalist-btn flex items-center justify-center transition-transform hover:translate-y-[-2px]" style={{ backgroundColor: theme.card, borderColor: theme.border }}>
          <Camera className="w-6 h-6" style={{ color: theme.text }} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}
