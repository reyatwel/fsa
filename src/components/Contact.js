const Contact = () => {
    return (
        <>
            <div className="rey-padding-32 rey-content rey-text-grey" id="contact" style={{marginBottom: "64px"}}>
                <h2>Contact Me</h2>
                <hr className="rey-opacity"/>
                <div className="rey-section">
                    <p><i className="fa fa-map-marker fa-fw rey-xxlarge rey-margin-right"/> LD91-C, Lubas
                        Proper, La Trinidad, Benguet, Philippines</p>
                    <p><i className="fa fa-phone fa-fw rey-xxlarge rey-margin-right"/> Phone: +63 (947)
                        367-7436 / +63 (927) 290-0665</p>
                    <p><i className="fa fa-envelope fa-fw rey-xxlarge rey-margin-right"> </i> Email:
                        creators@gmx.com</p>
                </div>
                <img src="./assets/img/map.jpg" className="rey-image rey-greyscale"
                     style={{width: "100%", margin: "32px 0"}} alt=""/>
                <p>Lets get in touch. Send me a message:</p>
                <form action="https://formsubmit.co/creators@gmx.com" method="POST">
                    <p><label>
                        <input type="text" name="name" className="rey-input rey-padding-16 rey-border"
                               placeholder="Full Name" required/>
                    </label></p>
                    <p><label>
                        <input type="email" name="email" className="rey-input rey-padding-16 rey-border"
                               placeholder="Email Address" required/>
                    </label></p>
                    <p><label>
                        <input type="text" name="subject" className="rey-input rey-padding-16 rey-border"
                               placeholder="Subject" required/>
                    </label></p>
                    <p><label>
                        <textarea name="message" className="rey-input rey-padding-16 rey-border"
                                  placeholder="Your Message" rows="10" required/>
                    </label></p>
                    <p>
                        <button className="rey-button rey-light-grey rey-padding-large" type="submit">
                            <i className="fa fa-paper-plane"/> SEND MESSAGE
                        </button>
                    </p>
                </form>
            </div>
        </>
    )
}

export default Contact