"use client";
import {
  useInView,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { Motion } from "./Motion";
import { useRef, useState } from "react";

export default function AnimateInView({
  as,
  children,
  initial,
  animate,
  variants,
  animateOnce = true,
  ...props
}: any) {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: animateOnce });

  return (
    <Motion
      as={as}
      ref={containerRef}
      initial={initial}
      animate={inView ? animate : null}
      variants={variants}
      {...props}
    >
      {children}
    </Motion>
  );
}
