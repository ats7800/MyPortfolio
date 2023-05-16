import React, { useEffect } from "react";
import styled from "styled-components";
import sun2 from "../assets/images/sun2.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Sugestions from "./sugestions";
import { InView } from "react-intersection-observer";

let initScroll = 0;
let sunPosition = 0;

const changeShadows = (sp) => {
  const elems = document.getElementsByClassName("bio-elem");
  for (let elem of elems) {
    const rect = elem.getBoundingClientRect();
    const centerPercentX = (rect.x + rect.width / 2) / window.innerWidth;
    const centerPercentY = 1;
    console.log(centerPercentX);
    const insetX = (centerPercentX - sp) * 40;
    const insetY = centerPercentY * 20;
    elem.style.boxShadow = `  ${insetX}px ${insetY}px 10px 10px rgb(0 0 0 / 0.5)`;
  }
};

const Self = () => {
  const handleScroll = (e) => {
    // debative
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) return;
    const track = document.getElementsByClassName("bio-track")[0];
    const { deltaX } = e;
    const elems = document.getElementsByClassName("bio-elem");
    const trackLength = elems.length * 28 + elems.length * 5 + 36 * 2;
    const percentSc = (initScroll / trackLength) * 100;
    let i = 0;
    for (let elem of elems) {
      const percentShift =
        50 - (i * 50) / (elems.length + 2) + (50 * percentSc) / 100;
      elem.style.objectPosition = `${percentShift}% 50%`;
      i++;
    }
    initScroll = Math.min(initScroll + deltaX / 20, trackLength / 2);
    initScroll = Math.max(initScroll + deltaX / 20, 0);
    track.style.transform = `translate(${-initScroll}vw, -50%)`;
    changeShadows(sunPosition);
  };

  // setTimeout(() => {
  // handleScroll({ deltaX: 0, deltaY: 0 });
  // }, 0);
  const handleSunDrag = (e) => {
    const handleUp = (e) => {
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("mousemove", handlemove);
    };

    const handlemove = (e) => {
      const sunDial = document.getElementsByClassName("sun")[0];
      sunDial.style.transform = `translateX(${e.clientX - 50}px) `;
      let scWidth = window.innerWidth;
      sunPosition = e.clientX / scWidth;
      changeShadows(sunPosition);
    };

    window.addEventListener("mouseup", handleUp);
    window.addEventListener("mousemove", handlemove);
  };
  const handleView = (inView, entry) => {
    if (!inView) return;
    const suggestNode = document.getElementsByClassName("self-suggest")[0];
    suggestNode.classList.add("hide-suggest");
    setTimeout(() => {
      suggestNode.style.display = "none";
    }, 3000);
    entry.target.classList.add("newShow");
    console.log(entry.target.classList);
    handleScroll({ deltaX: 0, deltaY: 0 });
    setTimeout(() => {
      entry.target.classList.remove("newShow");
    }, 1000);
  };
  return (
    <Wrapper className="self-page">
      <img
        src={sun2}
        alt="pic1"
        className="sun"
        draggable="false"
        onMouseDown={(e) => handleSunDrag(e)}
      />
      <div className="suggestions self-suggest">
        Move the {"Sun"} and Scroll the Track to change Shadow!
      </div>
      <InView
        as="div"
        onChange={(inView, entry) => handleView(inView, entry)}
        className="bio-track"
        onWheel={(e) => handleScroll(e)}
      >
        <div className="bio-elem be6 about-card">
          <div className="be-inner" style={{ textAlign: "justify" }}>
            <div style={{ width: "25ch" }}>
              <span className="gradient-text">I</span> consider myself as a{" "}
              <span className="gradient-text">Free</span> bird that is trying to
              fly thorugh the new{" "}
              <span className="gradient-text">Air-Terrain</span>
              (if that makes any sense) every day. I will hop onto every
              oppurunity of learning something{" "}
              <span className="gradient-text">New</span> , just like this
              website where I have learned so many thing about css,{" "}
              <span className="gradient-text">Learned</span> gatsby, practiced
              and discoverd new things about{" "}
              <span className="gradient-text">React</span>.
            </div>
          </div>
        </div>
        <div className="bio-elem be6 education-card">
          <div className="be-inner">
            <div style={{ width: "25ch" }}>
              <p className="gradient-text">B.Tech</p>
              <p className="black-text"> Computer Science Engineering</p>
              <p className="black-text"> BIT Mesra</p>
              <p className="black-text"> 8.31 cgpa</p>
            </div>
            <div style={{ width: "25ch" }}>
              <p className="gradient-text">Intermediate</p>
              <p className="black-text"> UP Board</p>
              <p className="black-text"> 72.2% </p>
            </div>
            <div style={{ width: "25ch" }}>
              <p className="gradient-text">Highschool</p>
              <p className="black-text"> UP Board</p>
              <p className="black-text"> 85.5%</p>
            </div>
          </div>
        </div>
        <div className="bio-elem be6 contact-card">
          <div className="be-inner">
            <div style={{ width: "25ch" }}>
              <p className="gradient-text">Email</p>
              <p className="black-text"> ats7800@gmail.com</p>
              <p className="black-text"> ashutoshofficial9@gmail.com</p>
            </div>
            <div style={{ width: "25ch" }}>
              <p className="gradient-text">Phone</p>
              <p className="black-text"> 9161296117</p>
            </div>
            <div style={{ width: "25ch" }}>
              <p className="gradient-text">Formal contact</p>
              <div id="socialIcons">
                <GitHubIcon style={{ color: "#111" }} />
                <LinkedInIcon style={{ color: "#0072b1" }} />
              </div>
            </div>
            <div style={{ width: "25ch" }}>
              <p className="gradient-text">Socials</p>
              {/* <p className="black-text"> @ats7800 </p> */}
              <div id="socialIcons">
                <TwitterIcon style={{ color: "#00acee" }} />
                <InstagramIcon style={{ color: "#C13584" }} />
                <FacebookIcon style={{ color: "#3b5998" }} />
              </div>
            </div>
          </div>
        </div>
        <div className="bio-elem be6 hobbies-card">
          <div className="be-inner">
            <p className="gradient-text">Arduino</p>
            <p className="gradient-text">Skating</p>
            <p className="gradient-text">Biking</p>
            <p className="gradient-text">Bike Racing</p>
          </div>
        </div>
      </InView>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  #socialIcons {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 10px 0 0 0;
  }
  img.sun {
    cursor: grab;
    width: 100px;
    height: auto;
    position: absolute;
    transition: 300ms ease-out;
  }
  .be-inner {
    box-sizing: border-box;
    /* background-color: #fff; */
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    padding: 15px;
    height: 100%;
    width: 100%;
    position: relative;
    z-index: -12;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    text-align: right;
    .gradient-text {
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
      font-weight: 400;
      font-size: 1rem;
    }
    .black-text {
      color: #333;
      font-weight: 400;
      font-size: 1rem;
    }
  }
  width: 100vw;
  height: 100vh;
  position: relative;
  scroll-snap-align: start;
  overflow: hidden;
  .bio-track {
    width: fit-content;
    display: flex;
    gap: 5vw;
    align-items: center;
    position: relative;
    top: 50%;
    left: 0;
    transform: translate(-200vmin, -50%);
    padding: 0 36vw;
    transition: 300ms ease-out;
    transition-delay: 0;
  }
  .bio-track.newShow {
    transition: 1s ease-in-out;
    transition-delay: 0ms;
  }
  .bio-elem {
    border: 1px black solid;
    height: 70vh;
    width: 28vw;
    background-position: center;
    border-radius: 20px;
    object-fit: cover;
    background-size: 200px;
    overflow: hidden;
    transition: 300ms all;
  }
`;

export default Self;
