import Projects from '../../sections/portfolio/Projects';
import ProjectsCategories from '../../sections/portfolio/Projects';
import data from './data'
import {useState} from 'react'

import './portfolio.css';

const Portfolio = () => {
  const [projects, setProjects] = useState(data);
  return (
    <section id="portfolio">
      <h2>Recent Projects</h2>
      <p>Check out some of the projects i recently worked on for my clients. Use the buttons to toggle the different categories.</p>
      <div className="container portfolio__container">
        <ProjectsCategories></ProjectsCategories>
        <Projects projects = {projects}></Projects>
      </div>
    </section>
  );
};

export default Portfolio;
