import { GradientCard } from "@/lib/shared/components/cards/gradient-card";
import { JSX } from "react";

export interface ICode {
  slug: string;
  fileName: string;
  code: string;
  lang: "typescript";
}

export interface ComponentItemType {
  name: string;
  component: JSX.Element;
  code: ICode[];
}

export const data: ComponentItemType[] = [
  {
    name: "Gradient card",
    component: (
      <GradientCard className="flex items-center justify-center w-48 h-48">
        Gradient card preview
      </GradientCard>
    ),
    code: [
      {
        slug: "GradientCard",
        fileName: "./gradient-card.tsx",
        code: `"use client";
import { useMouse } from "@/lib/shared/hooks/use-mouse";
import { cn } from "@/lib/utils";
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
        borderRadius: \`\${roundness}px\`,
        ...props.style,
      }}
      {...props}
    >
      <div
        className="absolute inset-px -translate-x-1/2 -translate-y-1/2 transform-gpu rounded-full transition-transform duration-500 group-hover:scale-[3]"
        style={{
          maskImage: \`radial-gradient(\${circleSize / 2}px circle at center, white, transparent)\`,
          width: circleSize,
          height: circleSize,
          left: mouse.elementX ?? "50%",
          top: mouse.elementY ?? "50%",
          background: \`linear-gradient(135deg, \${colors.join(", ")})\`,
          opacity: mouse.elementX === null || mouse.elementY === null ? 0 : 1,
        }}
      />
      <div
        style={{
          borderRadius: \`\${roundness}px\`,
        }}
        className="absolute inset-px bg-neutral-100/80 dark:bg-neutral-900/80"
      />
      <div className={cn("relative", childrenClassName)}>{children}</div>
    </Element>
  );
};
`,
        lang: "typescript",
      },
      {
        slug: "Example",
        fileName: "",
        code: `import { GradientCard } from "@/lib/shared/components/cards/gradient-card";

const Component = () => {

  return (
    <div className="flex-col items-center justify-center">
      <p className="text-neutral-400">Gradient card</p>
      <GradientCard className="flex items-center justify-center w-48 h-48">
        Gradient card preview
      </GradientCard>
    </div>
  );
};
`,
        lang: "typescript",
      },
    ],
  },
];
