import React from "react";
import styled from "styled-components";
import Achievements from "./Achievements";
import Profiles from "./Profiles";
// import "./styles/home.css";

const Home = () => {
  return (
    <HomeHead id="home">
      <div className="main-home">
        <div className="description">
          <div className="name">Bikash Chamua</div>
          <div className="role">React Developer</div>
          <div className="intro">
            I am a B.Tech 4<sup>th</sup> year{" "}
            <strong>Computer Science and Engineering</strong>
            student from <strong>Assam Engineering College</strong>. My
            interests lie in <strong>data structures and algorithms</strong>,
            and I am passionate about <strong>web development</strong>. I am
            always eager to learn new technologies and expand my skill set to
            stay up-to-date with the latest trends in the field. I am seeking
            opportunities to apply my skills and contribute to meaningful
            projects.
          </div>
          <a
            href="./images/Updated_resume.pdf"
            target="_blank"
            rel="noreferred"
            className="button"
          >
            Resume
          </a>
        </div>
        <div className="image">
          <img src="images/bikash-img1.png" alt="imageHero"></img>
        </div>
      </div>
      <Profiles />
      <Achievements />
    </HomeHead>
    // <div className="home">Home</div>
  );
};

const HomeHead = styled.nav`
  scroll-behaviour: smooth;
  margin: 3rem 0;
  .main-home {
    box-sizing: border-box;
    padding: 0 2rem;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap-reverse;
  }
  .main-home > .description {
  }
  .intro {
    font-size: 18px;
    font-weight: normal;
    text-shadow: none;
    text-align: justify;
  }
  .description {
    width: 40vw;
    height: auto;
    display: flex;
    flex-direction: column;
    font-size: 70px;
    color: ${({ theme }) => theme.colors.text1};
    text-shadow: 1px 1px;
    .role {
      font-family: "Great Vibes", cursive;
      font-weight: 100;
      color: black;
    }
  }
  .image {
    display: flex;
    justify-content: center;
    box-shadow: 0px 0px 30px gray;
    width: fit-content;
    height: fit-content;
    border-radius: 50%;
    overflow: hidden;
    background: ${({ theme }) => theme.colors.bg1};
    color: ${({ theme }) => theme.colors.text2};
    img {
      width: fit-content;
      height: fit-content;
      align-self: center;
    }
  }
  .button {
    width: fit-content;
    height: auto;
    border: 3px solid yellow;
    border-radius: 10px;
    padding: 7px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
  }
  .button: hover {
    background-color: yellow;
    color: black;
    transform: scale(1.01);
    transition: all 0.3s ease-in-out;
    border: 2px solid rgb(232, 234, 255);
    box-shadow: 2px 2px 5px gray;
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text1};
    font-weight: bold;
    font-size: 32px;
    margin-top: 10px;
  }
  strong {
    color: black;
  }

  @media (max-width: 600px) {
    .image {
      height: 350px;
    }
    .description {
      display: flex;
      font-size: 35px;
      align-items: center;
      width: 100vw;
    }
    a {
      font-size: 25px;
    }
  }
`;

export default Home;
