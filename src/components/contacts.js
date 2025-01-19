import React from 'react';

function Contact() {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <h2 className="text-center">Contact Me</h2>
        <form className="mt-4">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Your Name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Your Email" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100">Send</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
