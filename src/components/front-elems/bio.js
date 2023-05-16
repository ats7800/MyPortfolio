import React from "react";
import styled from "styled-components";
import { bio } from "./bio.module.css";

const Bio = () => {
  return (
    <Wrapper
      className={bio}
      onClick={(e) =>
        document
          .getElementsByClassName("self-page")[0]
          .scrollIntoView({ behavior: "smooth" })
      }
    >
      <div className="Main">
        <div className="profile-photo"></div>
        <div className="Bio-Data">
          <h2>Ashutosh Singh</h2>
          <h3>B.Tech Computer Science & Engineering</h3>
        </div>
      </div>
      {/* <div className="about">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quis
        unde ut perferendis enim iste, velit exercitationem id incidunt eaque
        quam sapiente voluptates assumenda vel accusamus porro illo expedita
        officia.
      </div> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* margin-top: 3rem; */
  cursor: pointer;
  height: fit-content;
  width: 80%;
  padding: 1rem 4rem;
  background-color: rgba(0, 0, 0, 0.5);
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  border: 1px black solid;
  border-radius: 2rem;
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.5);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: whitesmoke;
  font-size: 2.18rem;
  .profile-photo {
    border-radius: 50rem;
    height: 12rem;
    width: 12rem;
    background-image: url("profile.jpeg");
    background-size: cover;
    background-position: 30% 0%;
    background-repeat: no-repeat;
    box-shadow: inset 0px 0px 6px 3px rgba(0, 0, 0, 0.5);
    /* background-color: red; */
  }
  .Bio-Data {
    text-align: right;
    h2 {
      font-weight: 200;
      letter-spacing: 0.1ch;
      color: black;
    }
    h3 {
      letter-spacing: 0.13ch;
      font-weight: 100;
      margin-top: 1ch;
      font-size: 1.8rem;
      color: #000;
    }
    h4 {
      margin-left: 0.8ch;
      letter-spacing: 0.13ch;
      font-weight: 100;
      font-size: 1rem;
      color: #222;
      display: inline;
    }
  }
  .about {
    text-align: justify;
    word-spacing: 0.5ch;
    letter-spacing: 0.1ch;
    margin-top: 2rem;
    /* justify-content: center; */
    font-size: 1rem;
    font-weight: 100;
    color: whitesmoke;
  }
  .Main {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export default Bio;
