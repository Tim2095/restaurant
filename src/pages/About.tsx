import classes from "./About.module.scss";
import aboutOne from "../assets/img/about-1.png";
import aboutTwo from "../assets/img/about-2.png";

const About = () => {
  return (
    <section id={classes.about}>
      <div className={`${classes["about-cnt"]} container`}>
        <div className={classes["about-section-cnt"]}>
          <div className={classes["about-title"]}>About Us</div>
          <h2 className={classes.welcome}>Welcome</h2>
          <p className={classes["about-info"]}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
            <p className={classes['info-second-part']}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
          </p>
          <button className={classes['about-menu-btn']}>Today's menu</button>
        </div>
        <div className={classes["about-img-cnt"]}>
          <img className={classes["about-first-img"]} src={aboutOne} />
          <img className={classes["about-second-img"]} src={aboutTwo} />
        </div>
      </div>
    </section>
  );
};

export default About;
