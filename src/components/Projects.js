import React from "react";
import { Container, Row } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
// import icon from "../assets/img/Idle.gif";

export const Projects = () => {
    const projectInfo = [
        {
            title: "CheckPills",
            description: "A mobile app for checking pills powered by computer vision",
            url: "https://github.com/justinchow3010/CheckPill"
        },
        {
            title: "E-commerce Wesbite",
            description: "A wesbite that simualtes a real eshop",
            url: "https://github.com/justinchow3010/Web-Shop"
        },
        {
            title: "Global Weather",
            description: "A wesbite that helps you check the weather globally",
            url: "https://github.com/justinchow3010/GlobalWeatherWeb"
        },
        {
            title: "Task Tracker",
            description: "A mobile app for you to track the status of your own tasks",
            url: "https://github.com/justinchow3010/Task-Tracker"
        },
        {
            title: "Character Generator",
            description: "A NFT character generator",
            url: "https://github.com/justinchow3010/character-generator"
        },
    ]

    return (
        <div id="projects" className="py-5">
            <Container className="text-center">
                <h2>Projects</h2>
                <p className="description">I create websites and mobile applications.</p>
                <Row>
                    {
                        projectInfo.map((item, index) => (
                            <ProjectCard key={index} title={item.title} description={item.description} url={item.url}/>
                        ))
                    }
                    <span className="description">
                    More on GitHub...
                    </span>
                </Row>
            </Container>
        </div>
    )
};