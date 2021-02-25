import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { IconContext } from "react-icons";

function Contact() {
    return (
        <div id="contactSection" className="contactSection">
            <Container>
                <Row md="auto">
                    <Col>
                        <IconContext.Provider value={{ color: "white", size: "3em", className: "global-class-name" }}>
                            <div>
                                <FaPhoneAlt />
                            </div>
                        </IconContext.Provider>
                        <br />
                        <div>
                            <p>047 2238699 / 698 </p>
                            <p>077 4567561</p>
                            <p>071 5896342</p>
                        </div>

                    </Col>

                    <Col>
                        <IconContext.Provider value={{ color: "white", size: "3em", className: "global-class-name" }}>
                            <div>
                                <FaMapMarkerAlt />
                            </div>
                        </IconContext.Provider>
                        <br />
                        <div>
                            <p>Onal BookStore</p>
                            <p>Hambantota Road</p>
                            <p>Debarawewa</p>
                            <p>Tissamaharama</p>
                            <p>Sri Lanka</p>
                        </div>

                    </Col>


                    <Col>
                        <IconContext.Provider value={{ color: "white", size: "3em", className: "global-class-name" }}>
                            <div>
                                <FaEnvelope />
                            </div>
                        </IconContext.Provider>
                        <br />
                        <div>
                            <p>info@onalbookstore.com</p>
                            <p>sales@onalbookstore.com</p>
                            <p>onalbookstore@gmail.com</p>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Contact