import React from 'react'
import Heroimg from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';


export default function Jumbotron({ header }) {
    return (
        <Heroimg fluid>
            <Container>
            <h1>{header[0].pageTitle}</h1>
            <h2>{header[0].pageSub}</h2>
            </Container>
        </Heroimg>
    )
}