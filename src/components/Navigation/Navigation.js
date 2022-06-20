import { useState } from "react";
import { NavLink } from "react-router-dom";
import { CenterDiv } from "../CenterDiv/CenterDiv";
import { FlexSB } from "../Flex/FlexSB";
import { ThemePicker } from "../ThemePicker/ThemePicker";
import classes from "./Navigation.module.scss";

export const Navigation = () => {
  const [themePickerIsOpen, setThemePickerIsOpen] = useState(false);

  const toggleThemePicker = () => {
    setThemePickerIsOpen((prevState) => (!prevState ? true : false));
  };

  return (
    <header className={classes.header}>
      {themePickerIsOpen ? <ThemePicker /> : ""}
      <CenterDiv>
        <nav className={classes.nav}>
          <FlexSB>
            <ul className={classes["nav-list"]}>
              <li className={classes["nav-item"]}>
                <NavLink
                  to="/home"
                  className={(navData) =>
                    navData.isActive
                      ? classes["link-active"]
                      : classes["link-inactive"]
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className={classes["nav-item"]}>
                <NavLink
                  to="/projects"
                  className={(navData) =>
                    navData.isActive
                      ? classes["link-active"]
                      : classes["link-inactive"]
                  }
                >
                  Projects
                </NavLink>
              </li>
              <li className={classes["nav-item"]}>
                <NavLink
                  to="/about"
                  className={(navData) =>
                    navData.isActive
                      ? classes["link-active"]
                      : classes["link-inactive"]
                  }
                >
                  About
                </NavLink>
              </li>
              <li className={classes["nav-item"]}>
                <NavLink
                  to="/now"
                  className={(navData) =>
                    navData.isActive
                      ? classes["link-active"]
                      : classes["link-inactive"]
                  }
                >
                  Now
                </NavLink>
              </li>
            </ul>

            <button
              className={classes["nav-theme-button"]}
              onClick={toggleThemePicker}
            >
              <svg
                className={classes["nav-theme-button--svg"]}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.53679 8.83841C2.81548 9.55092 2.85947 10.5009 3.63355 11.2838L5.23448 12.8847C4.38124 13.4213 2.7803 14.081 1.99742 14.8551C0.757138 16.0954 0.774731 17.7755 2.04141 19.0422C3.30808 20.3089 4.97939 20.3177 6.21967 19.0774C7.00255 18.3033 7.65348 16.6936 8.19006 15.8579L9.80859 17.4588C10.5827 18.2241 11.5415 18.2681 12.254 17.5468L13.1512 16.6232C13.723 16.0426 13.8109 15.3213 13.4327 14.6616C13.7845 14.5648 14.11 14.3537 14.3827 14.081L18.2355 10.2106C19.1679 9.27823 19.1503 8.16989 18.1739 7.19349L11.4711 0.490671C10.8554 -0.125074 10.0197 -0.169056 9.44794 0.402707C9.19284 0.649005 8.99932 1.01845 8.89377 1.50225C8.44515 3.5518 7.53913 5.4782 6.48356 6.83284C6.31643 7.06155 6.19329 7.29025 6.12291 7.51896C5.55115 7.29905 4.953 7.43099 4.45161 7.93239L3.53679 8.83841ZM13.1864 13.307C12.8345 13.6588 12.5003 13.6324 12.1484 13.2806L7.71505 8.856L7.72385 8.84721C7.38079 8.51295 7.25764 8.16109 7.71505 7.50137C8.65626 6.13793 9.60627 4.25551 10.1692 2.16198C10.1956 2.06522 10.2396 1.97725 10.3188 1.89809C10.4595 1.76614 10.6354 1.72216 10.8202 1.91568L14.8313 5.91802C14.6026 7.29905 13.5031 8.66248 12.6674 9.50693C12.5794 9.5861 12.4651 9.70045 12.597 9.8324C13.0105 10.2546 15.4822 8.49535 16.5202 7.60692L17.0832 8.16989C17.479 8.56572 17.4878 8.99675 17.1272 9.3486L13.1864 13.307ZM4.7155 9.67407L5.28726 9.1111C5.54235 8.8648 5.85902 8.8648 6.11412 9.12869L11.9549 14.9783C12.21 15.2334 12.2188 15.5412 11.9725 15.7963L11.4183 16.3593C11.1632 16.6232 10.8466 16.6144 10.5827 16.3505L8.48913 14.257C8.19006 13.9579 7.847 14.0634 7.53913 14.4681C6.93218 15.3301 5.90301 17.5116 5.30485 18.101C4.59235 18.7959 3.65993 18.8135 2.96502 18.1186C2.27011 17.4149 2.27011 16.4736 2.97382 15.7699C3.56318 15.1806 5.75347 14.1426 6.60671 13.5357C7.01135 13.2278 7.1257 12.8847 6.81783 12.5857L4.73309 10.5009C4.4692 10.2546 4.4692 9.92036 4.7155 9.67407ZM3.5016 17.582C3.77429 17.8459 4.17892 17.8459 4.44281 17.582C4.7155 17.3005 4.7067 16.9047 4.44281 16.6408C4.17012 16.3769 3.75669 16.3681 3.5016 16.6408C3.2553 16.9223 3.23771 17.3093 3.5016 17.582Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </FlexSB>
        </nav>
      </CenterDiv>
    </header>
  );
};
