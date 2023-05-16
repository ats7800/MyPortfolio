import * as React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import Bio from "../components/front-elems/bio";
import About from "../components/front-elems/about";
import Skills from "../components/front-elems/skills";
import Projects from "../components/front-elems/projects";
import Hobby from "../components/front-elems/hobbies";
import SkillDetail from "../components/SkillDetail";
import PDetail from "../components/PDetail";
import Self from "../components/self";

export default function Home() {
  return (
    <Layout>
      <HomeBody>
        <div className="front">
          <Bio></Bio>
          <About></About>
          <Skills></Skills>
          <Projects></Projects>
          <Hobby></Hobby>
        </div>
        <SkillDetail></SkillDetail>
        <PDetail></PDetail>
        <Self></Self>
      </HomeBody>
    </Layout>
  );
}

const HomeBody = styled.div`
  height: 100vh;
  width: 100vw;
  .front {
    scroll-snap-align: start;
    font-weight: 300;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
`;
