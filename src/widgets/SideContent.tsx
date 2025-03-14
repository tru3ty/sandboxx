import { AdvancedCodeBlock } from "@/lib/shared/ui/advanced-code-block";
import * as Tabs from "@radix-ui/react-tabs";
import { ComponentItemType } from "./components-list/api/data";

interface ISideContent {
  data: ComponentItemType;
}

const SideContent = ({ data }: ISideContent) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-2xl">{data.name}</div>
      <div className="w-full max-w-2xl p-2">
        <Tabs.Root
          className="relative rounded-2xl bg-neutral-200/70 dark:bg-[rgb(33,33,38)]"
          defaultValue={data.code[0]?.slug}
        >
          <Tabs.List
            aria-orientation="horizontal"
            className="relative mb-1 flex border-b border-b-white before:absolute before:bottom-0 before:h-px before:w-full before:border-black/10 before:border-b dark:border-b-white/5 dark:before:border-black/70"
            role="tablist"
            style={{ scrollbarWidth: "none" }}
          >
            {data.code.map((code) => (
              <Tabs.Trigger
                className="group relative pt-3 pr-2 pb-2 pl-2 font-medium text-sm text-zinc-500 transition-colors data-[state=active]:text-sky-500 dark:text-zinc-400 dark:data-[state=active]:text-[rgb(93,227,255)] "
                key={code.slug}
                value={code.slug}
              >
                {code.slug}
                <div
                  className="-bottom-px absolute right-2 left-2 h-0.5 scale-x-0 rounded-full bg-sky-400 opacity-0 transition group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 dark:h-px dark:bg-[rgb(93,227,255)]"
                  style={{
                    boxShadow: "0px 0px 10px 1px rgba(93,227,255,0.5)",
                  }}
                />
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {data.code.map((code) => (
            <Tabs.Content key={code.slug} value={code.slug}>
              <AdvancedCodeBlock
                className=" rounded-t-none bg-transparent"
                code={code.code}
                fileName={code.fileName}
                lang={code.lang}
              />
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </div>
    </div>
  );
};

export default SideContent;
