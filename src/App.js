import './App.css';
import ImgSidebar from "./components/ImgSidebar";
import Menu from "./components/Menu";
import MainContent from "./components/MainContent";
import ModalPortfolio from "./components/ModalPortfolio";
import ModalPdf from "./components/ModalPdf";

function App() {
    const showImg = elem => {
        document.getElementById("img01").src = elem.dataset.show;
        document.getElementById("modal01").style.display = "block";
        const captionText = document.getElementById("caption");
        captionText.innerHTML = elem.alt;
    }

    const showPdf = () => {
        document.getElementById("modal02").style.display = "block";
    }

    const openNav = () => {
        document.getElementById("mySidebar").style.width = "60%";
        document.getElementById("mySidebar").style.display = "block";
    }

    const closeNav = id => {
        document.getElementById(id).style.display = "none";
    }

    const pdfSrc = "https://docs.google.com/gview?a=v&pid=explorer&chrome=false&api=true&srcid=1ms1S2PqUglBfx4iRiIRlP8jdsKKpaLsG&hl=en&embedded=true"

    return (
        <>
            <ImgSidebar/>
            <Menu elem="mySidebar" click={() => closeNav("mySidebar")}/>
            <MainContent openNav={openNav} showPdf={showPdf} showImg={showImg}/>
            <ModalPortfolio elem="modal01" click={() => closeNav("modal01")}/>
            <ModalPdf src={pdfSrc} elem="modal02" click={closeNav} />
        </>
    );
}

export default App;
