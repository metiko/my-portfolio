import React from 'react';

function Projects() {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <h2 className="text-center">Projects</h2>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">CRUD APP</h5>
                <p className="card-text">The app is a CRUD application designed to manage a list of users. It allows users to create, read, update, and delete users. The app features a React-based frontend with a clean, responsive design for a user-friendly experience. It integrates with a Node.js Express backend, which provides RESTful API endpoints for data operations. Axios is used for API calls, and the backend handles JSON data with middleware like cors and express.json().</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Socks-App Deployment</h5>
                <p className="card-text">The Socks-App project involved deploying a MySQL-backed application using modern DevOps practices and AWS services. We containerized the application using **Docker** to ensure consistent environments across development, staging, and production. A **CI/CD pipeline** was implemented with **Jenkins**, automating the building, testing, and deployment process.  

For infrastructure management, we used **Terraform** to provision AWS resources such as **EC2 instances** for hosting the app, **S3 buckets** for storing application assets, and other required networking configurations. This setup ensured scalability, reliability, and cost-efficiency.  

The deployment focused on automation and maintaining high availability, with all components seamlessly integrated for optimal performance.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Project 3</h5>
                <p className="card-text">A brief description of Project 3.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
