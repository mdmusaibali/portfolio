import classes from "./NameAndJob.module.scss";
const NameAndJob = () => {
  return (
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
        <p className={classes["footer__name-box-name"]}>Mohammed Musaib Ali</p>
        <p className={classes["footer__name-box-job"]}>Full Stack Developer</p>
      </div>
    </div>
  );
};
export default NameAndJob;
