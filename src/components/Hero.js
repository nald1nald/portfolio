import React, { useEffect, useRef } from "react";
import "../main.css";
import Typed from "typed.js";
import mail from "../images/google-gmail.svg";
import linkedin from "../images/linkedin-icon.svg";
import github from "../images/github-icon.svg";
import Footer from "./Footer";

function Hero() {
  const spanRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(spanRef.current, {
      strings: [
        "JavaScript",
        "React",
        "Node.js",
        "Express.js",
        "MySQL",
        "MongoDB",
        "PHP",
      ],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div class="main">
        <div className="name">
          <h1>Hi, I'm Reynald Arro</h1>
        </div>
        <div className="job">
          <h1>Full Stack Developer</h1>
        </div>
        <div className="stacks">
          <h1>
            I build stuff with <span className="typed" ref={spanRef}></span>
          </h1>
        </div>

        <div className="contact">
          <h3>Contact me: </h3>
          <a
            href="mailto:sleight.nald@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={mail} alt="mail"></img>
          </a>
          <a
            href="https://github.com/nald1nald"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={github}
              alt="github"
              style={{ filter: "invert(1)" }}
            ></img>
          </a>
          <a
            href="https://www.linkedin.com/in/reynald-arro-4449b125a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="linkedin"></img>
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
