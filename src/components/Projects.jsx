import ProjectCard from './ProjectCard';
import projectsData from "../utls/projectsData"


const Projects = () => {
    return (
        <div className="py-10 text-[#D1F26D]">
            <div className="mx-auto max-w-4xl text-center font-bold mb-12">
        <h2 className="text-3xl mb-2">PROJECTS</h2>
        <p className="text-lg">A Glimpse into My Development Journey!</p>
      </div>
        <div className="grid lg:grid-cols-2 px-10 justify-center gap-6">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    );
};

export default Projects;