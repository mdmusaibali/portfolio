import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CenterDiv from "../../components/CenterDiv/CenterDiv";
import { EmailMe } from "../../components/Contact/EmailMe/EmailMe";
import { MessageMe } from "../../components/Contact/MessageMe/MessageMe";
import { Footer } from "../../components/Footer/Footer";
import { FunText } from "../../components/FunText/FunText";
import { MultiPurposeList } from "../../components/MultiPurposeList/MultiPurposeList";
import { SKILLS } from "../../store/data";
import classes from "./Home.module.scss";

export const Home = () => {
  const top3Projects = useSelector((store) => store.projects.ownProjects).slice(
    0,
    3
  );

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
        <svg
          className={classes["header__svg"]}
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

        <h1 className={classes["heading__primary"]}>Hey, I'm Musaib!</h1>

        <FunText />

        <Link to="/about" className={classes["btn__header"]}>
          More about me &nbsp;
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
            style={{ top: "4px" }}
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </Link>
      </CenterDiv>

      <CenterDiv
        extraStyles={{
          padding: "5rem 0 5rem 0",
          borderBottom: "1px solid var(--color-dark-gray)",
        }}
      >
        <h2 className={classes["heading__secondary"]}>My Projects💻</h2>

        <MultiPurposeList
          items={top3Projects}
          extraStyles={{ marginBottom: "3rem" }}
          anchored={true}
        />

        <Link to="/projects" className={classes["btn__header"]}>
          View more projects
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
      </CenterDiv>

      <CenterDiv
        extraStyles={{
          padding: "5rem 0 5rem 0",
          borderBottom: "1px solid var(--color-dark-gray)",
        }}
      >
        <h2 className={classes["heading__secondary"]}>My Skills</h2>

        <MultiPurposeList items={SKILLS} anchored={false} />
      </CenterDiv>

      <CenterDiv
        extraStyles={{
          padding: "5rem 0 5rem 0",
          borderBottom: "1px solid var(--color-dark-gray)",
        }}
      >
        <h2
          style={{ marginBottom: "0rem" }}
          className={classes["heading__secondary"]}
        >
          Experience
        </h2>
        <p className={classes["experience--text"]}>I'd love to have some 😄.</p>
      </CenterDiv>

      <CenterDiv
        extraStyles={{
          maxWidth: "calc(1080px)",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "2rem",
          padding: "20rem 0 15rem 0",
          borderBottom: "1px solid var(--color-dark-gray)",
          "@media(max-width: 769px)": {
            flexDirection: "column",
            alignItems: "center",
          },
        }}
      >
        <EmailMe />
        <MessageMe />
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
