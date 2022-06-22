import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { themeActions } from "../../store/theme-slice";
import NameAndJob from "../NameAndJob/NameAndJob";
import classes from "./Footer.module.scss";
export const Footer = () => {
  const dispatch = useDispatch();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleThemePicker = () => {
    dispatch(themeActions.toggleThemePickerIsOpen());
    scrollToTop();
  };

  const resetThemeHandler = () => {
    dispatch(themeActions.changeThemeState({ themeName: "Light" }));
    dispatch(themeActions.changeTheme());
  };

  return (
    <>
      <div className={classes["footer__grid"]}>
        <div className={classes["footer__grid--element"]}>
          <Link
            onClick={scrollToTop}
            to="/home"
            className={classes["footer__grid--element-link"]}
          >
            Home
          </Link>
        </div>
        <div className={classes["footer__grid--element"]}>
          <Link
            onClick={scrollToTop}
            to="/home"
            className={classes["footer__grid--element-link"]}
          >
            Portfolio/Work
          </Link>
        </div>
        <div className={classes["footer__grid--element"]}>
          <p
            onClick={toggleThemePicker}
            className={classes["footer__grid--element-link"]}
          >
            Change theme
          </p>
        </div>
        <div className={classes["footer__grid--element"]}>
          <Link
            onClick={scrollToTop}
            to="/about"
            className={classes["footer__grid--element-link"]}
          >
            About
          </Link>
        </div>
        <div className={classes["footer__grid--element"]}>
          <Link
            onClick={scrollToTop}
            to="/now"
            className={classes["footer__grid--element-link"]}
          >
            Now
          </Link>
        </div>
        <div className={classes["footer__grid--element"]}>
          <a
            href="mailto:mdmusaibali@gmail.com?subject=Hey Musaib!"
            className={classes["footer__grid--element-link"]}
          >
            Contact
          </a>
        </div>
      </div>

      <div className={classes["footer__details-and-reset"]}>
        <div className={classes["footer__name-and-reach"]}>
          <NameAndJob />

          <div className={classes["footer__reach"]}>
            <a
              aria-label="CodePen"
              href="https://codepen.io/mdmusaibali"
              target="_blank"
              rel="noreferrer"
              className={classes["footer__reach-icon"]}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
                <line x1="12" y1="22" x2="12" y2="15.5"></line>
                <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
                <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
                <line x1="12" y1="2" x2="12" y2="8.5"></line>
              </svg>
            </a>
            <a
              aria-label="GitHub"
              href="https://github.com/mdmusaibali"
              target="_blank"
              rel="noreferrer"
              className={classes["footer__reach-icon"]}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a
              aria-label="Linkedin"
              href="https://www.linkedin.com/in/mohammed-musaib-ali-b891601ba"
              target="_blank"
              rel="noreferrer"
              className={classes["footer__reach-icon"]}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a
              aria-label="Email"
              href="mailto:mdmusaibali@gmail.com?subject=Hey Musaib!"
              className={classes["footer__reach-icon"]}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </a>
          </div>
        </div>
        <button onClick={resetThemeHandler} className={classes["btn--reset"]}>
          Reset theme
        </button>
      </div>
    </>
  );
};
