import React from "react";
import { Col, Row, Steps } from "antd";

const Resume = () => {
    return (
      <div className="">
        <div style={{ textAlign: "left" }}>
          <h2 className="title">Work</h2>
        </div>
        <Row justify="" gutter={[16, 16]}>
          <Col xs={24} sm={24} md={24} lg={12}>
                    <h3>Hello! I'm Arunpragash.</h3>
            <Steps
              progressDot
              current={1}
              direction="vertical"
              items={[
                {
                  title: "Finished",
                  description: "This is a description. This is a description.",
                },
                {
                  title: "Finished",
                  description: "This is a description. This is a description.",
                },
                {
                  title: "In Progress",
                  description: "This is a description. This is a description.",
                },
                {
                  title: "Waiting",
                  description: "This is a description.",
                },
                {
                  title: "Waiting",
                  description: "This is a description.",
                },
              ]}
            />
            {/* <div className="d-flex justify-content-between"></div> */}
          </Col>
          <Col xs={24} sm={24} md={24} lg={12}>
            2
          </Col>
        </Row>
      </div>
    );
}

export default Resume;