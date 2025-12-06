import * as React from 'react';

export default function ShieldIcon({
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
      <path {...common} d="M12 3.5l6 2.8v4.9c0 5-3.1 8.9-6 10.4-2.9-1.5-6-5.4-6-10.4V6.3l6-2.8z" />
      <path {...common} d="M8.7 12.6l2.1 2.1 4.5-4.5" />
    </svg>
  );
}
