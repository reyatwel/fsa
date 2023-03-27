const Portfolio = ({click}) => {
    return (
        <>
            <div className="rey-padding-32 rey-content" id="portfolio">
                <h2 className="rey-text-grey">My Portfolio</h2>
                <hr className="rey-opacity"/>

                <div className="rey-row-padding" style={{margin: "0 -16px"}}>
                    <div className="rey-half">
                        <img src="./assets/img/bitcash.jpg" data-show="./assets/img/portfolio-bitcash.jpg"
                             style={{width: "100%"}} onClick={e => click(e.target)} alt="BitCash"/>

                        <img src="./assets/img/p2ptrades.jpg" data-show="./assets/img/portfolio-p2ptrades.jpg"
                             style={{width: "100%"}} onClick={e => click(e.target)} alt="P2PTrades"/>
                    </div>

                    <div className="rey-half">
                        <img src="./assets/img/peratoken.jpg" data-show="./assets/img/portfolio-peratoken.jpg"
                             style={{width: "100%"}} onClick={e => click(e.target)} alt="PeraToken"/>
                        <img src="./assets/img/create.jpg" data-show="./assets/img/portfolio-create.jpg"
                             style={{width: "100%"}} onClick={e => click(e.target)} alt="Create"/>
                        <img src="./assets/img/prime_ventures_builder.jpg"
                             data-show="./assets/img/portfolio-prime_ventures_builder.jpg"
                             style={{width: "100%"}} onClick={e => click(e.target)} alt="Prime Ventures Builder"/>
                        <img src="./assets/img/1wayhi.jpg"
                             data-show="./assets/img/portfolio-1wayhi.jpg"
                             style={{width: "100%"}} onClick={e => click(e.target)} alt="One Way Hi"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio