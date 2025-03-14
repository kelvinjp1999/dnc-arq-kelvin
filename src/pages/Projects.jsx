import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProjectsList from "../components/ProjectsList/ProjectsList";
import Banner from "../components/Banner/Banner"
import { useContext } from 'react';


//Context
import {AppContext} from '../contexts/AppContext'

function Projects(){
    const appContext= useContext(AppContext)
    return (
        <>
        <Header/>
        <Banner title={appContext.languages[appContext.language].menu.projects} image='projects.svg'/>
        <div className="container">
            <ProjectsList/>
        </div>
        <Footer/>
        </>
    )
}

export default Projects