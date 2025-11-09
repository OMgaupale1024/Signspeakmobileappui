import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Hand, Camera, Volume2, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

interface Theme {
  bg: string;
  text: string;
  card: string;
  border: string;
  gridPattern: string;
}

interface OnboardingScreenProps {
  onComplete: () => void;
  theme: Theme;
}

const slides = [
  {
    icon: Hand,
    title: 'Understand the world through signs',
    description: 'Experience seamless communication with powerful gesture recognition technology',
    color: '#ff6b9d',
  },
  {
    icon: Camera,
    title: 'Real-time gesture recognition',
    description: 'Our AI detects and translates hand gestures instantly as you sign',
    color: '#c084fc',
  },
  {
    icon: Volume2,
    title: 'Convert signs to speech instantly',
    description: 'Hear your signs spoken aloud with natural text-to-speech conversion',
    color: '#fbbf24',
  },
];

export default function OnboardingScreen({ onComplete, theme }: OnboardingScreenProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(currentSlide + 1);
    } else {
      onComplete();
    }
  };

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(currentSlide - 1);
    }
  };

  const slide = slides[currentSlide];
  const Icon = slide.icon;

  return (
    <div className="h-full flex flex-col p-8 transition-colors duration-300" style={{ backgroundColor: theme.bg }}>
      {/* Skip button */}
      <div className="flex justify-end mb-8">
        <Button
          onClick={onComplete}
          variant="ghost"
          className="brutalist-btn px-6 transition-colors"
          style={{ backgroundColor: theme.card, color: theme.text, borderColor: theme.border }}
        >
          SKIP →
        </Button>
      </div>

      {/* Slides */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            initial={{ opacity: 0, x: direction * 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -50 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            {/* Icon */}
            <motion.div
              className="relative mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}
            >
              <div className="relative inline-block">
                <div 
                  className="p-16 border-[6px] shadow-[12px_12px_0_0_rgba(0,0,0,0.3)]"
                  style={{ backgroundColor: slide.color, borderColor: theme.border }}
                >
                  <Icon className="w-24 h-24" style={{ color: theme.border }} strokeWidth={3} />
                </div>
              </div>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
              className="mb-8"
            >
              <h2 className="mb-4 px-4 font-black uppercase tracking-tight" style={{ color: theme.text }}>
                {slide.title}
              </h2>
              <div className="inline-block border-[3px] px-6 py-3 shadow-[6px_6px_0_0_rgba(0,0,0,0.3)]" style={{ backgroundColor: theme.card, borderColor: theme.border }}>
                <p className="font-bold px-6" style={{ color: theme.text }}>
                  {slide.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress dots */}
      <div className="flex justify-center gap-3 mb-8">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
            }}
            className="h-4 border-[3px] transition-all"
            style={{
              width: currentSlide === index ? '48px' : '16px',
              backgroundColor: currentSlide === index ? theme.text : theme.card,
              borderColor: theme.border
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <div className="flex gap-4">
        {currentSlide > 0 && (
          <Button
            onClick={handlePrevious}
            className="flex-1 brutalist-btn py-6"
            style={{ backgroundColor: theme.card, color: theme.text, borderColor: theme.border }}
          >
            ← BACK
          </Button>
        )}
        <Button
          onClick={handleNext}
          className="flex-1 brutalist-btn py-6"
          style={{ backgroundColor: slide.color, color: theme.border, borderColor: theme.border }}
        >
          {currentSlide === slides.length - 1 ? '✓ GET STARTED' : 'NEXT →'}
        </Button>
      </div>
    </div>
  );
}
