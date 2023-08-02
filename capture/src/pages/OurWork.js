import React from "react";
import Styled, { styled } from "styled-components";
import { Link } from "react-router-dom";

// Import Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

//Animation
import { motion } from "framer-motion"; //component nya boya la naw {} importy dakayn
import { animation, pageAnimation } from "../animation";

const OurWork = () => {
  return (
    <Work
      style={{ background: "#fff" }}
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Movie>
        <h2>The Athlete</h2>
        <div className="line">
          <Link to="/work/the-athlete">
            {/* Note: kode Js nya boya la naw {} daynaney */}
            <img src={athlete} alt="athlete" />
          </Link>
        </div>
      </Movie>

      <Movie>
        <h2>The Racer</h2>
        <div className="line">
          <Link to="/work/the-racer">
            <img src={theracer} alt="theracer" />
          </Link>
        </div>
      </Movie>

      <Movie>
        <h2>Good Time</h2>
        <div className="line">
          <Link to="/work/good-times">
            <img src={goodtimes} alt="goodtimes" />
          </Link>
        </div>
      </Movie>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;
const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
export default OurWork;
