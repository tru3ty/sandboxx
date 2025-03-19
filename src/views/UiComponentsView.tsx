"use client";
import { cn } from "@/lib/utils";
import { ComponentItemType } from "@/widgets/components-list/api/data";
import ComponentList from "@/widgets/components-list/component-list";
import SideContent from "@/widgets/SideContent";
import { useState } from "react";

const UiComponentsView = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<ComponentItemType | null>();

  const handleClick = (elem: ComponentItemType) => {
    setData(elem);
    setIsOpen(!isOpen);
  };

  return (
    <section className='grid grid-cols-4 transition-all w-full'>
      <div
        className={cn("p-16")}
        style={{
          gridColumn: isOpen ? "1 / span 3" : "1 / span 4",
        }}>
        <h1 className='section-title'>Components</h1>
        <ComponentList onClick={handleClick}></ComponentList>
      </div>
      <div
        className={cn(
          "w-2/5 h-screen fixed top-0 right-0 bottom-0 p-4 transition-transform",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}>
        {data && <SideContent data={data} />}
      </div>
    </section>
  );
};

export default UiComponentsView;
