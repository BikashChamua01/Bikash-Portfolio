import React from "react";
import styled from "styled-components";
import { FiGithub, FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";

const Footer = () => {
  return (
    <MainFooter>
      <div className="social-media">
        <div className="icon facebook-icon">
          <a
            href="https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C589460569855%7Cb%7Cfacebook%7C&placement=&creative=589460569855&keyword=facebook&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696220912%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-592856129%26loc_physical_ms%3D9182562%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQiAyeWrBhDDARIsAGP1mWSlU2hVIaCqyI4mv7Kz45CCrRcpfg3zQqrZ6d21NHzHBGSePGsdhqgaAk3kEALw_wcB"
            target="_blank"
            rel="noreferrer"
          >
            <FiFacebook />
          </a>
        </div>
        <div className="icon facebook-icon">
          <a
            href="https://github.com/BikashChamua01"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub />
          </a>
        </div>
      </div>
      <div className="contact">
        <div className="phone">
          <div className="icon phone-icon">
            <FiPhone />
          </div>
          <div className="text phone-text">+91 9101658375</div>
        </div>
        <div className="mail">
          <div className="icon mail-icon">
            <FiMail />
          </div>
          <div className="text mail-text">bikashchamua537@gmail.com</div>
        </div>
      </div>
    </MainFooter>
  );
};

const MainFooter = styled.div`
  margin-top: 200px;
  background: linear-gradient(135deg, black, white);
  display: flex;
  padding: 40px;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  row-gap: 20px;
  .contact,
  .social-media {
    color: white;
    font-size: 25px;
    ${"" /* width: 50%; */}
  }
  .social-media {
    display: flex;
    column-gap: 5vw;
    align-items: center;
    justify-content: space-evenly;
  }
  .contact > * {
    display: flex;
    column-gap: 10px;
  }
  .contact > div > .icon {
    color: yellow;
  }
  .social-media > div > a > * {
    font-size: 60px;
    color: yellow;
    transition: all 0.2s ease-in-out;
  }
  .social-media>div>a>*: hover {
    color: purple;
    transform: translateY(-20%);
    transition: all 0.2s ease-in-out;
  }
  @media (max-width: 600px) {
    width: 99vw;
    overflow: hidden;
    font-size: 17px;
    .contact,
    .social-media {
      color: white;
      font-size: 25px;
      width: 100%;
    }
    .contact {
      font-size: 16px;
    }
  }
`;
export default Footer;
