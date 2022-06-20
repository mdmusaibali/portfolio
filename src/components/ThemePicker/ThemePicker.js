import { useSelector, useDispatch } from "react-redux";
import { themeActions } from "../../store/theme-slice";
import { ThemeItem } from "./ThemeItem";
import classes from "./ThemePicker.module.scss";

export const ThemePicker = (props) => {
  const dispatch = useDispatch();
  const allThemes = useSelector((state) => state.theme.allThemes);

  const changeThemeHandler = (value, e) => {
    const target = e.target.closest("." + value);
    if (!target) return;
    dispatch(
      themeActions.changeThemeState({ themeName: target.dataset.themeName })
    );
    dispatch(themeActions.changeTheme());
    dispatch(themeActions.setThemeToLocalStorage());
  };

  return (
    <div className={classes["theme-picker"]}>
      <p className={classes["theme-picker--text"]}>
        Select your favourite theme
      </p>
      <div className={classes["theme-picker--items"]}>
        {allThemes.map((theme) => (
          <ThemeItem
            key={theme.themeName}
            themeName={theme.themeName}
            colorPrimary={theme.colors["--color-primary"]}
            colorSecondary={theme.colors["--color-secondary"]}
            colorTertiary={theme.colors["--color-tertiary"]}
            colorBackground={theme.colors["--color-background"]}
            colorTextPrimary={theme.colors["--color-text-primary"]}
            onChangeTheme={changeThemeHandler}
          />
        ))}
      </div>
    </div>
  );
};
