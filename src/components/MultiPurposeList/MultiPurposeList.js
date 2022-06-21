import { AnchoredListItem } from "./AnchoredListItem";
import { UnAnchoredListItem } from "./UnAnchoredListItem";

export const MultiPurposeList = (props) => {
  const items = props.items;
  return (
    <div style={props.extraStyles}>
      {props.anchored &&
        items &&
        items.map((item) => (
          <AnchoredListItem
            key={item.id}
            item={item}
            isLastItem={items.length - 1 === item.no}
          />
        ))}
      {!props.anchored &&
        items &&
        items.map((item) => (
          <UnAnchoredListItem
            key={item.id}
            item={item}
            isLastItem={items.length - 1 === item.no}
          />
        ))}
    </div>
  );
};
