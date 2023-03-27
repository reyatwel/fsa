const ModalPdf = ({src, elem, click}) => {
    return (
        <>
            <div id="modal02" className="rey-modal rey-black" onClick={() => click(elem)}>
                <span className="rey-button rey-xxlarge rey-black rey-padding-large rey-display-topright"
                      title="Close Modal Image">&times;</span>
                <div className="rey-modal-content rey-animate-zoom rey-center rey-transparent rey-padding-64">
                    <iframe
                        src={src}
                        height="500px" width="100%" frameBorder="0"/>
                </div>
            </div>
        </>
    )
}

export default ModalPdf