import Header from "../components/Header/Header";
import AboutText from "../components/AboutText/AboutText";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner"
import { useContext } from 'react';

//Context
import {AppContext} from '../contexts/AppContext'

function About(){
    const appContext= useContext(AppContext)
    return (
    <>
        <Header/>
        <Banner title={appContext.languages[appContext.language].menu.about} image='about.svg'/>
        <div className="container">
            <AboutText/>
        </div>
        <Footer/>
    </>
    )
}

export default About