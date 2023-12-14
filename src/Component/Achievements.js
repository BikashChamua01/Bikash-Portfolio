import React from "react";
import styled from "styled-components";
const Achievements = () => {
  return (
    <MainAchievement id="achievements">
      <h2>Achievements</h2>
      <div className="ach-body">
        <div className="ach1 ach">
          <div className="number number1">1</div>
          <div className="ach-content">
            <div className="ach-description ach-description1">
              Got admission into <strong>IIT Gandhinagar</strong> for M.Tech in
              Computer Science and Engineering through the{" "}
              <strong>Early M.Tech Program</strong>.
            </div>
            <a
              href="./images/iitgn.pdf"
              target="_blank"
              rel="noreferrer"
              className="button button1"
            >
              View Credential
            </a>
          </div>
        </div>
        <div className="ach2 ach">
          <div className="number number2">2</div>
          <div className="ach-content">
            <div className="ach-description ach-description2">
              Secured <strong>105</strong> rank among <strong>12000</strong>{" "}
              students in CEE, an entrance exam held for admission into 7
              premier engineering institute of Assam
            </div>
            <a
              href="./images/cee.pdf"
              target="_blank"
              rel="noreferrer"
              className="button button2"
            >
              View Credential
            </a>
          </div>
        </div>
      </div>
    </MainAchievement>
  );
};
const MainAchievement = styled.div`
  scroll-behaviour: smooth;
  box-sizing: border-box;
  margin-top: 200px;
  margin-bottom: 200px;
  .ach-body {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
  h2 {
    text-align: center;
    font-size: 50px;
    margin-bottom: 100px;
  }
  .ach {
    display: flex;
    flex-direction: row;
    width: 600px;
    column-gap: 60px;
    padding-bottom: 50px;
  }
  .ach-content {
    font-weight: 100;
    font-size: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 20px;
  }
  .ach-description {
    text-align: justify;
  }
  .number {
    font-size: 150px;
    color: yellow;
    text-shadow: 2px 2px black;
  }

  @media (max-width: 600px) {
    margin-top: 80px;
    h2 {
      font-size: 35px;
      margin-bottom: 40px;
    }
    .ach {
      width: 90vw;
      padding: 20px 0;
    }
    .ach-content {
      font-size: 20px;
      text-align: justify;
    }
    .number {
      font-size: 60px;
    }
    a {
      font-size: 20px;
    }
  }
`;
export default Achievements;
