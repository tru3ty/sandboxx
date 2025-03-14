import { ComponentItemType } from "@/widgets/components-list/api/data";

interface IComponentItem {
  item: ComponentItemType;
  onClick: (elem: ComponentItemType) => void;
}

const ComponentItem = ({ item, onClick }: IComponentItem) => {
  // const MyComponent = component;

  return (
    <div onClick={() => onClick(item)}>
      <p className="text-neutral-400">{item.name}</p>
      {item.component}
      {/* <GradientCard className="flex items-center justify-center w-48 h-48">
        {item.text}
      </GradientCard> */}
    </div>
  );
};

export default ComponentItem;
