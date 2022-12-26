import { Container, Row, Col } from "react-bootstrap";
import React from "react";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={12} className="text-center">
                        Be what you want to be.
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
