import React from "react";
import { Container } from "react-bootstrap";
import Typed from 'react-typed';
// import icon from "../assets/img/Idle.gif";

export const Banner = () => {
    return (
        <div className="banner" id="home">
            <Container className="text-center banner-text">
                <h1>Justin Chow</h1>
                <h3>
                    <Typed
                        strings={[
                            'Software Engineer',
                            'Creator',
                            'Team Player']}
                        typeSpeed={150}
                        backSpeed={100}
                        loop >
                    </Typed>
                </h3>
                <p className="description">A software engineer from Hong Kong. I major in information engineering and minor in computer science at CUHK. Passionate about learning and changing things around. Welcome to my playground to learn more about me.</p>
            </Container>

        </div>
    )
};