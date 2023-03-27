import Hamburger from "./Hamburger";
import Hero from "./Hero";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

const MainContent = ({openNav, showPdf, showImg}) => {
    return (
        <>
            <div className="rey-main rey-padding-large" style={{marginLeft: "40%"}}>
                <Hamburger click={openNav}/>
                <Hero click={showPdf}/>
                <Portfolio click={showImg}/>
                <About/>
                <Contact/>
                <Footer/>
            </div>
        </>
    )
}

export default MainContent