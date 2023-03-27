const Menu = ({elem, click}) => {
    return (
        <>
            <nav className="rey-sidebar rey-black rey-animate-right rey-xxlarge"
                 style={{display: "none", paddingTop: "150px", right: "0", zIndex: "2"}} id="mySidebar">
                <a href="javascript:void(0)" onClick={() => click(elem)}
                   className="rey-button rey-black rey-xxxlarge rey-display-topright"
                   style={{padding: "0 12px"}}>
                    <i className="fa fa-remove"/>
                </a>
                <div className="rey-bar-block rey-center">
                    <a href="#" className="rey-bar-item rey-button rey-text-grey rey-hover-black"
                       onClick={() => click(elem)}>Home</a>
                    <a href="#portfolio" className="rey-bar-item rey-button rey-text-grey rey-hover-black"
                       onClick={() => click(elem)}>Portfolio</a>
                    <a href="#about" className="rey-bar-item rey-button rey-text-grey rey-hover-black"
                       onClick={() => click(elem)}>About</a>
                    <a href="#contact" className="rey-bar-item rey-button rey-text-grey rey-hover-black"
                       onClick={() => click(elem)}>Contact</a>
                </div>
            </nav>
        </>
    )
}

export default Menu