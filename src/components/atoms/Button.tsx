import React from 'react';
import { twMerge } from 'tailwind-merge';
import { clsx, type ClassValue } from 'clsx';
import { motion, type HTMLMotionProps } from 'framer-motion';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    
    // Minimalist, premium solid aesthetic
    const variants = {
      primary: 'bg-white text-black hover:bg-gray-200 font-semibold',
      outline: 'border border-white/20 text-white hover:bg-white/5',
      ghost: 'text-gray-400 hover:text-white',
    };

    const sizes = {
      sm: 'px-4 py-1.5 text-xs tracking-widest uppercase',
      md: 'px-6 py-2.5 text-sm tracking-wide',
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.15 }}
        className={cn(
          'inline-flex items-center justify-center rounded-full transition-colors duration-300 disabled:opacity-50 disabled:pointer-events-none',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
