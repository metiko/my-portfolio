import React from 'react';
import { motion } from 'framer-motion';
import myPicture from '../assets/metiko.jpeg'; // Add your image

function About() {
  return (
    <motion.section 
      className="bg-secondary text-white py-5" 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }}
    >
      <div className="container">
        <h2 className="text-center">About Me</h2>
        <div className="row align-items-center">
          <motion.div 
            className="col-md-4 text-center"
            initial={{ scale: 0.5 }} 
            animate={{ scale: 1 }} 
            transition={{ duration: 1.2 }}
          >
            <img
              src={myPicture}
              alt="My Profile"
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
            Cloud and DevOps Engineer with extensive hands-on experience in supporting, automating, and optimizing deployments in both cloud and on-premise environments. Proficient in CI/CD pipeline development, container orchestration, infrastructure-as-code (IaC), and cloud platforms like AWS.

Experienced in managing infrastructure, automating workflows, and improving operational efficiency through modern DevOps practices. Passionate about leveraging technology to deliver high-impact solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
