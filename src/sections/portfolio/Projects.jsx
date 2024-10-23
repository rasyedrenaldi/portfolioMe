import Project from './Project';

const Projects = (projects) => {
  return (
    <div className="portfolio__projects">
      {projects.map(project => (
        <Project></Project>
      ))}
    </div>
  );
};

export default Projects;
