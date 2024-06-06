import React, { useState } from "react";

import { useInView } from "react-intersection-observer";
import ProjectsData from "../../Data/ProjectsData";
import ProjectItem from "./projectItem";



const Projects = () => {
  const [pageSection, setPageSection] = useState("");

  const [ref, inView] = useInView({
    threshold: 0.8,
  });

  if (inView) {
    setPageSection("projectsItem");
  }

  const projectsArray = ProjectsData.map((projectItem) => {
    return (
      <ProjectItem
        projectHeader={projectItem.projectHeader}
        projectDescription={projectItem.projectDescription}
        projectGif={projectItem.projectGif}
        projectLink={projectItem.link}
        projectGit={projectItem.github}
      />
    );
  });

  return (
    <>
      <div className="ProjectsWrapper max-w-[1144px] w-[82%] mx-auto" id="projects" ref={ref}>
        <div className="ProjectsBox">
          
            <div className="ProjectsHeader">My Projects</div>
         

          <div className="AllProjects">{projectsArray}</div>
        </div>
      </div>
      {/* <Portfolio /> */}
    </>
  );
};

export default Projects;
