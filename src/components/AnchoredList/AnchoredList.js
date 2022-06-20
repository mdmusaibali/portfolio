import { AnchoredListItem } from "./AnchoredListItem";
export const AnchoredList = (props) => {
  const items = props.items;
  return (
    <div>
      {items &&
        items.map((item) => (
          <AnchoredListItem
            key={item.id}
            item={item}
            isLastItem={items.length - 1 === item.no}
          />
        ))}
    </div>
  );
};
