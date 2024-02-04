import { useSelector } from "react-redux";
import { Animoji } from "../../components/Animoji/Animoji";
import CenterDiv from "../../components/CenterDiv/CenterDiv";
import { MessageMe } from "../../components/Contact/MessageMe/MessageMe";
import { Footer } from "../../components/Footer/Footer";
import { FunText } from "../../components/FunText/FunText";
import { MultiPurposeList } from "../../components/MultiPurposeList/MultiPurposeList";
import classes from "./About.module.scss";

const About = () => {
  const educationDetails = useSelector((state) => state.personal.education);

  return (
    <>
      <CenterDiv
        extraStyles={{
          padding: "10rem 0 6rem 0",
          borderBottom: "1px solid var(--color-dark-gray)",
          "@media(max-width:425px)": {
            marginTop: "10rem",
          },
        }}
      >
        <Animoji />

        <h1 className={classes["heading__primary"]}>Hey, I'm Musaib!</h1>

        <FunText />

        <p className={classes["section__about-text"]}>
          Experienced Fullstack Developer with a strong background in Vue,
          React, React Native, NodeJS, NestJS and many other technologies.
          <br />
          <br />
          Skilled in migrating Vue2 to Vue3, building scalable UI components,
          and integrating REST and GraphQL APIs. Bachelor's degree in Computer
          Science with a passion for creating efficient and user-friendly
          applications.
          <br />
          <br />
          Track record of successful projects in the tech industry. Winner of
          prestigious software competitions showcasing innovation and technical
          expertise. Eager to collaborate on cutting-edge projects and
          contribute to the dynamic world of web development.
        </p>
      </CenterDiv>

      <CenterDiv
        extraStyles={{
          padding: "5rem 0 5rem 0",
          borderBottom: "1px solid var(--color-dark-gray)",
        }}
      >
        <h2 className={classes["heading__secondary"]}>Education 📚</h2>

        <MultiPurposeList
          extraStyles={{ marginBottom: "3rem" }}
          items={educationDetails}
        />

        <a
          href="https://drive.google.com/file/d/1x-FDsUAWsngZC_MUI2AWypXoAQGuCaP0/view?usp=sharing"
          className={classes["button--resume"]}
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </CenterDiv>

      <CenterDiv
        extraStyles={{
          padding: "5rem 0 5rem 0",
          borderBottom: "1px solid var(--color-dark-gray)",
        }}
      >
        <h2 className={classes["heading__secondary"]}>How can I help?</h2>
        <p className={classes["section__about-text"]}>
          Don't be a stranger — I'd love to help out or chat! Feel free to
          contact me if you:
        </p>
        <ul className={classes["about--list-items"]}>
          <li className={classes["about--list-item"]}>
            • Are looking for a designer who codes?
          </li>
          <li className={classes["about--list-item"]}>
            • Want to trade design feedback?
          </li>
          <li className={classes["about--list-item"]}>
            • Want to collaborate on a cool project?
          </li>
          <li className={classes["about--list-item"]}>
            • Have any cool movies, tv series, music/podcasts to recommend?
          </li>
          <li className={classes["about--list-item"]}>
            • Like to chat over coffee, tea or whatever really ☕️
          </li>
        </ul>
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
      </CenterDiv>

      <CenterDiv
        extraStyles={{
          padding: "5rem 0 5rem 0",
          borderBottom: "1px solid var(--color-dark-gray)",
        }}
      >
        <MessageMe extraStyles={{ width: "100%", padding: "3rem" }} />
      </CenterDiv>

      <CenterDiv
        extraStyles={{
          padding: " 6rem 0",
        }}
      >
        <Footer />
      </CenterDiv>
    </>
  );
};

export default About;
