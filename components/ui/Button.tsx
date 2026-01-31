import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  type = 'button'
}) => {
  const baseStyles = "px-8 py-3 rounded-full font-medium transition-all duration-300 text-sm tracking-wide flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-white text-royal hover:bg-lavender shadow-lg shadow-royal/20 hover:shadow-royal/30",
    secondary: "bg-royal text-white hover:bg-royal-light shadow-lg shadow-royal/20",
    outline: "border border-royal text-royal hover:bg-royal hover:text-white",
    ghost: "text-white/80 hover:text-white hover:bg-white/10"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </motion.button>
  );
};

export default Button;