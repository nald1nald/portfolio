import React from "react";
import "../styles/about.css";

function About() {
  return (
    <>
      <div className="about">
        <h1 className="me me1">Hi!</h1>
        <h1 className="me me2">I'm Reynald Arro</h1>
        <h1 className="me me3">A Full Stack Developer</h1>
        <h1 className="me me4">Based in Caloocan,</h1>
        <h1 className="me me5">Philippines</h1>

        <div className="desc">
          <h2>
            As a recent graduate of KodeGo coding bootcamp, I have completed an
            intensive program that has equipped me with the skills to become a
            full stack developer. I have learned HTML, CSS, JavaScript, React,
            Node.js and database systems like MongoDB and MySQL.
            <a
              className="link"
              href="https://github.com/nald1nald"
              target="_blank"
            >
              {" "}
              View some of my works on Github
            </a>
          </h2>
        </div>
      </div>
    </>
  );
}

export default About;
