"use client";
import { cn } from "@/lib/utils";
import { useMouse } from "@/shared/hooks/use-mouse";
import { ElementType, type ReactNode } from "react";

export const GradientCard = ({
  as: Element = "div",
  circleSize = 400,
  colors = ["hsl(0, 100%, 50%)", "hsl(120, 100%, 50%)", "hsl(240, 100%, 50%)"],
  className,
  children,
  childrenClassName,
  roundness = 20,
  ...props
}: {
  as?: ElementType;
  circleSize?: number;
  colors?: string[];
  className?: string;
  children?: ReactNode;
  childrenClassName?: string;
  roundness?: number;
} & Omit<React.ComponentPropsWithRef<ElementType>, "ref">) => {
  const [mouse, parentRef] = useMouse();

  return (
    <Element
      ref={parentRef}
      className={cn("group relative overflow-hidden", className)}
      style={{
        borderRadius: `${roundness}px`,
        ...props.style,
      }}
      {...props}
    >
      <div
        className="absolute inset-px -translate-x-1/2 -translate-y-1/2 transform-gpu rounded-full transition-transform duration-500 group-hover:scale-[3]"
        style={{
          maskImage: `radial-gradient(${circleSize / 2}px circle at center, white, transparent)`,
          width: circleSize,
          height: circleSize,
          left: mouse.elementX ?? "50%",
          top: mouse.elementY ?? "50%",
          background: `linear-gradient(135deg, ${colors.join(", ")})`,
          opacity: mouse.elementX === null || mouse.elementY === null ? 0 : 1,
        }}
      />
      <div
        style={{
          borderRadius: `${roundness}px`,
        }}
        className="absolute inset-px bg-neutral-100/80 dark:bg-neutral-900/80"
      />
      <div className={cn("relative", childrenClassName)}>{children}</div>
    </Element>
  );
};
