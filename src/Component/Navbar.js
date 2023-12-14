import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
// import "./styles/Navbar.css";
const Navbar = () => {
  const [active, setActive] = useState("home");

  return (
    <MainNav>
      <div className="nav-header">
        <HashLink
          to="../#home"
          className={active === "home" ? "active" : "nav-element"}
          onClick={() => {
            setActive("home");
          }}
        >
          Home
        </HashLink>
        <HashLink
          to="../#profiles"
          className={active === "profiles" ? "active" : "nav-element"}
          onClick={() => {
            setActive("profiles");
          }}
        >
          Portfolios
        </HashLink>
        <HashLink
          to="../#achievements"
          className={active === "achievements" ? "active" : "nav-element"}
          onClick={() => {
            setActive("achievements");
          }}
        >
          Achievements
        </HashLink>
        <NavLink
          to="projects"
          className={active === "projects" ? "active" : "nav-element"}
          onClick={() => {
            setActive("projects");
          }}
        >
          Projects
        </NavLink>
      </div>
    </MainNav>
  );
};

const MainNav = styled.nav`
  z-index: 10;
  position: sticky;
  top: 0;
  box-sizing: border-box;
  font-size: 2rem;
  text-decoration: none;
  background-color: white;
  .nav-header {
    position: relative;
    height: auto;
    display: grid;
    grid-template-columns: auto auto auto auto;
    align-items: center;
    justify-items: center;
    background-color: gray;
    padding: 1.5rem;
    margin-bottom: 10px;
  }

  .active {
    color: black;
    text-decoration: none;
  }
  .nav-element {
    text-decoration: none;
    color: white;
  }
  @media (max-width: 600px) {
    border: none;
    padding-top: 20px;
    .nav-header {
      width: 94%;
      left: 3%;
      border-radius: 10px;
      height: fit-content;
      font-size: 12px;
      padding: 0.5rem;
      color: white;
      background-color: pink;
    }
    .active {
      color: black;
      text-decoration: none;
    }
    .nav-element {
      color: white;
    }
  }
`;
export default Navbar;
