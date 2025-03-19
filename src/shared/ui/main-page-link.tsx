import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import React from "react";

type Props = LinkProps & {
  children: React.ReactNode;
  className?: string;
};

const MainPageLink = ({ children, ...props }: Props) => {
  return (
    <Link
      className={cn("py-2 px-4 rounded-xl bg-foreground text-background", props.className)}
      {...props}>
      {children}
    </Link>
  );
};

export default MainPageLink;
