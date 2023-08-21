import React, { useState } from "react";
import { Col, Modal, Button } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, repoLink }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = () => {
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" onClick={handleShowDetails}>
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      <Modal show={showDetails} onHide={handleCloseDetails} centered>
        <Modal.Header closeButton>
          <Modal.Title
            style={{
              color: "#53ABFB",
              textAlign: "center",
              width: "100%",
            }}
          >
            {title} Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{ fontSize: "18px" }}>{description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleCloseDetails}
            className="animate-button"
          >
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => window.open(repoLink, "_blank")}
            className="animate-button"
          >
            Code
          </Button>
        </Modal.Footer>
      </Modal>
    </Col>
  );
};
