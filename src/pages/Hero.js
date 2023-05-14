import React, { useEffect, useRef } from "react";
import "../styles/hero.css";
import Typed from "typed.js";

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
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div className="hero">
        <h1 className="test name">Reynald Arro!</h1>
        <h1 className="test">Full Stack Developer who builds stuffs with</h1>
        <span className="typed" ref={spanRef}></span>
      </div>
    </>
  );
}

export default Hero;
