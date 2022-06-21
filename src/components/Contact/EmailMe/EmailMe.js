import { Link } from "react-router-dom";
import { FunText } from "../../FunText/FunText";
import Animoji from "./../../../img/animoji/animoji1.gif";
import classes from "./EmailMe.module.scss";
export const EmailMe = () => {
  return (
    <div className={classes.contact__left}>
      <div className={classes["contact__left--top"]}>
        <div className={classes["animoji-background"]}>
          <img
            className={classes["animoji"]}
            src={Animoji}
            alt="Gif showing animated head making funny expressions"
          />
        </div>
        <h2 className={classes["heading__secondary"]}>Hey, I'm Musaib!</h2>
        <FunText extraStyles={{ fontSize: "1.8rem" }} />
        <Link to="/about" className={classes["btn__header"]}>
          More about me
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={classes["icon"]}
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </Link>
      </div>
      <div className={classes["contact__left--bottom"]}>
        <span className={classes["contact__left--bottom--email"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={classes["contact__left--bottom--icon"]}
          >
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
          <a
            href="mailto:mdmusaibali@gmail.com?subject=Hey Musaib!"
            className={classes["send-mail"]}
          >
            Send me an email
          </a>
        </span>
      </div>
    </div>
  );
};
