import React from 'react';
import ProjectCard from '../components/ProjectCard'
import Jumbotron from '../components/Jumbotron'
import portProjects from '../projects.json'

export default function Portfolio() {
    const pageHeader = [{ pageTitle: "Portfolio", pageSub:"UX and Graphic Design"}];

    return (
        <>
            <Jumbotron header={pageHeader}/>
            <ProjectCard projects={portProjects}/>
        </>
    );
}