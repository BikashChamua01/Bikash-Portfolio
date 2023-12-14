import React from "react";
import styled from "styled-components";

const Card = ({ name, thumbnail, website }) => {
  return (
    <CardHead className="card">
      <div img-heading>
        <img src={thumbnail} alt={`${name}_image`} />
        <h2>{name}</h2>
      </div>
      <a href={website} target="_blank" rel="noreferrer" className="button">
        view
      </a>
    </CardHead>
  );
};
const CardHead = styled.div`
  position: relative;
  padding-bottom: 20px;
  background-color: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    text-align: center;
    margin: 0;
    padding: 0;
  }
  img {
    width: 500px;
    margin: 10px;
    border: 1px solid yellow;
    box-shadow: 2px 2px 30px gray;
    border-radius: 20px;
    transition: all 0.3s ease-in-out;
  }
  img: hover {
    transform: scale(1.007);
    transition: all 0.3s ease-in-out;
  }
  .button {
    border: 3px solid yellow;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    width: 300px;
    cursor: pointer;
  }
  .button: hover {
    background-color: yellow;
    color: black;
    transform: scale(1.01);
    transition: all 0.3s ease-in-out;
    border: 2px solid rgb(232, 234, 255);
    box-shadow: 2px 2px 5px gray;
    cursor: pointer;
  }
  a {
    text-align: center;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text1};
    font-weight: bold;
    font-size: 27px;
  }
  @media (max-width: 600px) {
    img {
      width: 90vw;
    }
  }
`;
export default Card;
