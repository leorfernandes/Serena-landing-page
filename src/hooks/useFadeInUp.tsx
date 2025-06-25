'use client';
import { useEffect, useState } from 'react';

export function useFadeInUp(duration = 1400) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    setShow(true);
  }, []);

  return {
    animationClass: `transition-all duration-[${duration}ms] ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`,
  };
}
