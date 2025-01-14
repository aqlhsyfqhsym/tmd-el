'use client';

import { motion, MotionProps, useScroll } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

export default function AnimationClient({
  children,
  useScrollVal = false,
  props,
}: {
  children: React.ReactNode;
  useScrollVal?: boolean;
  props: MotionProps;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.intersectionRatio > 0.1);
      },
      {
        threshold: [0.1],
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
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
