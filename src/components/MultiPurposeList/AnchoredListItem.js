import { Link } from "react-router-dom";
import classes from "./AnchoredListItem.module.scss";
export const AnchoredListItem = (props) => {
  const item = props.item;
  return (
    <Link
      to={`/projects/${item.id}`}
      className={`${classes["section__container--element-link"]} ${
        props.isLastItem ? classes["borderBottomNone"] : ""
      }`}
    >
      <div
        className={`${classes["section__container--element"]} ${
          props.isLastItem ? classes["borderBottomNone"] : ""
        }`}
      >
        <div className={classes["section__container--element--left"]}>
          <h3 className={classes["heading__tertiary"]}>{item.name}</h3>
          <p className={classes["section__container--element--text"]}>
            {item.shortDescription}
          </p>
          <p className={classes["section__container--element--text--date"]}>
            {item.date}
          </p>
        </div>
        <div
          className={`${classes["section__container--element--right"]} ${
            classes[`bg-${item.logoBackground}`]
          }`}
        >
          <img
            className={classes["section__logo"]}
            src={item.icon}
            alt={`${item.logoAlt}`}
          />
        </div>
      </div>
    </Link>
  );
};
