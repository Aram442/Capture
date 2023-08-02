import React from "react";
//Page Compnents
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
//Animation
import { motion } from "framer-motion"; //component nya boya la naw {} importy dakayn
import { animation, pageAnimation } from "../animation";

const AboutUs = () => {
  return (
    <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show">
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </motion.div>
  );
};
export default AboutUs;
