import { useState } from "react";
import classes from "./FunText.module.scss";
export const FunText = () => {
  const [currentFunText, setCurrentFunText] = useState("a hard working person");
  const [count, setCount] = useState(0);

  const funTexts = [
    "i love watching anime ❤",
    "i can fall asleep anywhere 😴",
    "i'm gonna be hokage one day 😁",
    "i think there's a monster under my bed 😥",
    "a hard working person",
    "in constant state of learning something new",
    "i think black is an emotion",
    "i would like to be your friend😄",
    "i'm thankful for everything 😄",
  ];

  const funTextGenerator = () => {
    setCount((prevCountValue) => {
      if (prevCountValue === funTexts.length - 1) return 0;
      return (prevCountValue += 1);
    });
    setCurrentFunText(funTexts[count]);
  };

  return (
    <p className={classes["header__text"]}>
      I'm a developer and
      <span className={classes["header__fun-text"]} onClick={funTextGenerator}>
        {currentFunText}
      </span>
      .
    </p>
  );
};
