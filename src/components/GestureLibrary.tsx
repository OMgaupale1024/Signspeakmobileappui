import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, Play, Plus } from 'lucide-react';
import { Input } from './ui/input';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';
import { ImageWithFallback } from './figma/ImageWithFallback';

const gestures = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letter) => ({
  letter,
  difficulty: ['Easy', 'Medium', 'Hard'][Math.floor(Math.random() * 3)],
}));

interface Theme {
  bg: string;
  text: string;
  card: string;
  border: string;
  gridPattern: string;
}

interface GestureLibraryProps {
  onNavigate?: (screen: string) => void;
  theme: Theme;
}

export default function GestureLibrary({ onNavigate, theme }: GestureLibraryProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGesture, setSelectedGesture] = useState<string | null>(null);

  const filteredGestures = gestures.filter((g) =>
    g.letter.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-[#10b981]';
      case 'Medium':
        return 'bg-[#fbbf24]';
      case 'Hard':
        return 'bg-[#ef4444]';
      default:
        return 'bg-gray-400';
    }
  };

  return (
    <div className="h-full flex flex-col pb-24 transition-colors duration-300" style={{ backgroundColor: theme.bg }}>
      {/* Header */}
      <div className="p-6">
        <div className="inline-block px-4 py-2 border-[3px] shadow-[4px_4px_0_0_rgba(0,0,0,0.3)] mb-2" style={{ backgroundColor: theme.text, borderColor: theme.border }}>
          <h2 className="font-black uppercase tracking-tight" style={{ color: theme.bg }}>Gesture Library</h2>
        </div>
        <p className="font-bold ml-1" style={{ color: theme.text }}>Learn all A-Z sign language gestures</p>
      </div>

      {/* Search */}
      <div className="px-6 mb-6">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative"
        >
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 z-10" style={{ color: theme.text }} strokeWidth={2.5} />
          <Input
            type="text"
            placeholder="SEARCH GESTURES..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="brutalist-input w-full pl-12 pr-12 py-6 uppercase font-bold tracking-wide transition-colors duration-300"
            style={{ backgroundColor: theme.card, color: theme.text, borderColor: theme.border }}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 transition-opacity hover:opacity-70"
            >
              <X className="w-5 h-5" style={{ color: theme.text }} strokeWidth={2.5} />
            </button>
          )}
        </motion.div>
      </div>

      {/* Gesture grid */}
      <div className="flex-1 overflow-y-auto px-6 pb-6">
        <motion.div layout className="grid grid-cols-3 gap-3">
          {/* Add custom gesture card */}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={() => onNavigate?.('training')}
            className="relative aspect-square brutalist-card bg-[#c084fc] group overflow-hidden transition-transform hover:translate-y-[-4px]"
            style={{ borderColor: theme.border }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
              <div
                className="w-16 h-16 border-[3px] bg-white flex items-center justify-center mb-2 transition-transform group-hover:rotate-90"
                style={{ borderColor: theme.border }}
              >
                <Plus className="w-8 h-8 text-black" strokeWidth={3} />
              </div>
              <span className="text-black font-black text-xs uppercase tracking-tight text-center">
                Add Custom
              </span>
            </div>
          </motion.button>

          <AnimatePresence>
            {filteredGestures.map((gesture, index) => (
              <motion.button
                key={gesture.letter}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.02, duration: 0.3 }}
                onClick={() => setSelectedGesture(gesture.letter)}
                className="relative aspect-square brutalist-card group overflow-hidden transition-transform hover:translate-y-[-4px]"
                style={{ backgroundColor: theme.card, borderColor: theme.border }}
              >
                {/* Hand gesture image */}
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <ImageWithFallback
                    src={`https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca`}
                    alt={`Gesture ${gesture.letter}`}
                    className="w-full h-full object-contain opacity-20 group-hover:opacity-40 transition-opacity"
                  />
                </div>

                {/* Letter */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-black group-hover:scale-110 transition-transform" style={{ color: theme.text }}>
                    {gesture.letter}
                  </span>
                </div>

                {/* Difficulty badge */}
                <div className="absolute top-2 right-2">
                  <div 
                    className={`brutalist-badge ${getDifficultyColor(gesture.difficulty)} text-white px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity text-[10px]`}
                    style={{ borderColor: theme.border }}
                  >
                    {gesture.difficulty.substring(0, 1)}
                  </div>
                </div>

                {/* Play icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 border-[3px] bg-[#ff6b9d] flex items-center justify-center shadow-[4px_4px_0_0_rgba(0,0,0,0.3)]" style={{ borderColor: theme.border }}>
                    <Play className="w-5 h-5 text-black ml-0.5" strokeWidth={2.5} />
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredGestures.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="inline-block border-[3px] px-6 py-3 shadow-[4px_4px_0_0_rgba(0,0,0,0.3)] transition-colors duration-300" style={{ backgroundColor: theme.card, borderColor: theme.border }}>
              <p className="font-bold" style={{ color: theme.text }}>No gestures found</p>
            </div>
          </motion.div>
        )}
      </div>

      {/* Detail modal */}
      <AnimatePresence>
        {selectedGesture && (
          <Dialog open={!!selectedGesture} onOpenChange={() => setSelectedGesture(null)}>
            <DialogContent 
              className="border-[4px] shadow-[12px_12px_0_0_rgba(0,0,0,0.3)] max-w-sm transition-colors duration-300"
              style={{ backgroundColor: theme.card, borderColor: theme.border }}
            >
              <DialogTitle className="sr-only">Sign Language Gesture: {selectedGesture}</DialogTitle>
              <DialogDescription className="sr-only">
                Learn how to perform the {selectedGesture} sign in American Sign Language
              </DialogDescription>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="p-4"
              >
                {/* Preview */}
                <div className="relative w-full aspect-square border-[4px] overflow-hidden mb-6 transition-colors duration-300" style={{ borderColor: theme.border, backgroundColor: theme.bg }}>
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca"
                    alt={`Gesture ${selectedGesture}`}
                    className="w-full h-full object-contain opacity-40"
                  />
                  <div className="absolute top-4 left-4 w-14 h-14 bg-[#ff6b9d] border-[3px] flex items-center justify-center shadow-[4px_4px_0_0_rgba(0,0,0,0.3)]" style={{ borderColor: theme.border }}>
                    <span className="text-black font-black text-xl">{selectedGesture}</span>
                  </div>
                </div>

                {/* Info */}
                <div className="mb-2 inline-block px-4 py-2 border-[3px] shadow-[4px_4px_0_0_rgba(0,0,0,0.3)]" style={{ backgroundColor: theme.text, borderColor: theme.border }}>
                  <h3 className="font-black uppercase tracking-tight" style={{ color: theme.bg }}>Sign: {selectedGesture}</h3>
                </div>
                <p className="font-bold mb-6" style={{ color: theme.text }}>
                  Watch the animation carefully and practice the hand position. Ensure your fingers are clearly visible to the camera.
                </p>

                {/* Actions */}
                <div className="space-y-3">
                  <button
                    className="w-full brutalist-btn bg-[#ff6b9d] text-black py-4 flex items-center justify-center gap-2 transition-transform hover:translate-y-[-2px]"
                    style={{ borderColor: theme.border }}
                  >
                    <Play className="w-5 h-5" strokeWidth={2.5} />
                    <span className="font-black">PRACTICE THIS SIGN</span>
                  </button>
                  <button
                    onClick={() => setSelectedGesture(null)}
                    className="w-full brutalist-btn py-4 transition-all hover:translate-y-[-2px]"
                    style={{ backgroundColor: theme.card, color: theme.text, borderColor: theme.border }}
                  >
                    <span className="font-black">CLOSE</span>
                  </button>
                </div>
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
}
