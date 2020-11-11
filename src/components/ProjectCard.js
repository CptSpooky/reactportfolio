import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function ProjectCard({ projects }) {
    return (
        <div className="container-fluid portfolio-list">
            {projects.map(item =>{
                return (
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={item.image} />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>{item.description}</Card.Text>
                        <Button variant="primary" href={item.deployed} target="blank">Deployed App</Button>
                        <Button className="btn-margin-l" variant="secondary" href={item.github} target="blank">Github</Button>
                    </Card.Body>
                </Card>
                )
            })}
        </div>
    )
}