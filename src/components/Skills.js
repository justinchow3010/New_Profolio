import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProgressBar from "./ProgressBar";
export const Skills = () => {
    const skillInfo = [
        {
            title: "JavaScript",
            percentage: "80"
        },
        {
            title: "React.js",
            percentage: "80"
        },
        {
            title: "Python",
            percentage: "80"
        },
        {
            title: "Java",
            percentage: "65"
        },
        {
            title: "SQL",
            percentage: "70"
        },
        {
            title: "BootStrap",
            percentage: "60"
        },
        
    ]

    return (
        <div id="skills" className="py-5 d-flex">
            <Container className="text-center">
                <h2>My Skills</h2>
                <p className="description">Main things that I have learnt so far.</p>
                {/* <img src={reactLogo} alt="react" className="skill-logo"></img> */}
                <Row>
                    {
                        skillInfo.map((item, idx) => (
                            <Col size={12} sm={6} md={6} className="my-3 d-flex justify-content-center" key={idx}>
                                <Row>
                                    <Col size={12} sm={6} md={6} className="skill-name">{item.title}</Col>
                                    <Col size={12} sm={6} md={6}>
                                        <ProgressBar
                                            completed={item.percentage}
                                        />
                                    </Col>
                                </Row>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    )
};