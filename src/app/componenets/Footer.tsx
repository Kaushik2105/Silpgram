import React from "react";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom"
import { SiGoogleearth } from "react-icons/si";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.offer}>
        <div className={styles.upper}>GET THE BEST DEALS POSSIBLE !!</div>

        <div className={styles.lower}>Free Shipping on shopping over 400</div>
      </div>

      <div className={styles.links}>
        <div className={styles.symbol}>
          <Link to="/" className={styles.symbol_a}>
            <img
              className={styles.image}
              src="./footer/Silpgram_logo__3_-resized.png"
              alt=""
            />
            <div className={styles.tagline}>
              We decorate world with traditions
            </div>
          </Link>
        </div>

        <div className={styles.lower}>
          <div className={styles.about_us}>
            <h3 className={styles.header}>About Us</h3>
            <span>
              {" "}
              We are passionate about providing a platform that connects
              talented artists with art enthusiats like you.
            </span>
          </div>

          <div className={styles.helpful_links}>
            <h3 className={styles.header}>Helpful Links</h3>

            <div className={styles.link}>
              <Link to="/about" className={styles.link_a}>
                About
              </Link>
            </div>

            <div className={styles.link}>
              <Link to="/privacypolicy" className={styles.link_a}>
                Privacy Policy
              </Link>
            </div>

            <div className={styles.link}>
              <Link to="/returnpolicy" className={styles.link_a}>
                Return Policy
              </Link>
            </div>

            <div className={styles.link}>
              <Link to="/termsandconditions" className={styles.link_a}>
                Terms and Conditions
              </Link>
            </div>
          </div>

          <div className={styles.contact_us}>
            <h3 className={styles.header}>Contact Us</h3>
            <Link to="" className={styles.link_a}>
              <MdEmail color="yellow" size="50px" />
              setup@silpgram.com
            </Link>

            <a href="#" className={styles.link_a}>
              <SiGoogleearth color="yellow" size="50px" />
              https://silpgram.com
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.copyright}>
            Copyright &#169; Silpgram.com 2023
          </div>

          <div className={styles.icons}>
            <a href="#">
              <AiFillTwitterCircle color="yellow" size="50px" />
            </a>
            <a href="https://instagram.com/silpgram?igshid=NTc4MTIwNjQ2YQ==">
              <AiFillInstagram color="yellow" size="50px" />
            </a>
            <a href="#">
              <IoLogoWhatsapp color="yellow" size="50px" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
