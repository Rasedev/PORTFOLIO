import React from "react";
import styled from "styled-components";
import { BiLinkExternal } from "react-icons/bi";
import { AiOutlineGithub } from "react-icons/ai";
import "../Banner/banner.css";

function ProjectItem({
  projectHeader,
  projectDescription,
  projectGif,
  projectLink,
  projectGit,
}) {
  return (
    <>
      <div className="ProjectBox ">
   
          <div className="ProjectHeader">{projectHeader}</div>
      

        <div className="ProjectBody">
          <div className="ProjectDescription ">
            {projectDescription}

            <div className="LinksBox ">
              <div
                className="StyledLink"
                href={projectLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <a className="LinkIcon">
                  {" "}
                  <BiLinkExternal />
                </a>
              </div>
              <div
                className="anLink"
                href={projectGit}
                target="_blank"
                rel="noopener noreferrer"
              >
                <a className="GitIcon">
                  <AiOutlineGithub />
                </a>
              </div>
            </div>
          </div>
          <div className="ProjectPhoneImg">
            <ProjectGif
              projectGif={projectGif}           
            />
            
          </div>
        </div>
      </div>

    
    </>
  );
}

export default ProjectItem;

const ProjectGif = styled.div`
position: absolute;
  top: 10%;
  transform: translateX(-47%);
  left: 47%;
  height: 78%;
  width: 84%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: ${({ projectGif }) =>projectGif ? `url(${projectGif})` : null};
`;
 