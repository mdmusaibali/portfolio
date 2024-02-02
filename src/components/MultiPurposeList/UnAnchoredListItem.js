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
          <p className={classes["section__container--element--text--date"]}>
            {item.date}
          </p>
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
