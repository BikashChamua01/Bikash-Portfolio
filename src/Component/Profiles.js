import React from "react";
import styled from "styled-components";
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";

const Profiles = () => {
  return (
    <MainProfile id="profiles">
      <h2>Porfolios</h2>
      <div className="profiles">
        <div className="linkedin">
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/bikash-chamua-738104206/"
            target="_blank"
            className="linkedin logo"
          >
            <FiLinkedin />
          </a>
          <div className="name">LinkedIn</div>
        </div>
        <div className="github">
          <a
            rel="noreferrer"
            href="https://github.com/BikashChamua01"
            target="_blank"
            className="github logo"
          >
            <FiGithub />
          </a>
          <div className="name">GitHub</div>
        </div>
        <div className="leetcode">
          <a
            href="https://leetcode.com/Bikash_Chamua/"
            rel="noreferrer"
            target="_blank"
            className="leetcode logo"
          >
            <img src="./images/leetcode.png" alt="LeetCode logo"></img>
          </a>
          <div className="name">LeetCode</div>
        </div>
        <div className="netlify">
          <a
            href="https://app.netlify.com/teams/bikashchamua537/overview"
            rel="noreferrer"
            target="_blank"
            className="netlify logo"
          >
            <img src="./images/netlify.png" alt="netlify logo"></img>
          </a>
          <div className="name">Netlify</div>
        </div>
        <div className="codechef">
          <a
            href="https://www.codechef.com/users/bikashchamua55"
            rel="noreferrer"
            target="_blank"
            className="codechef logo"
          >
            <img src="./images/codechef.png" alt="codechef logo"></img>
          </a>
          <div className="name">CodeChef</div>
        </div>
      </div>
    </MainProfile>
  );
};
const MainProfile = styled.div`
  background-color: rgba(247, 243, 243, 0.985);
  padding: 1rem 20px;
  margin-top: 200px;
  .profiles {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .name {
    font-size: 30px;
  }
  h2 {
    text-align: center;
    font-size: 50px;
  }
  img {
    width: 90px;
  }
  .codechef > a > img,
  .netlify > a > img {
    width: 120px;
  }
  .netlify > a > img {
      background-color: black;
    }
  .linkedin > a > *,
  .github > a > * {
    font-size: 80px;
  }
  .linkedin > a> * 
  {
    color: blue;
  }
  .github>a>* 
  {
    color: rgb(196, 10, 196);
  }
  .profiles > * {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30vw;
    padding: 50px 0;
  }
  @media (max-width: 600px) {
    padding : 10px;
    margin-top: 100px;
    h2 {
        font-size: 35px;
    }
    .profiles > * {
      padding: 10px;
    }
    .name {
      font-size: 20px;
    }
    .codechef > a > img,
    .netlify > a > img {
      width: 100px;
    }
    .linkedin > a > *,
    .github > a > * {
      font-size: 45px;
    }
    .leetcode > a > img {
        width: 60px;
  }
`;
export default Profiles;
