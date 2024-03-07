import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";
export default function AnimationHandler({ children, from, to }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animationRef = useRef(null);

  return (
    <div ref={ref} className="animate-on-scroll w-full overflow-hidden">
      <div
        ref={animationRef}
        className={`animation-container ${inView ? to : from}`}
      >
        {children}
      </div>
    </div>
  );
}
