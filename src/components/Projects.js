import React, { useState } from "react";
import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCards";
import projImg1 from "../assets/img/Munir-GPT.png";
import projImg2 from "../assets/img/Weather-Img.png";
import projImg3 from "../assets/img/BMI-Img.png";
import "./Project.css";

export const Projects = () => {
  const allProjects = [
    {
      title: "Munir-GPT",
      description:
        "An AI-powered web application that allows users to upload PDFs for analysis and provides intelligent conversational experiences through dynamic chat interactions.",
      imgUrl: projImg1,
      category: "web",
      repoLink: "https://github.com/MuhammadMunir1214",
    },
    {
      title: "Weather App",
      description:
        "A weather forecast application that provides accurate real time weather data for any major city around the world.",
      imgUrl: projImg2,
      category: "all",
      repoLink: "https://github.com/MuhammadMunir1214/Weather-App",
    },
    {
      title: "BMI Calculator",
      description:
        "A simple application that allows users to calculate their Body Mass Index (BMI) and provides insights into their weight status.",
      imgUrl: projImg3,
      category: "all",
      repoLink: "https://github.com/MuhammadMunir1214/BMI-Calculator",
    },
  ];

  const [activeTab, setActiveTab] = useState("all");
  const filteredProjects = allProjects.filter(
    (project) => activeTab === "all" || project.category === activeTab
  );

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>PROJECTS</h2>
            <Tab.Container
              id="projects-tabs"
              defaultActiveKey="all"
              activeKey={activeTab}
            >
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="all" onClick={() => setActiveTab("all")}>
                    All
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="web" onClick={() => setActiveTab("web")}>
                    Web
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="all">
                  <Row>
                    {filteredProjects.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="web">
                  <Row>
                    {filteredProjects.map(
                      (project, index) =>
                        project.category === "web" && (
                          <ProjectCard key={index} {...project} />
                        )
                    )}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
