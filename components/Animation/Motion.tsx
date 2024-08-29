"use client";
import { motion, MotionProps } from "framer-motion";
import React from "react";

interface CustomMotionProps<Tag extends keyof JSX.IntrinsicElements>
  extends MotionProps {
  as?: Tag;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Motion = React.forwardRef(
  ({ as, children, className = "", ...props }: any, ref) => {
    const Component = as ? (motion as any)[as] : motion.div;

    return (
      <Component className={className} {...props} ref={ref}>
        {children}
      </Component>
    );
  }
);

Motion.displayName = "Motion";
