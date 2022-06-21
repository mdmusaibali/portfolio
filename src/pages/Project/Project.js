import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import CenterDiv from "../../components/CenterDiv/CenterDiv";
import classes from "./Project.module.scss";

export const Project = () => {
  const params = useParams();
  const projectId = params.projectId;

  const allProjects = useSelector((store) => store.projects.allProjects);
  const [currentProject] = allProjects.filter(
    (project) => project.id === projectId
  );

  return (
    <CenterDiv
      extraStyles={{
        padding: "10rem 0",
        "@media(max-width: 769px)": {
          width: "90%",
        },
        "@media(max-width: 425px)": {
          marginTop: "10rem",
        },
      }}
    >
      <div
        className={`${classes["section__container--element--right"]} ${
          classes[`bg-${currentProject.logoBackground}`]
        }`}
      >
        <img
          className={classes["section__logo"]}
          src={currentProject.icon}
          alt="CryptInfo Logo"
        />
      </div>

      <br />

      <Link to="/projects" className={classes["section--project-back-button"]}>
        ← Projects
      </Link>

      <h1 className={classes["heading__primary"]}>{currentProject.name}</h1>

      <p className={classes["section--project-description"]}>
        {currentProject.shortDescription}
      </p>

      <p className={classes["section--project-details"]}>
        {currentProject.longDescription}
      </p>

      <div className={classes["section--project-buttons"]}>
        <a
          href={currentProject.live}
          style={{
            marginRight: "0.5rem",
            "@media(max-width:425px)": {
              marginRight: "1rem",
            },
          }}
          target="_blank"
          rel="noreferrer"
        >
          <button className={classes["section--project-buttons-button"]}>
            Visit
          </button>
        </a>
        <a href={currentProject.sourceCode} target="_blank" rel="noreferrer">
          <button className={classes["section--project-buttons-button"]}>
            Source code
          </button>
        </a>
      </div>

      <h2 className={classes["heading__secondary"]}>Image Gallery</h2>

      {currentProject.desktopImages.map((imageUrl) => (
        <img
          className={classes["projects--project-imageDesktop"]}
          src={imageUrl}
          key={Math.random()}
          alt="Showing how web app looks in desktop"
        />
      ))}

      {currentProject.mobileImages.length < 2 && (
        <div className={classes["u-grid-1-col"]}>
          {currentProject.mobileImages.map((imageUrl) => (
            <img
              className={classes["u-grid-1-col-item"]}
              key={Math.random()}
              src={imageUrl}
              alt="Showing how web app looks in mobile"
            />
          ))}
        </div>
      )}

      {currentProject.mobileImages.length > 1 && (
        <div className={classes["u-grid-2-col"]}>
          {currentProject.mobileImages.map((imageUrl) => (
            <img
              className={classes["u-grid-2-col-item"]}
              key={Math.random()}
              src={imageUrl}
              alt="Showing how web app looks in mobile"
            />
          ))}
        </div>
      )}
    </CenterDiv>
  );
};
