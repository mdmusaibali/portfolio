import classes from "./CenterDiv.module.scss";
export const CenterDiv = (props) => {
  return <div className={classes.centerDiv}>{props.children}</div>;
};
