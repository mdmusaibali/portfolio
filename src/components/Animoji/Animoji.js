import classes from "./Animoji.module.scss";
import animoji from "./../../img/animoji/animoji1.gif";
export const Animoji = () => {
  return (
    <div className={classes["animoji-background-about"]}>
      <img
        className={classes["animoji"]}
        src={animoji}
        alt="A Gif of human head making funny expressions"
      />
    </div>
  );
};
