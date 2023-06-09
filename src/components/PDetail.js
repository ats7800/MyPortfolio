import React from "react";
import styled from "styled-components";
import pop from "../assets/images/pop.png";
import { InView } from "react-intersection-observer";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

let index = 0;

const PDetail = () => {
  let animating = false;

  const disappear = (t) => {
    if (animating) return;
    if (!t.classList.contains("Allprojects-detail")) return;
    const projects = document.getElementsByClassName("indi-projects");
    projects[index].classList.remove("show");
    projects[index].classList.add("disappear");
    let i = index;
    let randomI = index;
    do {
      // randomI = parseInt(Math.random() * 7);
      randomI = parseInt((index + 1) % 7);
    } while (randomI == index);
    index = randomI;
    let j = index;
    animating = true;
    setTimeout(() => {
      projects[i].classList.remove("disappear");
      projects[j].classList.add("show");
      const top = Math.random() * 67;
      const left = Math.random() * 67;
      projects[j].style.top = `${top}%`;
      projects[j].style.left = `${left}%`;
      animating = false;
    }, 1000);
  };
  const handleView = (inView, entry) => {
    if (!inView) return;
    const suggestNode = document.getElementsByClassName("project-suggest")[0];
    suggestNode.classList.add("hide-suggest");
    setTimeout(() => {
      suggestNode.style.display = "none";
    }, 3000);
  };
  return (
    <Projects
      className="Allprojects-detail"
      onClick={(e) => disappear(e.target)}
    >
      <InView
        as="div"
        className="suggestions project-suggest"
        onChange={(inView, entry) => handleView(inView, entry)}
      >
        Click Anywhere!
      </InView>
      <a
        className="indi-projects p1 show"
        href="https://www.youtube.com/"
        target="_blank"
      >
        <div className="pro-card">
          <p>Voice to Store Records</p>
          <span>
            A voice recognition web app that lets you update store records with
            voice commands.
          </span>
        </div>
        <img src={pop} className="imagepop" alt="pop" />
      </a>
      <a className="indi-projects p2">
        <div className="pro-card">
          <p>Focus ToDo</p>
          <span>
            A chrome extension app that stores tasks and blocks distracting
            websites while working on those tasks.
          </span>
        </div>
        <img src={pop} className="imagepop" alt="pop" />
      </a>
      <a className="indi-projects p3">
        <div className="pro-card">
          <p>Open TasksDB</p>
          <span>
            an API that lets you perform CRUD operations on tasks, using NodeJS,
            JWT, and Password Hashing.
          </span>
        </div>
        <img src={pop} className="imagepop" alt="pop" />
      </a>
      <a className="indi-projects p4">
        <div className="pro-card">
          <p>Task Manager UI</p>
          <span>A UI tool for managing the task in the TasksDB</span>
        </div>
        <img src={pop} className="imagepop" alt="pop" />
      </a>
      <a className="indi-projects p5">
        <div className="pro-card">
          <p>Phishing Website</p>
          <span>
            A website to demonstrate Phishing Attacks and spread awareness.
          </span>
        </div>
        <img src={pop} className="imagepop" alt="pop" />
      </a>
      <a className="indi-projects p6">
        <div className="pro-card">
          <p>AI Content detector</p>
          <span>
            A web application tool that tells you if an answer is generated by
            the infamous chatbot 'ChatGPT' or is given by a human.
          </span>
        </div>
        <img src={pop} className="imagepop" alt="pop" />
      </a>
      <a className="indi-projects p7">
        <div className="pro-card">
          <p>Tweets Based Stock Predictor</p>
          <span>
            A web app analyzes tweets before a target date for financial
            sentiments and uses with metadata to predict stock movement through
            a trained LSTM model
          </span>
        </div>
        <img src={pop} className="imagepop" alt="pop" />
      </a>
    </Projects>
  );
};

const Projects = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  scroll-snap-align: start;
  display: flex;
  align-items: center;
  justify-content: center;

  .switchForP {
    position: absolute;
    top: 0;
    right: 20px;
    .VisibilityIcon {
      display: none;
    }
  }

  .indi-projects {
    position: absolute;
    height: 30%;
    min-width: 20rem;
    padding: 1%;
    width: 30%;
    color: white;
    display: none;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    cursor: pointer;

    .pro-card {
      transition: 0.3s all ease;
      scale: 0;
      position: absolute;
      height: 100%;
      width: 100%;
      background-color: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(15px);
      border: 1px black solid;
      border-radius: 2rem;
      box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
      p {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        padding: 0;
        margin: 0;
        background-image: linear-gradient(
          90deg,
          #2ca2b4,
          #7f87ff 37%,
          #f65aad 74%,
          #ec3d43
        );
        background-color: white;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 400;
        font-size: 2rem;
        white-space: nowrap;
        letter-spacing: auto;
      }
      span {
        position: absolute;
        bottom: 20%;
        width: 100%;
        box-sizing: border-box;
        padding: 0 2ch;
        text-align: right;
        margin: 0;
        color: black;
        opacity: 0;
        /* letter-spacing: 0ch; */
        transition: 0.5s all ease-in-out;
        transform: translateX(100%);
      }
      overflow: hidden;
    }
    .pro-card:hover {
      transform: translate(-3px, -3px);
      p {
        /* top: 30%; */
      }
      span {
        opacity: 100;
        transform: translateX(0%);
      }
      box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.5);
    }
    img {
      height: 100px;
      display: none;
      scale: 0;
      transform: translate(-50%, -50%);
      transform-origin: 0px 0px;
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 30;
    }
  }

  .indi-projects.show {
    display: block;
    .pro-card {
      animation: showp 300ms linear 0s forwards;
    }
  }

  .indi-projects.disappear {
    display: block;
    .pro-card {
      animation: disp 400ms ease-in 0s forwards;
    }
    img {
      display: block;
      animation: imagepop 200ms ease-in-out 500ms forwards;
    }
  }

  @keyframes showp {
    0% {
      scale: 0;
    }
    100% {
      scale: 1;
    }
  }
  @keyframes disp {
    0% {
      scale: 1;
    }
    100% {
      scale: 0;
    }
  }

  @keyframes imagepop {
    0% {
      opacity: 100;
      scale: 0;
    }

    90% {
      opacity: 100;
      scale: 1;
    }
    100% {
      opacity: 0;
      scale: 1;
    }
  }
`;

export default PDetail;
