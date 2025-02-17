import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <section className="hero bg-dark text-white d-flex align-items-center vh-100">
      <div className="container text-center">
        {/* Animated Heading */}
        <motion.h1
          className="display-4 fw-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm <span className="text-primary">Temitope Oluwagbemi</span>
        </motion.h1>

        {/* Typewriter Effect for Dynamic Text */}
        <motion.h3
          className="mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <Typewriter
            options={{
              strings: ["Cloud & DevOps Engineer", "Full-Stack Developer", "AWS Solutions Architect"],
              autoStart: true,
              loop: true,
            }}
          />
        </motion.h3>

        {/* Call to Action Buttons */}
        <motion.div
          className="mt-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <Link to="projects" smooth={true} duration={500} className="btn btn-primary btn-lg mx-2">
            View My Work
          </Link>
          <Link to="contact" smooth={true} duration={500} className="btn btn-outline-light btn-lg mx-2">
            Contact Me
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
