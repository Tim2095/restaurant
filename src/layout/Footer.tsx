import classes from "./Footer.module.scss";
import facebookLogo from "../assets/logo/facebook.png";
import instagramLogo from "../assets/logo/instagram.png";
import twitterLogo from "../assets/logo/twitter.png";
import youtubeLogo from "../assets/logo/youtube.png";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.overlay}>
        <div className={`${classes["footer-cnt"]} container-secondary`}>
          <div className={classes["footer-item"]}>
            <div>
              <h3 className={classes["footer-title"]}>Quibeez</h3>
              <p className={classes["footer-subtitle"]}>RESTAURANT</p>
              <p className={classes["footer-description"]}>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, .
              </p>

              <div className={classes["footer-logo-cnt"]}>
                <a href="http://facebook.com">
                  <img src={facebookLogo} alt="logo" />
                </a>

                <a href="http://instagram.com">
                  <img src={instagramLogo} alt="logo" />
                </a>

                <a href="http://twitter.com">
                  {" "}
                  <img src={twitterLogo} alt="logo" />
                </a>
                <a href="http://youtube.com">
                  <img src={youtubeLogo} alt="logo" />
                </a>
              </div>
            </div>

            <div className={classes.location}>
              <h3 className={classes["geo-title"]}>Location</h3>
              <p className={classes["geo-details"]}>Lorem</p>
              <p className={classes["geo-specific-details"]}>Lorem ipsum</p>
            </div>
            <div className={classes.contact}>
              <h3 className={classes["contact-title"]}>Contact Us</h3>
              <a href="tel:+912222333444" className={classes["contact-phone"]}>
                +91 2222 333 444
              </a>
              <a
                href="mailto:google@gmail.com"
                className={classes["contact-email"]}
              >
                google@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
