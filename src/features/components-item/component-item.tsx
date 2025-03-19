import { ComponentItemType } from "@/widgets/components-list/api/data";

interface IComponentItem {
  item: ComponentItemType;
  onClick: (elem: ComponentItemType) => void;
}

const ComponentItem = ({ item, onClick }: IComponentItem) => {
  return (
    <div onClick={() => onClick(item)}>
      <p className='text-neutral-400'>{item.name}</p>
      {item.component}
    </div>
  );
};

export default ComponentItem;
