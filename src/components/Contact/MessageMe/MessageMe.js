import classes from "./MessageMe.module.scss";
export const MessageMe = (props) => {
  return (
    <div style={props.extraStyles} className={classes["contact__right"]}>
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
      <h2 className={classes["heading__secondary"]}>Any message for Me?</h2>
      <p className={classes["contact__right--text"]}>
        Like seriously, anything.
      </p>
      <form name="contact" method="POST" netlify>
        <input
          type="text"
          className={classes["contact__right--input"]}
          name="userName"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          className={classes["contact__right--input"]}
          name="userEmail"
          placeholder="Your email"
          required
        />
        <input
          type="text"
          className={classes["contact__right--input"]}
          name="userMessage"
          placeholder="Your message for me"
          required
        />
        <button className={classes["contact__right--button"]}>Submit</button>
      </form>
    </div>
  );
};
