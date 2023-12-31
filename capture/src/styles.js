import styled from "styled-components";
import { motion } from "framer-motion";

export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2; // bo wawy aw line bkaweta psht rasmy AboutUs
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;

export const Image = styled.div`
  z-index: 2; // bo wawy aw line bkaweta psht rasmy AboutUs
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover; // Bo awaya resmaka Comprise nakat w prr be pree Shwenaka Bet.
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;

//export default >> Ama Lera kar nakat labar Away ema damanawet zyatr la yak stayl Export bkayn
// we hich function ekman nya ta Exporty bkayn.
