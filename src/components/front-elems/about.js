import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <AboutStyle
      onClick={(e) =>
        document
          .getElementsByClassName("self-page")[0]
          .scrollIntoView({ behavior: "smooth" })
      }
    >
      <h4>
        Work in a team based environment on large and innovative projects with
        newer and advanced techonlogies.
      </h4>
    </AboutStyle>
  );
};

const AboutStyle = styled.div`
  cursor: pointer;
  margin-top: 1.4rem;
  height: fit-content;
  width: 80%;
  padding: 1.5rem 4rem;
  background-color: rgba(0, 0, 0, 0.5);
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  border-radius: 2rem;
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.5);
  border: 1px black solid;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: whitesmoke;

  h4 {
    font-size: 1.1rem;
    letter-spacing: 0.1ch;
    /* word-spacing: 0.2ch; */
    color: black;
    font-weight: inherit;
    text-align: justify;
  }
`;

export default About;
