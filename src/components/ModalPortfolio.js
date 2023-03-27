const ModalPortfolio = ({elem, click}) => {
    return (
        <>
            <div id="modal01" className="rey-modal rey-black" onClick={() => click(elem)}>
                <span className="rey-button rey-xxlarge rey-black rey-padding-large rey-display-topright"
                      title="Close Modal Image">&times;</span>
                <div className="rey-modal-content rey-animate-zoom rey-center rey-transparent rey-padding-64">
                    <img id="img01" className="rey-image" alt="" src=""/>
                    <p id="caption" className="rey-opacity rey-large"/>
                </div>
            </div>
        </>
    )
}

export default ModalPortfolio