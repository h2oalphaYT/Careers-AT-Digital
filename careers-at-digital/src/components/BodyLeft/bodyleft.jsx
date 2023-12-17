import React from "react";
import styles from "./bodyleft.module.css"
import { getImageUrl } from "../../utils";
import Button from "../button/button";


export const  LeftBody = () => {

    return (
       <section className={styles.image2Parent}>
    
        <img className={styles.image2Icon} style={{marginRight:"40px"}} alt="pc image" src={getImageUrl("Body/pc.png")} />
        <div className={styles.frameParent}>
          <div className={styles.webMobileAppDevelopmentWrapper}>
            <div
              className={styles.webMobile}
            >{`Web & Mobile App Development`}</div>
          </div>
          <div className={styles.yourWebAnd}>
            Your web and mobile Apps are pieces of the puzzle to grow your
            business. We use frameworks which tailor content and engagement
            methods to respond to different intents shown by your potential
            customers who interact with your business online.
          </div>
          <div className={styles.button1}>
           <Button>Lern More</Button>
          </div>
        </div>
     
       </section>
    )
}