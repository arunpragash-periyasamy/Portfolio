import { Col, Row } from "antd";
import React from "react";
const About = () => {
    return (
      <div >
        <div style={{ textAlign: "left" }}>
          <h2 className="title">About Me</h2>
        </div>
        <Row justify="" style={{ textAlign: "justify" }}>
          <Col xs={24} sm={24} md={15} lg={20} xl={20}>
            <h3>
              <p>
                <strong>Hello! I'm Arunpragash.</strong>
              </p>
            </h3>
            <p>
              Back-end & Front-end developer from TamilNadu, India. I have rich
              experience in WordPress, also I am good at Magento. I love to talk
              with you about our unique.
            </p>
            <div className="d-flex justify-content-between">
              <div>
                <p>AGE . . . . 22</p>
                <p>RESIDENCE . . . . India</p>
              </div>
              <div>
                <p>FREELANCE . . . . Available</p>
                <p>ADDRESS . . . . TamilNadu, India</p>
              </div>
            </div>
          </Col>
        </Row>
        <div
          style={{ textAlign: "left", padding: "20px 0", marginTop: "20px" }}
        >
          <h2 className="title">My Services</h2>
        </div>
        <Row justify="" gutter={[16, 16]}>
          <Col xs={24} sm={12} md={15} lg={10}>
            <div style={{ fontSize: "40px" }}>
              <i className="fab fa-html5" style={{ color: "#ff9900" }}></i>
            </div>
            <h3>Front-end</h3>
            <p>
              Modern and mobile-ready website that will help you reach all of
              your marketing.
            </p>
          </Col>
          <Col xs={24} sm={24} md={15} lg={10}>
            <div style={{ fontSize: "40px" }}>
              <i className="fab fa-php" style={{ color: "#ff9900" }}></i>
            </div>
            <h3>Back-End</h3>
            <p>
              UI/UX focus on the user, frontend focus on the settings of the
              user, and backend focus on the data.
            </p>
          </Col>
        </Row>
      </div>
    );
}

export default About;
