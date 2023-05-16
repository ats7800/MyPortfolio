import React from "react";
import styled from "styled-components";

const Skill = () => {
  return (
    <SkillStyle
      onClick={(e) =>
        document
          .getElementsByClassName("skillspage")[0]
          .scrollIntoView({ behavior: "smooth" })
      }
    >
      <div className="skillets">ReactJS</div>
      <div className="skillets">NodeJS</div>
      <div className="skillets">SQL</div>
      <div className="skillets">C/C++</div>
      <div className="skillets">Java</div>
      <div className="skillets">Javascript</div>
    </SkillStyle>
  );
};

const SkillStyle = styled.div`
  cursor: pointer;
  margin-top: 1.4rem;
  height: fit-content;
  width: 80%;
  padding: 1.5rem 4rem;
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

  .skillets {
    padding: 1.3ch 2ch;
    border-radius: 2rem;
    box-shadow: inset 1px 1px 6px 4px rgb(0 0 0 / 30%);
    letter-spacing: 0.1ch;
    font-weight: inherit;
    color: black;
    text-align: justify;
  }
`;

export default Skill;
