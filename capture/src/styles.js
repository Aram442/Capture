import styled from "styled-components";
export const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

export const Image = styled.div`
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
