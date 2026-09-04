import React from 'react';

interface SVLLogoProps {
  className?: string;
  size?: number;
}

export const SVLLogo: React.FC<SVLLogoProps> = ({ className = 'w-9 h-9', size }) => {
  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
      <svg
        viewBox="0 0 256 256"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-contain filter drop-shadow-xs"
        style={size ? { width: size, height: size } : undefined}
      >
        <defs>
          {/* Top segment: Pink-Magenta to Violet */}
          <linearGradient id="svl_grad_top" x1="120" y1="12" x2="228" y2="70" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#DB2777" />
            <stop offset="40%" stopColor="#E11D48" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>

          {/* Right edge: Violet to Blue */}
          <linearGradient id="svl_grad_right" x1="228" y1="70" x2="228" y2="186" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="50%" stopColor="#4F46E5" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>

          {/* Bottom-right to bottom: Deep Blue to Cyan */}
          <linearGradient id="svl_grad_bottom_right" x1="228" y1="186" x2="128" y2="244" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="55%" stopColor="#0EA5E9" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>

          {/* Teal fold at bottom */}
          <linearGradient id="svl_grad_teal_fold" x1="70" y1="190" x2="160" y2="244" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#14B8A6" />
            <stop offset="60%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>

          {/* Yellow to Orange: Lower-left & Left edge */}
          <linearGradient id="svl_grad_yellow" x1="30" y1="186" x2="70" y2="110" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="50%" stopColor="#FBBF24" />
            <stop offset="100%" stopColor="#F97316" />
          </linearGradient>

          {/* Upper-Left: Orange to Hot Red/Pink */}
          <linearGradient id="svl_grad_upper_left" x1="28" y1="90" x2="128" y2="12" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F97316" />
            <stop offset="50%" stopColor="#EF4444" />
            <stop offset="100%" stopColor="#E11D48" />
          </linearGradient>
        </defs>

        {/* HEXAGONAL RIBBON SEGMENTS */}
        
        {/* 1. Top to Upper-Right Ribbon */}
        <path
          d="M 128 12 L 228 70 L 192 91 L 128 54 L 138 36 Z"
          fill="url(#svl_grad_top)"
        />

        {/* 2. Right Vertical Ribbon */}
        <path
          d="M 228 70 L 228 186 L 192 165 L 192 91 Z"
          fill="url(#svl_grad_right)"
        />

        {/* 3. Bottom-Right Ribbon */}
        <path
          d="M 228 186 L 128 244 L 128 198 L 192 165 Z"
          fill="url(#svl_grad_bottom_right)"
        />

        {/* 4. Bottom-Left Teal Fold Arrow */}
        <path
          d="M 128 244 L 70 198 L 114 198 L 188 214 Z"
          fill="url(#svl_grad_teal_fold)"
        />
        <path
          d="M 128 244 L 72 200 L 98 190 L 140 212 Z"
          fill="#0D9488"
          opacity="0.85"
        />

        {/* 5. Lower-Left Yellow Ribbon Arrow */}
        <path
          d="M 28 186 L 112 198 L 92 165 L 64 165 Z"
          fill="#EAB308"
        />

        {/* 6. Left Vertical Ribbon (Yellow to Orange) */}
        <path
          d="M 28 186 L 28 116 L 64 116 L 64 165 Z"
          fill="url(#svl_grad_yellow)"
        />

        {/* 7. Upper-Left Orange Ribbon */}
        <path
          d="M 28 116 L 28 70 L 128 12 L 128 54 L 64 91 L 64 116 Z"
          fill="url(#svl_grad_upper_left)"
        />

        {/* White Fold Gap/Slit at Upper-Left */}
        <path
          d="M 26 120 L 52 82 L 44 78 L 22 114 Z"
          fill="#FFFFFF"
        />

        {/* Top-Center White Fold Slit */}
        <path
          d="M 124 10 L 138 38 L 132 40 L 118 14 Z"
          fill="#FFFFFF"
        />

        {/* INNER WHITE HEXAGON */}
        <polygon
          points="128,54 192,91 192,165 128,202 64,165 64,91"
          fill="#FFFFFF"
        />

        {/* CENTER "SVL" TYPOGRAPHY */}
        <text
          x="128"
          y="149"
          textAnchor="middle"
          fill="#1E293B"
          fontSize="56"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Montserrat', 'Inter', 'Poppins', sans-serif"
          letterSpacing="-1.5"
        >
          SVL
        </text>
      </svg>
    </div>
  );
};
