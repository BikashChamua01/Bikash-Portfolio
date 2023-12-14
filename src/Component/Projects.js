import React from "react";
import Card from "./ProjectCard";
import styled from "styled-components";
import data from "../ProjectData";
const Projects = () => {
  return (
    <ProjectsHead>
      <div className="cards">
        {data.map((el) => {
          return (
            <Card
              key={el.id}
              name={el.name}
              thumbnail={el.thumbnail}
              website={el.website}
            />
          );
        })}
      </div>
    </ProjectsHead>
  );
};
const ProjectsHead = styled.div`
  margin-top: 4vh;
  .cards {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    row-gap: 15px;
  }
`;

export default Projects;
