import React from "react";
import styled from "styled-components";

const Projects = () => {
  return (
    <ProjectStyle
      onClick={(e) =>
        document
          .getElementsByClassName("Allprojects-detail")[0]
          .scrollIntoView({ behavior: "smooth" })
      }
    >
      <div>Voice “Recorder”</div>
      <div>Focus ToDo</div>
      <div>Open TasksDB</div>
      <div>Task Manager UI</div>
      <div>Phishing Website</div>
    </ProjectStyle>
  );
};

const ProjectStyle = styled.div`
  cursor: pointer;
  margin-top: 1.4rem;
  height: fit-content;
  width: 80%;
  padding: 1.3rem 4rem;
  background-color: rgba(0, 0, 0, 0.5);
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  border: 1px black solid;
  border-radius: 2rem;
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.5);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: whitesmoke;

  display: flex;
  justify-content: space-around;
  align-items: center;

  div {
    font-size: 1rem;
    padding: 1.3ch 2ch;
    border-radius: 2rem;
    box-shadow: inset 1px 1px 6px 4px rgb(0 0 0 / 30%);
    letter-spacing: 0.1ch;
    font-weight: inherit;
    color: black;
    text-align: center;
  }
`;

export default Projects;
