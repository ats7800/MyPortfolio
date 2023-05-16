import React from "react";
import styled from "styled-components";

const Sugestions = () => {
  return (
    <Wrapper className="suggestions">
      <div
        onClick={(e) =>
          e.target.classList.contains("show")
            ? e.target.classList.remove("show")
            : e.target.classList.add("show")
        }
      >
        Click Anywhere!
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: auto;
  height: auto;
  .show {
    opacity: 0;
  }
  div {
    opacity: 1;
    transition: 1s all;
    /* transition-delay: 2s; */
    width: 30ch;
    height: auto;
    padding: 1rem 2rem;
    color: black;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(15px);
    border-radius: 10px;
    text-align: center;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    position: absolute;
    transform: translate(-50%, 0);
  }
`;

export default Sugestions;
