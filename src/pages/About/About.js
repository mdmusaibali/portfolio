import { Animoji } from "../../components/Animoji/Animoji";
import { CenterDiv } from "../../components/CenterDiv/CenterDiv";
import { FunText } from "../../components/FunText/FunText";
import classes from "./About.module.scss";
export const About = () => {
  return (
    <CenterDiv
      extraStyles={{
        padding: "10rem 0 6rem 0",
        borderBottom: "1px solid var(--color-dark-gray)",
      }}
    >
      <Animoji />

      <h1 className={classes["heading__primary"]}>Hey, I'm Musaib!</h1>

      <FunText />

      <p className={classes["section__about-text"]}>
        I'm VIth semester student at P.D.A College of Engineering. I LOVE
        programming and developing new STUFF. Last year has been awesome for me.
        I got to learn many programming languages and made many stunning
        websites. I try to keep up with design and technology trends.
        <br />
        <br />
        I've completed learning HTML, CSS, MySQL and JavaScript last year and
        React.js this year. I'm currently learning Typescript. There's always a
        new thing to learn. It's like a never ending cycle😉.
        <br />
        <br />I get a lot of interesting ideas in my mind and i've always
        preferred to implement them rather than just keeping them in the brain.
        I'm aspiring to become a successful Full Stack Developer one day.
      </p>
    </CenterDiv>
  );
};
