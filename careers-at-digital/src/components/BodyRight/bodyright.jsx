import React from "react";
import styles from "./bodyright.module.css"
import { getImageUrl } from "../../utils";
import Button from "../button/button";

export const  RightBody = () => {

    return (
       <section>
        <div className={styles.frameGroup}>
        <div className={styles.frameParent}>
          <div className={styles.webMobileAppDevelopmentWrapper}>
            <div className={styles.webMobile}>Digital Strategy Consulting</div>
          </div>
          <div className={styles.yourWebAnd}>
            Your digital strategy should complement the overall marketing
            strategy of the company. In online marketing, each component will
            never work in isolation and every business needs a different mix. We
            provide a clear concept and strategic overview to find the most
            efficient model for your business.
          </div>
          <div className={styles.button1}>
           <Button>Lern More</Button>
          </div>
        </div>
        <img className={styles.image1Icon} style={{marginLeft:"40px"}}  alt="" src={getImageUrl("Body/search.png")} />
      </div>
       </section>
    )
}