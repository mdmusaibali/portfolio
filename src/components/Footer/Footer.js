import { Link } from "react-router-dom";
import classes from "./Footer.module.scss";
export const Footer = () => {
  return (
    <>
      <div className={classes["footer__grid"]}>
        <div className={classes["footer__grid--element"]}>
          <Link to="/home" className={classes["footer__grid--element-link"]}>
            Home
          </Link>
        </div>
        <div className={classes["footer__grid--element"]}>
          <a href="#" className={classes["footer__grid--element-link"]}>
            Portfolio/Work
          </a>
        </div>
        <div className={classes["footer__grid--element"]}>
          <a href="#" className={classes["footer__grid--element-link"]}>
            Change theme
          </a>
        </div>
        <div className={classes["footer__grid--element"]}>
          <Link to="/about" className={classes["footer__grid--element-link"]}>
            About
          </Link>
        </div>
        <div className={classes["footer__grid--element"]}>
          <Link to="/now" className={classes["footer__grid--element-link"]}>
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
          <div className={classes["footer__name-and-logo"]}>
            <div className={classes["footer__logo"]}>
              <svg
                className={classes["header__svg--small"]}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 264 264"
              >
                <path
                  className={classes["shadow"]}
                  d="M156.764 57.347c1.714-6.396-6.277-10.82-10.788-5.973L82.412 119.67c-3.263 3.506-1.62 9.226 3.007 10.466l23.883 6.399a6.354 6.354 0 014.493 7.782l-14.559 54.336c-1.714 6.396 6.277 10.821 10.789 5.973l63.563-68.295c3.264-3.507 1.62-9.227-3.007-10.467l-23.883-6.399a6.354 6.354 0 01-4.493-7.782l14.559-54.336z"
                ></path>
                <path d="M156.764 57.347c1.714-6.396-6.277-10.82-10.788-5.973L82.412 119.67c-3.263 3.506-1.62 9.226 3.007 10.466l23.883 6.399a6.354 6.354 0 014.493 7.782l-14.559 54.336c-1.714 6.396 6.277 10.821 10.789 5.973l63.563-68.295c3.264-3.507 1.62-9.227-3.007-10.467l-23.883-6.399a6.354 6.354 0 01-4.493-7.782l14.559-54.336z"></path>
                <defs>
                  <clipPath id="logoClip0">
                    <path fill="#fff" d="M0 0h256v256H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className={classes["footer__name-box"]}>
              <p className={classes["footer__name-box-name"]}>
                Mohammed Musaib Ali
              </p>
              <p className={classes["footer__name-box-job"]}>
                Frontend Developer
              </p>
            </div>
          </div>

          <div className={classes["footer__reach"]}>
            <a
              aria-label="CodePen"
              href="https://codepen.io/mdmusaibali"
              target="_blank"
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
        <button className={classes["btn--reset"]}>Reset theme</button>
      </div>
    </>
  );
};
