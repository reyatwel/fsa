const Hamburger = ({click}) => {
    return (
        <>
            <span className="rey-button rey-top rey-white rey-xxlarge rey-text-grey rey-hover-text-black"
                  style={{width: "auto", right: "0"}} onClick={() => click()}><i className="fa fa-bars"/></span>
        </>
    )
}

export default Hamburger