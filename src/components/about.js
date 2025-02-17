import React from 'react';
import { motion } from 'framer-motion';
import myPicture from '../assets/metiko.jpeg'; // Add your image

function About() {
  return (
    <motion.section 
      id="about"  // Enables scrolling
      className="bg-secondary text-white py-5" 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }}
    >
      <div className="container">
        <h2 className="text-center mb-4">About Me</h2>
        <div className="row align-items-center">
          <motion.div 
            className="col-md-4 text-center"
            initial={{ scale: 0.5 }} 
            animate={{ scale: 1 }} 
            transition={{ duration: 1.2 }}
          >
            <img
              src={myPicture}
              alt="Metiko Temitope - Profile"
              className="img-fluid rounded-circle shadow-lg"
              style={{ width: '200px', height: '200px', objectFit: 'cover' }}
            />
          </motion.div>
          <motion.div 
            className="col-md-8"
            initial={{ x: 50, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ duration: 1 }}
          >
            <p>
              Hi, I'm Metiko Temitope, a passionate Cloud, DevOps, and Full-Stack Engineer with a proven track record in driving automation and optimizing deployment pipelines in both cloud and on-premise environments. 
            </p>
            <p>
              I specialize in creating and maintaining scalable solutions by leveraging CI/CD pipelines, container orchestration, and Infrastructure as Code (IaC). My expertise spans across cloud platforms like AWS, where I automate workflows, improve operational efficiency, and ensure high availability for mission-critical applications. 
            </p>
            <p>
              I also thrive in full-stack development with deep proficiency in React, FastAPI, and PostgreSQL, building seamless, dynamic web applications that enhance user experience and integrate backend services efficiently.
            </p>
            <p>
              I'm passionate about combining my technical expertise and creative problem-solving skills to deliver innovative solutions that create lasting impact in every project I work on.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
