import { Link } from "react-router-dom";
import classes from "./AnchoredListItem.module.scss";
import { convertDateToMonthYear } from "../../utlis/date-helper";
export const AnchoredListItem = (props) => {
  const item = props.item;
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Link
      onClick={scrollToTop}
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
            {convertDateToMonthYear(item.date)}
          </p>
        </div>
        <div
          className={`${classes["section__container--element--right"]} ${
            classes[`bg-${item.logoBackground}`]
          }`}
        >
          <img
            className={classes["section__logo"]}
            src={item.iconURL}
            alt={`${item.logoAlt}`}
          />
        </div>
      </div>
    </Link>
  );
};
