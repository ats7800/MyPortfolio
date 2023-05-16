import React from "react";
import styled from "styled-components";
import { InView } from "react-intersection-observer";

const SkillDetail = () => {
  const shake = (t) => {
    if (t.classList.contains("skillet") || t.classList.contains("skilletp")) {
      t.classList.add("shake");
      setTimeout(() => {
        t.classList.remove("shake");
      }, 500);
    } else {
      for (let x of t.children) {
        if (x.classList.contains("skillet")) {
          x.click();
        }
      }
    }
  };
  const fromLeft = (inView) => {
    const elems = document.querySelectorAll(".skillet");
    elems.forEach((elem) => {
      if (inView) {
        elem.classList.add("show");
        const suggestNode = document.getElementsByClassName("skill-suggest")[0];
        suggestNode.classList.add("hide-suggest");
        setTimeout(() => {
          suggestNode.style.display = "none";
        }, 3000);
      } else elem.classList.remove("show");
    });
  };
  return (
    <SkillStyle onClick={(e) => shake(e.target)} className="skillspage">
      <div className="suggestions skill-suggest">Click Anywhere!</div>
      <div className="skillet s1">
        <p className="skilletp">ReactJS</p>
      </div>
      <InView
        as="div"
        className="skillet s2"
        onChange={(inView, entry) => fromLeft(inView)}
      >
        <p className="skilletp">NodeJS</p>
      </InView>
      <div className="skillet s3">
        <p className="skilletp">
          SQL/
          <br />
          NoSQL
        </p>
      </div>
      <div className="skillet s1">
        <p className="skilletp">
          Machine
          <br />
          Learning
        </p>
      </div>
      <div className="skillet s2">
        <p className="skilletp">
          Deep
          <br />
          Learning
        </p>
      </div>
      <div className="skillet s3">
        <p className="skilletp">Python</p>
      </div>
    </SkillStyle>
  );
};

const SkillStyle = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  scroll-snap-align: start;
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-evenly;
  align-items: center;
  justify-items: center;
  .skillet {
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      width: fit-content;
      background-image: linear-gradient(
        90deg,
        #2ca2b4,
        #7f87ff 37%,
        #f65aad 74%,
        #ec3d43
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: 200;
      font-weight: 400;
      font-size: 2rem;
    }
    letter-spacing: 0.3ch;

    height: 35%;
    padding: 1.5rem 2rem;
    min-width: 15ch;
    background-color: rgba(0, 0, 0, 0.1);
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(15px);
    border-radius: 2rem;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: whitesmoke;
    opacity: 0;
    transition: all 0.3s;
    cursor: pointer;
    border: 1px solid black;
  }

  .skillet:hover {
    transition: 1s;
    scale: 1.03;
    letter-spacing: 1.3ch;
    box-shadow: 0px 10px 20px 2px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }
  .shake {
    /* animation: shake 500ms ease-out none; */
    animation: shake 500ms cubic-bezier(0, 0.9, 1, 1) none;
  }

  .s1 {
    transform: translateX(-20vw);
  }
  .s2 {
    transform: translateX(-50vw);
  }
  .s3 {
    transform: translateX(-75vw);
  }
  .show {
    /* animation: skillAnime 2s ease forwards; */
    transform: translateX(0);
    opacity: 1;
    transition: all 2s;
  }
  @keyframes shake {
    10% {
      translate: 10px 0;
    }
    20% {
      translate: -9px 0;
    }
    30% {
      translate: 8px 0;
    }
    40% {
      translate: -7px 0;
    }
    50% {
      translate: 6px 0;
    }
    60% {
      translate: -5px 0;
    }
    70% {
      translate: 4px 0;
    }
    80% {
      translate: -3px 0;
    }
    90% {
      translate: 2px 0;
    }
    100% {
      translate: 0px 0;
    }
  }
  @keyframes skillAnime {
    0% {
      opacity: 0;
      filter: blur(5px);
    }
    50% {
      opacity: 100%;
      filter: blur(0);
    }
    70% {
      transform: translateX(0) scale(1);
    }
    80% {
      transform: translateX(0%) scale(1.01);
    }
    90% {
      transform: translateX(0%) scale(0.993);
    }
    100% {
      transform: translateX(0) scale(1);
      opacity: 100%;
      filter: blur(0);
    }
  }
`;

export default SkillDetail;
