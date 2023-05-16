import React from "react";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></link>
      {children}
    </>
  );
};

export default Layout;
