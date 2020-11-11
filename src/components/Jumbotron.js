import React from 'react'
import Heroimg from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';


export default function Jumbotron() {
    return (
        <Heroimg fluid>
            <Container>
            <h1>Fluid jumbotron</h1>
            <p>
                This is a modified jumbotron that occupies the entire horizontal space of
                its parent.
            </p>
            </Container>
        </Heroimg>
    )
}