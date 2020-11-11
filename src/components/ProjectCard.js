import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function ProjectCard({ projects }) {
    return (
        <div className="container-fluid portfolio-list">
            {projects.map(item =>{
                return (
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://via.placeholder.com/180x100.png" />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Deployed App</Button>
                        <Button className="btn-margin-l" variant="secondary">Github</Button>
                    </Card.Body>
                </Card>
                )
            })}
        </div>
    )
}