import * as React from 'react';

export default function SmartHomeIcon({
  size = 24,
  className,
}: { size?: number; className?: string }) {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    vectorEffect: 'non-scaling-stroke' as const,
  };
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      shapeRendering="geometricPrecision"
    >
      <path {...common} d="M4.5 10.2L12 4.5l7.5 5.7v8.5c0 .9-.7 1.6-1.6 1.6H6.1c-.9 0-1.6-.7-1.6-1.6v-8.5z" />
      <path {...common} d="M8.6 15.6c.9-.7 2-1.1 3.4-1.1s2.5.4 3.4 1.1" />
    </svg>
  );
}
