import { Col, Row } from "antd";
import React from "react";
const Work = () => {
    return (
      <div>
        <div style={{ textAlign: "left" }}>
          <h2 className="title">
            Work
          </h2>
        </div>
        <Row justify="" gutter={[16, 16]}>
          <Col xs={24} sm={24} md={24} lg={12}>
            <h3>Hello! I'm Arunpragash.</h3>
            <p>
              Back-end & Front-end developer from TamilNadu, India. I have rich
              experience in WordPress, also I am good at Magento. I love to talk
              with you about our unique.
            </p>
            {/* <div className="d-flex justify-content-between"></div> */}
          </Col>
          <Col xs={24} sm={24} md={24} lg={12}>
            2
          </Col>
        </Row>
      </div>
    );
}

export default Work;