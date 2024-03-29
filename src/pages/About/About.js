import { Animoji } from "../../components/Animoji/Animoji";
import CenterDiv from "../../components/CenterDiv/CenterDiv";
import { MessageMe } from "../../components/Contact/MessageMe/MessageMe";
import { Footer } from "../../components/Footer/Footer";
import { FunText } from "../../components/FunText/FunText";
import { MultiPurposeList } from "../../components/MultiPurposeList/MultiPurposeList";
import { EDUCATION_DETAILS } from "../../store/data";
import classes from "./About.module.scss";
const About = () => {
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
          I'm a final year student at P.D.A College of Engineering. I LOVE
          programming and developing new STUFF. Last few years have been awesome
          for me. I got to learn many new technologies and made many stunning
          websites. I try to keep up with design and technology trends.
          <br />
          <br />
          Hands on experience working with HTML, CSS, SASS, MySQL,
          JavaScript,TypeScript, MongoDB, Mongoose, Node.js, Git,Apollo GraphQL,
          Material UI,Vite.js, React.js, React Native, Vue, Vuetify and
          familiarity with python. Currently learning docker and kubernetes.
          <br />
          <br />I get a lot of interesting ideas in my mind and i've always
          preferred to implement them rather than just keeping them in the
          brain. I'm aspiring to become a successful Entrepreneur one day.
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
          items={EDUCATION_DETAILS}
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
