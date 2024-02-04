import { convertDateToMonthYear } from "../../utlis/date-helper";
import classes from "./UnAnchoredListItem.module.scss";
export const UnAnchoredListItem = (props) => {
  const item = props.item;
  return (
    <div
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
          {item.date && (
            <p className={classes["section__container--element--text--date"]}>
              {convertDateToMonthYear(item.date)}
            </p>
          )}
          {item.startDate && (
            <p className={classes["section__container--element--text--date"]}>
              {convertDateToMonthYear(item.startDate)} -{" "}
              {item.endDate ? convertDateToMonthYear(item.endDate) : "Present"}
            </p>
          )}
          {item.gameId && (
            <p className={classes["section__container--element--text--date"]}>
              {item.gameId}
            </p>
          )}
          {item.rank && (
            <p className={classes["section__container--element--text--date"]}>
              {item.rank}
            </p>
          )}
        </div>
        <div
          className={`${classes["section__container--element--right"]} ${
            classes[`bg-${item.logoBackground}`]
          }`}
        >
          {item.iconURL && (
            <img
              className={classes["section__logo"]}
              src={item.iconURL}
              alt={`${item.logoAlt}`}
            />
          )}
        </div>
      </div>
    </div>
  );
};
