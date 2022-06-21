import classes from "./CenterDiv.module.scss";
import Radium from "radium";
const CenterDiv = (props) => {
  return (
    <div style={props.extraStyles} className={classes.centerDiv}>
      {props.children}
    </div>
  );
};
export default Radium(CenterDiv);
