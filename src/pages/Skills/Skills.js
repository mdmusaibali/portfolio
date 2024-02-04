import { useSelector } from "react-redux";
import CenterDiv from "../../components/CenterDiv/CenterDiv";
import { MessageMe } from "../../components/Contact/MessageMe/MessageMe";
import { Footer } from "../../components/Footer/Footer";
import { MultiPurposeList } from "../../components/MultiPurposeList/MultiPurposeList";
import classes from "./Skills.module.scss";

const Skills = () => {
  const skills = useSelector((state) => state.personal.skills);

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
          xmlns="http://www.w3.org/2000/svg"
          className={classes["header__svg"]}
          fill="none"
          viewBox="0 0 304 304"
        >
          <circle
            cx="152"
            cy="152"
            r="144.5"
            fill="var(--color-primary)"
            fillOpacity=".05"
          ></circle>
          <circle
            cx="152"
            cy="152"
            r="121"
            fill="var(--color-primary)"
            fillOpacity=".1"
          ></circle>
          <circle
            cx="152"
            cy="152"
            r="99"
            fill="var(--color-primary)"
            fillOpacity=".2"
          ></circle>
          <circle cx="152" cy="152" r="75" fill="var(--color-primary)"></circle>
          <path
            className={classes["shadow"]}
            fill="rgba(0,0,0,0.2)"
            d="M169.259 109.608c1.028-3.838-3.767-6.492-6.474-3.584l-38.137 40.978c-1.959 2.104-.973 5.536 1.804 6.279l14.33 3.84a3.813 3.813 0 012.695 4.669l-8.735 32.602c-1.029 3.838 3.766 6.492 6.473 3.584l38.138-40.978c1.958-2.104.972-5.535-1.804-6.279l-14.33-3.84a3.812 3.812 0 01-2.696-4.669l8.736-32.602z"
          ></path>
          <path
            fill="var(--color-background)"
            d="M169.259 109.608c1.028-3.838-3.767-6.492-6.474-3.584l-38.137 40.978c-1.959 2.104-.973 5.536 1.804 6.279l14.33 3.84a3.813 3.813 0 012.695 4.669l-8.735 32.602c-1.029 3.838 3.766 6.492 6.473 3.584l38.138-40.978c1.958-2.104.972-5.535-1.804-6.279l-14.33-3.84a3.812 3.812 0 01-2.696-4.669l8.736-32.602z"
          ></path>
        </svg>
        <h1 className={classes["heading__primary"]}>Skills</h1>
        <p className={classes["header__text"]}>
          Here's a list of things I can work with.
        </p>
      </CenterDiv>

      {skills && (
        <CenterDiv
          extraStyles={{
            padding: "5rem 0 5rem 0",
            borderBottom: "1px solid var(--color-dark-gray)",
          }}
        >
          <h2 className={classes["heading__secondary"]}>Building 💻</h2>
          <MultiPurposeList items={skills} anchored={false} />
        </CenterDiv>
      )}

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

export default Skills;
