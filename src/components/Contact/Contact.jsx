import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:jadhavsakshi218@gmail.com">myemail@email.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/sakshi-jadhav-736ab2267?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BmPub0cjIQymD6JI%2Bn0WUPA%3D%3D">
            linkedin.com/Sakshi Jadhav
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/sakshijadhav10">
            github.com/Sakshi Jadhav
          </a>
        </li>
      </ul>
    </footer>
  );
};
export default Contact;
