import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Lock, Github, Chrome, Eye, EyeOff } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface Theme {
  bg: string;
  text: string;
  card: string;
  border: string;
  gridPattern: string;
}

interface LoginScreenProps {
  onLogin: () => void;
  theme: Theme;
}

export default function LoginScreen({ onLogin, theme }: LoginScreenProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="h-full bg-[#c084fc] p-8 flex flex-col justify-center overflow-y-auto">
      <div className="relative max-w-md mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <div className="inline-block px-8 py-4 border-[4px] shadow-[8px_8px_0_0_rgba(0,0,0,0.3)] mb-4" style={{ backgroundColor: theme.text, borderColor: theme.border }}>
            <h2 className="font-black uppercase tracking-tight" style={{ color: theme.bg }}>
              {isLogin ? 'Welcome Back!' : 'Join Us!'}
            </h2>
          </div>
          <div className="inline-block px-6 py-2 border-[3px] shadow-[4px_4px_0_0_rgba(0,0,0,0.3)]" style={{ backgroundColor: theme.card, borderColor: theme.border }}>
            <p className="font-bold" style={{ color: theme.text }}>
              {isLogin ? 'Sign in to continue' : 'Create your account'}
            </p>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-4"
        >
          {/* Email */}
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
              <Mail className="w-5 h-5 text-black" strokeWidth={2.5} />
            </div>
            <Input
              type="email"
              placeholder="EMAIL ADDRESS"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="brutalist-input w-full text-black placeholder:text-gray-500 pl-12 pr-4 py-6 uppercase font-bold tracking-wide"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
              <Lock className="w-5 h-5 text-black" strokeWidth={2.5} />
            </div>
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="PASSWORD"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="brutalist-input w-full text-black placeholder:text-gray-500 pl-12 pr-12 py-6 uppercase font-bold tracking-wide"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hover:scale-110 transition-transform"
            >
              {showPassword ? <EyeOff className="w-5 h-5 text-black" /> : <Eye className="w-5 h-5 text-black" />}
            </button>
          </div>

          {/* Forgot password */}
          {isLogin && (
            <div className="text-right">
              <button
                type="button"
                className="brutalist-badge bg-[#fbbf24] text-black px-4 py-2 hover:translate-x-1 hover:translate-y-1 transition-transform"
              >
                Forgot?
              </button>
            </div>
          )}

          {/* Submit */}
          <div>
            <Button
              type="submit"
              className="w-full brutalist-btn bg-black text-white py-6 hover:bg-gray-900"
            >
              {isLogin ? '→ SIGN IN' : '✓ CREATE ACCOUNT'}
            </Button>
          </div>
        </motion.form>

        {/* Divider */}
        <div className="flex items-center gap-4 my-8">
          <div className="flex-1 h-[3px] bg-black" />
          <span className="text-black font-black uppercase text-sm px-4 bg-white border-[3px] border-black">
            OR
          </span>
          <div className="flex-1 h-[3px] bg-black" />
        </div>

        {/* Social login */}
        <div className="flex gap-4">
          <button className="flex-1 brutalist-btn bg-white border-black py-4 flex items-center justify-center gap-2 text-black">
            <Chrome className="w-5 h-5" strokeWidth={2.5} />
            <span>GOOGLE</span>
          </button>
          <button className="flex-1 brutalist-btn bg-black border-black py-4 flex items-center justify-center gap-2 text-white">
            <Github className="w-5 h-5" strokeWidth={2.5} />
            <span>GITHUB</span>
          </button>
        </div>

        {/* Toggle */}
        <div className="text-center mt-8">
          <div className="inline-block bg-white border-[3px] border-black px-6 py-3 shadow-[4px_4px_0_0_#1a1a1a]">
            <span className="text-black font-bold">
              {isLogin ? "Don't have an account? " : 'Already have an account? '}
            </span>
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="brutalist-badge bg-[#ff6b9d] text-black px-3 py-1 ml-2 hover:translate-x-1 hover:translate-y-1 transition-transform inline-block"
            >
              {isLogin ? 'SIGN UP' : 'SIGN IN'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
