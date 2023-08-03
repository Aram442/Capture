import React from "react";
import Toggle from "./Toggle";
//Import Styled
import styled from "styled-components";
import { motion, LayoutGroup } from "framer-motion";
import { About } from "../styles";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any questions?<span>FAQ</span>
      </h2>
      <LayoutGroup>
        <Toggle title={"How Do I Start?"}>
          <div className="answer">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fuga
              voluptatem cum labore officiis commodi doloribus numquam magni,
              rem atque molestiae eius aliquid, quod dolorum dicta quo quas nam!
              Provident?
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fuga
              voluptatem cum labore officiis commodi doloribus numquam magni,
              rem atque molestiae eius aliquid, quod dolorum dicta quo quas nam!
              Provident?
            </p>
          </div>
        </Toggle>
        <Toggle title={"Diferrent Payment Methods"}>
          <div className="answer">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fuga
              voluptatem cum labore officiis commodi doloribus numquam magni,
              rem atque molestiae eius aliquid, quod dolorum dicta quo quas nam!
              Provident?
            </p>
          </div>
        </Toggle>
        <Toggle title={"What Product Do You Offer?"}>
          <div className="answer">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fuga
              voluptatem cum labore officiis commodi doloribus numquam magni,
              rem atque molestiae eius aliquid, quod dolorum dicta quo quas nam!
              Provident?
            </p>
          </div>
        </Toggle>
        </LayoutGroup>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100% auto;
  }
  .qustion {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;
export default FaqSection;
