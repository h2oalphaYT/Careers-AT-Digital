
import styles from './App.module.css'
import Navigation from './components/Nav/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Hero } from './components/hero/hero';
import { LeftBody } from './components/BodyLeft/bodyleft';
import { RightBody } from './components/BodyRight/bodyright';
import {FooterContent} from "./components/fotter/fotter"


function App() {
  

  return (
    <div className={styles.App}>
     <Navigation/>
     <Hero/>
     <LeftBody/>
     <RightBody/>
     <FooterContent/>
    </div>
  )
}

export default App
