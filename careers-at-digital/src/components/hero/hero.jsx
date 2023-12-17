import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./hero.module.css"
import Button from "../button/button";

export const Hero = () => {


    
    return (
        <section className={styles.container}>
            <img className={styles.heroImageIcon} alt="hero image" src={getImageUrl("hero/bg-child.png")} />

            <div className={styles.weCrushYourCompetitorsGoaParent}>
          <b className={styles.weCrushYour}>
            We crush your competitors, goals, and sales records - without the
            B.S.
          </b>
          <Button className={styles.getFreeConsultation}>Get free consultation</Button>
          {/* <div className={styles.button}>
            <b className={styles.getFreeConsultation}>Get free consultation</b>
          </div> */}
        </div>
        </section>
        
      
      
    )
}