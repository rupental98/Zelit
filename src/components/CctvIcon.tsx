import React from 'react';

export default function CctvIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      className={className}
      aria-hidden="true"
    >
      {/* Korpus kamery */}
      <path 
        d="M4 8h12c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-6c0-1.1.9-2 2-2z" 
        fill="currentColor" 
        stroke="currentColor" 
        strokeWidth="1"
      />
      
      {/* Obiektyw */}
      <circle 
        cx="10" 
        cy="13" 
        r="2.5" 
        fill="none" 
        stroke="white" 
        strokeWidth="1.5"
      />
      <circle 
        cx="10" 
        cy="13" 
        r="1" 
        fill="white"
      />
      
      {/* Wskaźnik nagrywania */}
      <circle 
        cx="15" 
        cy="10" 
        r="1" 
        fill="#ff4444"
      />
      
      {/* Uchwyt/podstawa */}
      <path 
        d="M18 16l3 2v-8l-3 2" 
        fill="currentColor" 
        stroke="currentColor" 
        strokeWidth="1"
      />
      
      {/* Kabel */}
      <path 
        d="M2 18h4" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round"
      />
    </svg>
  );
}