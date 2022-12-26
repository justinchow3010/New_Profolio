import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import Linkedin from "../assets/img/linkedin.svg"
import GitHub from "../assets/img/github.svg"
import Email from "../assets/img/email.svg"

export const Contact = () => {
    return (
        <div id="contact" className="py-5">
            <Container className="text-center">
                <h2>Get In Touch</h2>
                {/* <img src={linkedin} alt="linkedin" className="icon"></img> */}
                <div className="contact d-flex flex-row justify-content-center my-3" target={"_blank"}>
                    <a href="https://www.linkedin.com/in/justin-chow-41638b1bb/">
                        <img src={Linkedin} alt="lnkedin" className="icon" />
                    </a>
                    <a href="https://github.com/justinchow3010" target={"_blank"}>
                        <img src={GitHub} alt="github" className="icon" />
                    </a>
                    <a href="mailto:justinchow3010@gmail.com">
                        <img src={Email} alt="email" className="icon" />
                    </a>
                </div>
            </Container>
        </div>
    )
};