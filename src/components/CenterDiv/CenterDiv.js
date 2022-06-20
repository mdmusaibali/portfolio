import classes from "./CenterDiv.module.scss";
export const CenterDiv = (props) => {
  return (
    <div style={props.extraStyles} className={classes.centerDiv}>
      {props.children}
    </div>
  );
};
