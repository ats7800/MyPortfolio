import React from "react";
import styled from "styled-components";

// obsolete and overruled:

const Contacts = () => {
  return (
    <Contactstyle
      onClick={(e) =>
        document
          .getElementsByClassName("self-page")[0]
          .scrollIntoView({ behavior: "smooth" })
      }
    >
      <div>
        <span class="material-icons">call</span>
      </div>
      <div>
        <span class="material-icons">mail</span>
      </div>
      <div>
        <span class="material-icons">alternate_email</span>
      </div>
    </Contactstyle>
  );
};

const Contactstyle = styled.div`
  cursor: pointer;

  margin-top: 1.4rem;
  height: fit-content;
  width: 80%;
  padding: 0.8rem 4rem;
  background-color: rgba(0, 0, 0, 0.5);
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
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
    padding: 1ch 1.7ch;
    border-radius: 2rem;
    box-shadow: inset 1px 1px 6px 4px rgb(0 0 0 / 30%);
    letter-spacing: 0.1ch;
    color: #ccc;
    font-weight: inherit;
    text-align: center;
  }
`;

export default Contacts;
