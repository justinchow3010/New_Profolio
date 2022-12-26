import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url}) => {
    return (
        <Col size={12} sm={6} md={4} className="my-3" onClick={() => {window.open(url, '_blank', 'noopener,noreferrer');}}>
            <div className="d-inline-flex flex-row project-card w-100 h-100">
                <div className="p-2">
                    <img src={imgUrl} />
                </div>
                <div className="project-info">
                    <h5>{title}</h5>
                    <span className="description">{description}</span>
                </div>
            </div>
        </Col>
    )
};