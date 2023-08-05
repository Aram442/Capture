import React, { useEffect, useState } from "react";
import Styled, { createGlobalStyle, styled } from "styled-components";
import { MovieState } from "../MovieState";
import { useLocation } from "react-router-dom";
//Animation
import { motion } from "framer-motion"; //component nya boya la naw {} importy dakayn
import { animation, pageAnimation } from "../animation";

const MovieDetail = () => {
  let { pathname } = useLocation();

  //useState
  const [movies, setMovies] = useState(MovieState); //MovieState = Array
  const [movie, setMovie] = useState([]); // movie = Empty Array

  //useEffect
  useEffect(() => {
    const currentMovie = movies?.filter(
      // ? = if Exist do the work if not did not anything
      (stateMovie) => stateMovie.url === pathname //stateMovie = variable
    );
    setMovie(currentMovie);
  }, [movies, pathname]);

  return (
    <>
      {movie && (
        <Detail
          exit="exit"
          variants={pageAnimation}
          initial="hidden"
          animate="show"
        >
          <HeadLine>
            <h2>{movie[0]?.title}</h2>
            <img src={movie[0]?.mainImg} alt="movie" />
          </HeadLine>
          <Awards>
            {movie[0]?.awards?.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={movie[0]?.secondaryImg} alt="movie" />
          </ImageDisplay>
        </Detail>
      )}
    </>
  );
};

const Detail = Styled(motion.div)`
    color: white;
`;
const HeadLine = Styled.div`
min-height: 90vh;
padding-top: 5vh;
position: relative;
h2 {
    positoin: absolute:
    top: 10%;
    left: 50%;
    color:#fff
    transform: translate(-50% , -10%);
}
img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
}
`;
const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1500px) {
   display : block;
margin: 2rem 2rem;
  }
`;

const AwardStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;

const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;
// Award Coponent
const Award = ({ title, description, key }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line">
        <p>{description}</p>
      </div>
    </AwardStyle>
  );
};
export default MovieDetail;
