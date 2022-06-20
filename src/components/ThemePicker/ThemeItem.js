import classes from "./ThemeItem.module.scss";

export const ThemeItem = (props) => {
  return (
    <div
      style={{
        backgroundColor: props.colorBackground,
        border: "3px solid " + props.colorPrimary,
      }}
      className={classes["theme-picker--items--item"]}
      onClick={props.onChangeTheme.bind(
        null,
        classes["theme-picker--items--item"]
      )}
      data-theme-name={props.themeName}
    >
      <p
        style={{ color: props.colorTextPrimary }}
        className={classes["theme-picker--items--item--name"]}
      >
        {props.themeName}
      </p>
      <div className={classes["theme-picker--items--item--colors"]}>
        <div
          style={{ backgroundColor: props.colorPrimary }}
          className={classes["theme-picker--items--item--color"]}
        >
          &nbsp;
        </div>
        <div
          style={{ backgroundColor: props.colorSecondary }}
          className={classes["theme-picker--items--item--color"]}
        >
          &nbsp;
        </div>
        <div
          style={{ backgroundColor: props.colorTertiary }}
          className={classes["theme-picker--items--item--color"]}
        >
          &nbsp;
        </div>
      </div>
    </div>
  );
};
