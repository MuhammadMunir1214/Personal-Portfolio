import React from "react";
import html from "../assets/img/html.png";
import CSS from "../assets/img/css.png";
import JavaScript from "../assets/img/javascript.png";
import ReactImg from "../assets/img/react.png";
import GitHub from "../assets/img/github.png";
import Node from "../assets/img/node.png";
import Mongo from "../assets/img/mongo.png";
import python from "../assets/img/python.png";
import java from "../assets/img/java.png";
import git from "../assets/img/git.png";

export const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skill-bx wow zoomIn">
        <h2>SKILLS</h2>
        <div className="skills-container">
          <div className="skill">
            <img src={html} alt="HTML" />
            <h3>HTML</h3>
          </div>

          <div className="skill">
            <img src={CSS} alt="CSS" />
            <h3>CSS</h3>
          </div>

          <div className="skill">
            <img src={JavaScript} alt="JavaScript" />
            <h3>JavaScript</h3>
          </div>

          <div className="skill">
            <img src={ReactImg} alt="React" />
            <h3>React</h3>
          </div>

          <div className="skill">
            <img src={python} alt="Python" />
            <h3>Python</h3>
          </div>

          <div className="skill">
            <img src={java} alt="Java" />
            <h3>Java</h3>
          </div>

          <div className="skill">
            <img src={Node} alt="Node.js" />
            <h3>Node.js</h3>
          </div>

          <div className="skill">
            <img src={Mongo} alt="MongoDB" />
            <h3>MongoDB</h3>
          </div>

          <div className="skill">
            <img src={GitHub} alt="GitHub" />
            <h3>GitHub</h3>
          </div>

          <div className="skill">
            <img src={git} alt="Git" />
            <h3>Git</h3>
          </div>
        </div>
      </div>
    </section>
  );
};
