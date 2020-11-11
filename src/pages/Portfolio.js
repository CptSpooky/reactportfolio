import React from 'react';
import ProjectCard from '../components/ProjectCard'
import Jumbotron from '../components/Jumbotron'
import portProjects from '../projects.json'

export default function Portfolio() {

    return (
        <>
        <Jumbotron />
        <ProjectCard projects={portProjects}/>
        </>
    );
}