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
                <h5 className="card-title">Project 2</h5>
                <p className="card-text">A brief description of Project 2.</p>
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
