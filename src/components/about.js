import React from 'react';
import myPicture from '../assets/metiko.jpeg'; // 

function About() {
  return (
    <section className="bg-secondary text-white py-5">
      <div className="container">
        <h2 className="text-center mb-4">About Me</h2>
        <div className="row align-items-center">
          {/* Profile Image Section */}
          <div className="col-md-4 text-center">
            <img
              src={myPicture}
              alt="My Profile"
              className="img-fluid rounded-circle shadow"
              style={{ width: '200px', height: '200px', objectFit: 'cover' }}
            />
          </div>

          {/* Description Section */}
          <div className="col-md-8">
            <p>
              Cloud and DevOps Engineer with extensive hands-on experience in supporting, automating, and optimizing
              deployments in both cloud and on-premise environments. Proficient in CI/CD pipeline development,
              container orchestration, infrastructure-as-code (IaC), and cloud platforms like AWS.
            </p>
            <p>
              Experienced in managing infrastructure, automating workflows, and improving operational efficiency
              through modern DevOps practices. Passionate about leveraging technology to deliver high-impact solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
