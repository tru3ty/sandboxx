"use client";
import "@/app/globals.css";
import { cn } from "@/lib/utils";
import { useEffect, useState, type HTMLAttributes } from "react";
import { codeToHtml, type BundledLanguage, type BundledTheme } from "shiki";

type ShikiProps = {
  code: string;
  lang: BundledLanguage;
  theme: BundledTheme;
  className?: string;
};
export default function ShikiCode({
  code,
  lang,
  theme,
  className,
  ...props
}: Readonly<ShikiProps> & HTMLAttributes<HTMLDivElement>) {
  const [html, setHtml] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await codeToHtml(code, {
        lang,
        theme,
      });

      setHtml(data);
    };
    fetchData();
  }, [code, html, lang, theme]);

  return (
    <div
      className={cn(
        "text-sm hue-rotate-0 invert-0 *:bg-transparent dark:hue-rotate-180 dark:invert",
        className
      )}
      {...props}
      // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
