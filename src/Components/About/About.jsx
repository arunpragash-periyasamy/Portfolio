import { Card, Col, Row, Typography } from "antd";
import React from "react";
const { Title } = Typography;
const About = () => {
    return (
      <Card style={{ padding: "20px", width: "100vw" }}>
        <div style={{ textAlign: "left" }}>
          <Title className="title">About Me</Title>
        </div>
        <Row justify="" style={{ textAlign: "justify" }}>
          <Col xs={24} sm={24} md={15} lg={24} xl={24} xxl={24}>
            <Title level={2}>Hello! I'm Arunpragash.</Title>
            <p>
              Hello there! 👋 I'm Arunpragash, a passionate Software Developer
              on a mission to bring innovative ideas to life through elegant
              code and captivating design. As a fresher, I specialize in a wide
              array of technologies including{" "}
              <i>
                ReactJS, NodeJS, Express, MongoDB, MySQL, Bootstrap,
                Antd, Java.
              </i>
            </p>
            <div className="d-flex justify-content-between">
              <div>
                <p className="d-block">AGE . . . . 22</p>
                <p className="d-block">RESIDENCE . . . . India</p>
              </div>
              <div>
                <p className="d-block">Developer . . . . Available</p>
                <p className="d-block">ADDRESS . . . . TamilNadu, India</p>
              </div>
            </div>
          </Col>
        </Row>
        <div
          style={{ textAlign: "left", padding: "20px 0", marginTop: "20px" }}
        >
          <Title className="title">My Services</Title>
        </div>
        <Row justify="" gutter={[16, 16]}>
          <Col xs={24} sm={12} md={15} lg={12} xl={12} xxl={12}>
            <div style={{ fontSize: "40px" }}>
              <i className="fab fa-html5" style={{ color: "#ff9900" }}></i>
            </div>
            <Title level={2}>Front-end</Title>
            <p>
              Transform designs into responsive, pixel-perfect web pages that
              captivate and engage users.
            </p>
          </Col>
          <Col xs={24} sm={24} md={15} lg={12} xl={12} xxl={12}>
            <div style={{ fontSize: "40px" }}>
              <i className="fab fa-php" style={{ color: "#ff9900" }}></i>
            </div>
            <Title level={2}>Back-end</Title>
            <p>
              Develop secure, high-performance backend systems to handle complex
              business logic and data management.
            </p>
          </Col>
        </Row>
      </Card>
    );
}

export default About;
