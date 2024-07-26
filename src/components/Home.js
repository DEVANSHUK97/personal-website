import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section className="home-section">
      <div className="hero">
        <h1>Welcome to My Personal Website</h1>
        <p>I'm an aspiring software developer with a passion for creating innovative solutions.</p>
        <button className="cta-button">Learn More</button>
      </div>
      <div className="home-content">
        <h2>About Me</h2>
        <p>This is the Home section. Here you can learn more about my journey, skills, and projects.</p>
      </div>
    </section>
  );
};

export default Home;