import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { getImageUrl } from "../../utils";
import styles from "./fotter.module.css"


export const FooterContent = () => {
  return (
    <footer id="fotter" className={styles.container}>
      <Container className="py-5">
        <Row className={styles.rowline}>
          <Col className="footer-col">
            <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
              <img alt="logo" src={getImageUrl("Nav/Logo.png")} className={styles.image_icon} />
              
            </a>
            <br/>
            <p className="my-3 text-white" id='testline' style={{ fontSize: "16px",textTransform:'capitalize' ,fontFamily:'Lato', fontWeight : 400 , lineHeight:"normal" , inlineSize:"max-content" , maxWidth:"447px" }}>
            Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.
            </p>
          </Col>



          <Col className={styles.technologies}>
          <a href="/" className="d-flex fs-5 align-items-center text-white text-decoration-none " style={{ fontSize: "21px",textTransform:'capitalize' , fontWeight : 600 }}>
          Our Technologies </a>
          <ul className="list-unstyled text-white my-3" style={{ fontSize: "14px",textTransform:'capitalize' , fontWeight : 500 , fontFamily:'Inter' }}>
              <li className={styles.list}>ReactJS</li>
              <li className={styles.list}>Gatsby</li>
              <li className={styles.list}>NextJs</li>
              <li className={styles.list}>NodeJs</li>
              <li className={styles.list}>GraphQl</li>
              <li className={styles.list}>Laravel</li>
              
            </ul>
          </Col>
         

          <Col className={styles.services}>
          <a href="/" className="d-flex fs-5 align-items-center text-white text-decoration-none " style={{ fontSize: "21px",textTransform:'capitalize' , fontWeight : 600 }}>
          Our Services </a>
          <ul className="list-unstyled text-white my-3" style={{ fontSize: "14px",textTransform:'capitalize' , fontWeight : 500 , fontFamily:'Inter' }}>
              <li className={styles.list}>Social media Marketing</li>
              <li className={styles.list}>Web & Mobile App Development</li>
              <li className={styles.list}>Data & Analytics</li>
              <li className={styles.list}>Google Marketing solutions</li>
              <li className={styles.list}>Search Engine Optimization</li>
             
              
            </ul>
          </Col>
        </Row>
        
        <Row>
       
          <Col className="text-center mt-5">
          <hr className="line" style={{ borderTop:"2px solid white"}}/>
            <small className='text-white'>Privacy Policy | Terms & Conditions.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
