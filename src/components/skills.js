import React from 'react';
import { motion } from 'framer-motion';

function Skills() {
  return (
    <motion.section 
      id="skills" 
      className="bg-primary text-white py-5"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      <div className="container">
        <h2 className="text-center">Skills</h2>
        <motion.ul 
          className="list-group list-group-flush mt-4"
          initial={{ y: 50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          <motion.li 
            className="list-group-item bg-primary text-white"
            initial={{ x: -50, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ duration: 1, delay: 0.2 }}
          >
            React.js
          </motion.li>
          <motion.li 
            className="list-group-item bg-primary text-white"
            initial={{ x: -50, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ duration: 1, delay: 0.4 }}
          >
            Node.js
          </motion.li>
          <motion.li 
            className="list-group-item bg-primary text-white"
            initial={{ x: -50, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ duration: 1, delay: 0.6 }}
          >
            Python
          </motion.li>
          <motion.li 
            className="list-group-item bg-primary text-white"
            initial={{ x: -50, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ duration: 1, delay: 0.8 }}
          >
            Docker
          </motion.li>
          <motion.li 
            className="list-group-item bg-primary text-white"
            initial={{ x: -50, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ duration: 1, delay: 1 }}
          >
            AWS
          </motion.li>
          <motion.li 
            className="list-group-item bg-primary text-white"
            initial={{ x: -50, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ duration: 1, delay: 1.2 }}
          >
            Javascript
          </motion.li>
        </motion.ul>
      </div>
    </motion.section>
  );
}

export default Skills;
