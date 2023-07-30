import React from "react";
//Import Icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
//Import Imgae
import home2 from "../img/home2.png";
//Styled
import { About, Description, Image } from "../styles";
import { styled } from "styled-components";

const ServicesSection = () => {
  return (
    <Services>
      <Description>
        <h2>
          High <span>quality</span>services.
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="clock icon" />
              <h2>Efficient</h2>
            </div>
            <p>Lorem ipsum dolar sit amet.</p>
          </Card>

          <Card>
            <div className="icon">
              <img src={teamwork} alt="clock icon" />
              <h2>Teamwork</h2>
            </div>
            <p>Lorem ipsum dolar sit amet.</p>
          </Card>

          <Card>
            <div className="icon">
              <img src={diaphragm} alt="clock icon" />
              <h2>Diaphragm</h2>
            </div>
            <p>Lorem ipsum dolar sit amet.</p>
          </Card>

          <Card>
            <div className="icon">
              <img src={money} alt="clock icon" />
              <h2>Affordable</h2>
            </div>
            <p>Lorem ipsum dolar sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="Camera" />
      </Image>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-left: 1rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
    margin-left: 1rem;
    background: white;
    color: black;
    padding: 1rem;
  }
  }
  
`;
export default ServicesSection;
