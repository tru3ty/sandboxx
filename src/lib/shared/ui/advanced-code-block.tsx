"use client";
import { cn } from "@/lib/utils";
import { CheckIcon, CopyIcon } from "lucide-react";
import type { HTMLAttributes } from "react";
import { useState } from "react";
import type { BundledLanguage, BundledTheme } from "shiki";
import ShikiCode from "./code-highlighter";

function CopyToClipboard({ code }: Readonly<{ code: string }>) {
  const [isCopied, setIsCopied] = useState(false);
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_error) {
      setIsCopied(false);
    } finally {
      setTimeout(() => {
        // do something
        setIsCopied(false);
      }, 2000);
    }
  };

  return (
    <button
      aria-label="Copy code to clipboard"
      className="relative flex size-4 cursor-pointer bg-transparent font-normal text-base text-zinc-500 leading-6 transition-colors duration-150 ease-in-out dark:text-zinc-400"
      onClick={copyToClipboard}
      type="button"
    >
      {isCopied ? (
        <CheckIcon className="block size-4 align-middle" />
      ) : (
        <CopyIcon className="block size-4 align-middle" />
      )}
    </button>
  );
}

type AdvancedBlockProps = {
  code: string;
  fileName?: string;
  lang?: BundledLanguage;
  theme?: BundledTheme;
  className?: string;
};

export const AdvancedCodeBlock = ({
  code,
  fileName,
  lang = "typescript",
  theme = "github-light",
  className,
  ...props
}: AdvancedBlockProps & HTMLAttributes<HTMLDivElement>) => {
  return (
    <figure
      className={cn(
        "-mt-1 relative flex w-full flex-col flex-wrap rounded-2xl bg-neutral-200/70 text-white leading-6 dark:bg-[rgb(33,33,38)]",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-between px-5 py-3">
        <figcaption className="mr-[-48px] max-w-full whitespace-nowrap font-medium text-neutral-600 text-xs dark:text-neutral-200">
          <span>{fileName ?? <br />}</span>
        </figcaption>
        <CopyToClipboard code={code} />
      </div>
      <div className="w-full px-1 pb-1">
        <div className="relative isolate overflow-hidden rounded-xl border-white/80 border-t shadow-black/5 shadow-sm dark:border-white/15 dark:shadow-black/10">
          <pre
            className="overflow-x-auto overflow-y-auto bg-white/50 py-4 text-sm text-white leading-6 dark:bg-zinc-700/50"
            style={{ paddingRight: "10px" }}
          >
            <ShikiCode code={code} lang={lang} theme={theme} />
          </pre>
        </div>
      </div>
    </figure>
  );
};
