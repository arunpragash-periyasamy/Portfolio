import React from "react";
import { Col, Row, Timeline, Typography } from "antd";

const Resume = () => {
    return (
      <div>
        <div style={{ textAlign: "left" }}>
          <h2 className="title">Resume</h2>
        </div>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={15} lg={12} xl={12} xxl={12}>
            <div style={{ fontSize: "40px" }}>
              <i className="fab fa-html5" style={{ color: "#ff9900" }}></i>
            </div>
            <h3>Experience </h3>
            {/* <p>
              Modern and mobile-ready website that will help you reach all of
              your marketing.
            </p> */}
            <Timeline a>
              <Timeline.Item color="#f6b846">
                <Row>
                  <Typography style={{ border: "0.5px solid #ff9900", padding:"10px" }}>
                    2018
                  </Typography>
                </Row>
              </Timeline.Item>
              <Timeline.Item color="#F6B846">Sample</Timeline.Item>
            </Timeline>
          </Col>
          <Col xs={24} sm={24} md={15} lg={12} xl={12} xxl={12}>
            <div style={{ fontSize: "40px" }}>
              <i className="fab fa-php" style={{ color: "#ff9900" }}></i>
            </div>
            <h3>Education</h3>
            {/* <p>
              UI/UX focus on the user, frontend focus on the settings of the
              user, and backend focus on the data.
            </p> */}
          </Col>
        </Row>
      </div>
    );
}

export default Resume;