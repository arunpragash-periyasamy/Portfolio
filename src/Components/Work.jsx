import { Card, Col, Flex, Row, Typography } from "antd";
import React from "react";

const { Title } = Typography;
const Work = () => {
    return (
      <Card style={{ padding: "20px", width: "100vw" }}>
        <div style={{ textAlign: "left" }}>
          <Title className="title">Work</Title>
        </div>
        <Row justify="" gutter={[16, 16]}>
          <Flex justify="space-between">
            <Card
              title="Ecommerce Website in MERN"
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              style={{
                width: 300,
              }}
            >
              <h3>Hello! I'm Arunpragash.</h3>
              <p>
                Back-end & Front-end developer from TamilNadu, India. I have
                rich experience in WordPress, also I am good at Magento. I love
                to talk with you about our unique.
              </p>
              {/* <div className="d-flex justify-content-between"></div> */}
            </Card>
            <Card title="Project 1">2</Card>
          </Flex>
        </Row>
      </Card>
    );
}

export default Work;