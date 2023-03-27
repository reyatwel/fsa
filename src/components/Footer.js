const Footer = () => {
    return (
        <>
            <footer className="rey-container rey-padding-64 rey-light-grey rey-center rey-opacity rey-xlarge"
                    style={{margin: "-24px"}}>
                <a href="https://www.facebook.com/reymacutoatwel">
                    <i className="fa fa-facebook-official rey-hover-opacity"/></a>
                <a href="https://www.instagram.com/reymacutoatwel">
                    <i className="fa fa-instagram rey-hover-opacity"/></a>
                <p className="rey-medium">&copy;
                    <script>document.write(/\d{4}/.exec(Date())[0])</script>
                    Rey Atwel - Portfolio
                </p>
            </footer>
        </>
    )
}

export default Footer