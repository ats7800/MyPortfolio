import React from "react";
import styled from "styled-components";

const Hobby = () => {
  return (
    <HobbyStyle
      onClick={(e) =>
        document
          .getElementsByClassName("self-page")[0]
          .scrollIntoView({ behavior: "smooth" })
      }
    >
      <h4>Arduino and IoT.</h4>
    </HobbyStyle>
  );
};

const HobbyStyle = styled.div`
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

  h4 {
    font-size: 1.1rem;
    letter-spacing: 0.1ch;
    /* word-spacing: 0.2ch; */
    color: black;
    font-weight: inherit;
    text-align: justify;
  }
`;

export default Hobby;
