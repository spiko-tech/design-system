import React from 'react';
import { cn } from '../../utils.js';

// Should use variants instead
// Or at least variants
const STATUS_COLORS = {
  green: 'bg-green-100 text-green-700',
  gray: 'bg-gray-100 text-gray-700',
  red: 'bg-red-100 text-red-700',
  blue: 'bg-blue-100 text-blue-700',
  yellow: 'bg-yellow-100 text-yellow-700',
  orange: 'bg-orange-100 text-orange-700',
  teal: 'bg-teal-100 text-teal-700',
  purple: 'bg-purple-100 text-purple-700',
  pink: 'bg-pink-100 text-pink-700',
  indigo: 'bg-indigo-100 text-indigo-700',
  cyan: 'bg-cyan-100 text-cyan-700',
};

export const Status = ({
  children,
  color,
  className,
}: {
  children: React.ReactNode;
  color: keyof typeof STATUS_COLORS;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        `flex w-fit items-center gap-2 rounded-xs border border-transparent px-1.5 py-0.5 spiko-text-sm-regular whitespace-nowrap`,
        STATUS_COLORS[color],
        className
      )}
    >
      {children}
    </div>
  );
};
