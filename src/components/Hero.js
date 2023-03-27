const Hero = ({click}) => {
    return (
        <>
            <header className="rey-container rey-center" style={{padding: "128px 16px"}} id="home">
                <h1 className="rey-jumbo"><b>Rey Atwel</b></h1>
                <p>Designer and Web Developer.</p>
                <img src="./assets/img/rey_atwel.jpg" className="rey-image rey-hide-large rey-hide-small rey-round"
                     style={{display: "block", width: "60%", margin: "auto"}} alt=""/>
                <img src="./assets/img/rey_atwel.jpg" className="rey-image rey-hide-large rey-hide-medium rey-round"
                     width="1000" height="1333" alt=""/>
                <button className="rey-button rey-light-grey rey-padding-large rey-margin-top"
                        onClick={() => click()}><i className="fa fa-eye"/> Curriculum Vitae
                </button>
            </header>
        </>
    )
}

export default Hero