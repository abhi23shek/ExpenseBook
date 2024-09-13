import React from "react";
import "./Features.css";
import { Container, Row, Col } from "react-bootstrap";

import {
  MdOutlineGroups,
  MdChecklist,
  MdOutlineStars,
  MdOutlineHub,
  MdDocumentScanner,
} from "react-icons/md";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaGears, FaSuitcase } from "react-icons/fa6";
import { FaConciergeBell } from "react-icons/fa";

const featuresData = [
  {
    icon: <MdOutlineGroups />,
    title: " Setup Employee Groups",
    description:
      "Use any parameter to setup distinct employee groups to implement policies.",
  },
  {
    icon: <MdChecklist />,
    title: " The Definitive Rule Engine",
    description:
      "Configure ANY policy - and if you can’t configure it, we promise to work on it for free.",
  },
  {
    icon: <IoDocumentTextSharp />,
    title: " Customized Reports",
    description:
      "Setup the reports that you want using our seamless reporting engine.",
  },
  {
    icon: <MdOutlineStars />,
    title: " Superior Employee Experience",
    description:
      "Manage all expenses and travel requests easily. Empower your employees with personalized reports.",
  },
  {
    icon: <MdOutlineHub />,
    title: " Easy Integrations",
    description:
      "Integrate with your upstream, HRMS or your downstream finance system to seamlessly deliver value through our Open APIs.",
  },
  {
    icon: <FaGears />,
    title: " Configurable Workflows",
    description:
      "Configure approvals or rejections. Escalations and reports. At will. Setup new groups.",
  },
  {
    icon: <MdDocumentScanner />,
    title: " Scan any Bill",
    description:
      "The world’s best OCR system backs up this product. All data goes in. 99% success.",
  },
  {
    icon: <FaConciergeBell />,
    title: " AI-Based Concierge ",
    description:
      "Ask the concierge to change things during your travel - and it will trigger relevant actions 24×7.",
    comingSoon: true,
  },
  {
    icon: <FaSuitcase />,
    title: " AI-Assisted Trip Planning ",
    description:
      "Just tell us what you want to do in normal language and we will try and put together the best itinerary for you.",
    comingSoon: true,
  },
];

const Features = () => {
  return (
    <Container className="features-containers">
      <div className="features-title">
        <span className="features-title-text">
          Features that suit your needs
        </span>
      </div>
      <Row>
        {featuresData.map((feature, index) => (
          <Col md={4} className="feature-items" key={index}>
            <h4 className="feature-title">
              <span className="icon-wrappers">
                <span className="feature-icon">{feature.icon}</span>
              </span>
              <span className="feature-title-wrapper">{feature.title}</span>
              {feature.comingSoon && (
                <span className="coming-soon-badge">Coming soon</span>
              )}
            </h4>

            <p className="feature-description">{feature.description}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Features;
