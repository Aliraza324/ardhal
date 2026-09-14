import * as React from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

const ContainerScroll = React.forwardRef(
  ({ children, className, style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("relative w-full", className)}
        style={{ perspective: "1000px", ...style }}
        {...props}
      >
        {children}
      </div>
    );
  }
);
ContainerScroll.displayName = "ContainerScroll";

const CardSticky = React.forwardRef(
  (
    {
      index,
      incrementY = 20,
      incrementZ = 10,
      topOffset = 100,
      children,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const y = topOffset + index * incrementY;
    const z = index * incrementZ;

    return (
      <motion.div
        ref={ref}
        layout="position"
        style={{
          top: y,
          zIndex: index + 10,
          backfaceVisibility: "hidden",
          ...style,
        }}
        className={cn("sticky", className)}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

CardSticky.displayName = "CardSticky";

export { ContainerScroll, CardSticky };
