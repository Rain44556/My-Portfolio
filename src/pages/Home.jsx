import React from 'react';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Contact from '../components/Contact';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Projects from '../components/Projects';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <AboutMe></AboutMe>
            <Education></Education>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;