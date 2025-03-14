"use client";

import { cva, type VariantProps } from "class-variance-authority";
import {
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import React, { useRef } from "react";

import { cn } from "@/lib/utils";

export interface DockProps extends VariantProps<typeof dockVariants> {
  className?: string;
  iconSize?: number;
  iconMagnification?: number;
  iconDistance?: number;
  direction?: "top" | "middle" | "bottom";
  children: React.ReactNode;
}

const DEFAULT_SIZE = 40;
const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

const dockVariants = cva(
  "supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 mx-auto mt-8 flex h-[58px] w-max items-center justify-center gap-2 rounded-2xl border p-2 backdrop-blur-md",
);

export interface DockIconProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
  magnification?: number;
  distance?: number;
  mouseX?: MotionValue<number>;
  className?: string;
  children?: React.ReactNode;
}

const DockIcon = React.forwardRef<HTMLDivElement, DockIconProps>(
  ({ size = DEFAULT_SIZE, magnification = DEFAULT_MAGNIFICATION, distance = DEFAULT_DISTANCE, mouseX, className, children, ...props }, forwardedRef) => {
    const elementRef = useRef<HTMLDivElement>(null);
    const padding = Math.max(6, size * 0.2);
    const defaultMouseX = useMotionValue(Infinity);

    const distanceCalc = useTransform(mouseX ?? defaultMouseX, (val: number) => {
      const bounds = elementRef.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
      return val - bounds.x - bounds.width / 2;
    });

    const sizeTransform = useTransform(
      distanceCalc,
      [-distance, 0, distance],
      [size, magnification, size],
    );

    const scaleSize = useSpring(sizeTransform, {
      mass: 0.1,
      stiffness: 150,
      damping: 12,
    });

    return (
      <motion.div
        ref={(node) => {
          // Handle both refs
          elementRef.current = node;
          if (typeof forwardedRef === 'function') {
            forwardedRef(node);
          } else if (forwardedRef) {
            forwardedRef.current = node;
          }
        }}
        style={{ width: scaleSize, height: scaleSize, padding }}
        className={cn(
          "flex aspect-square cursor-pointer items-center justify-center rounded-full",
          className,
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

DockIcon.displayName = "DockIcon";

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  (
    {
      className,
      children,
      iconSize = DEFAULT_SIZE,
      iconMagnification = DEFAULT_MAGNIFICATION,
      iconDistance = DEFAULT_DISTANCE,
      direction = "middle",
      ...props
    },
    ref,
  ) => {
    const mouseX = useMotionValue(Infinity);

    const renderChildren = () => {
      return React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            mouseX,
            size: iconSize,
            magnification: iconMagnification,
            distance: iconDistance,
          });
        }
        return child;
      });
    };

    return (
      <motion.div
        ref={ref}
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        {...props}
        className={cn(dockVariants({ className }), {
          "items-start": direction === "top",
          "items-center": direction === "middle",
          "items-end": direction === "bottom",
        })}
      >
        {renderChildren()}
      </motion.div>
    );
  },
);

Dock.displayName = "Dock";

export { Dock, DockIcon, dockVariants };
