import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sakshi Jadhav</h1>
        <p className={styles.description}>
          I am a passionate full stack developer with expertise in both frontend
          and backend development.I am proficient in creating dynamic and
          responsive user interfaces as well as robust server-side applications.
        </p>
        <a
          href="https://drive.google.com/file/d/1BMDtKwi1OUSrusS7BrqLrzRzI-ngU-Vm/view?usp=drivesdk"
          className={styles.contactBtn}
        >
          My Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
export default Hero;
