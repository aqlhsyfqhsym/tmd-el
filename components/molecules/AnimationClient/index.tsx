'use client';

import { motion, MotionProps, useScroll } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

export default function AnimationClient({
  children,
  props,
}: {
  children: React.ReactNode;
  useScrollVal?: boolean;
  props: MotionProps;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [, setIsInView] = useState(false);
  const { } = useScroll();

  useEffect(() => {
    const currentRef = ref.current; 
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.intersectionRatio > 0.1);
      },
      {
        threshold: [0.1],
      },
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      {...props}
    >
      {children}
    </motion.div>
  );
}
