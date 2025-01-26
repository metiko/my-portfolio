import React from 'react';

function Projects() {
  const projects = [
    {
      title: "CRUD App",
      description: `
        A CRUD application designed to manage a list of users, allowing users to create, read, update, 
        and delete entries. It features a React-based frontend with a responsive design for user-friendliness. 
        The backend, built with Node.js and Express, provides RESTful API endpoints and handles JSON data 
        using middleware like CORS and express.json(). Axios is used for seamless API integration.
      `,
    },
    {
      title: "Socks-App Deployment",
      description: `
        Deployed a MySQL-backed application using modern DevOps practices and AWS services. The app was 
        containerized with Docker to ensure consistency across development, staging, and production environments. 
        A CI/CD pipeline with Jenkins automated building, testing, and deployment. Terraform was used to provision 
        AWS resources, including EC2 instances for hosting, S3 buckets for storage, and networking configurations. 
        The deployment focused on scalability, reliability, and cost-efficiency.
      `,
    },
    {
      title: "Cloud-Native Commercial App",
      description: `
        Built a simple commercial app with an introductory page and a login/registration system. The backend 
        was developed with FastAPI (or Node.js) for user authentication, while the frontend used React for 
        an interactive user experience. Dockerized for portability, the app was deployed using Jenkins CI/CD 
        pipelines. It was hosted on an AWS EC2 instance, leveraging the AWS free tier, with static files 
        stored in an S3 bucket for efficient content delivery.
      `,
    },
  ];

  return (
    <section className="bg-light py-5">
      <div className="container">
        <h2 className="text-center">Projects</h2>
        <div className="row mt-4">
          {projects.map((project, index) => (
            <div key={index} className="col-md-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description.trim()}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
