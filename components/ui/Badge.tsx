import React from 'react';

export function Badge({ children, variant = 'teal' }: { children: React.ReactNode, variant?: 'teal' | 'gold' | 'green' | 'red' }) {
  return (
    <span className={`badge badge-${variant}`}>
      {children}
    </span>
  );
}
