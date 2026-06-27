'use client';

import { useCountUp } from '@/hooks/useCountUp';

export function CountUpNumber({ value, duration = 2000 }: { value: number, duration?: number }) {
  const count = useCountUp(value, duration);
  return <span>{count.toLocaleString()}</span>;
}
