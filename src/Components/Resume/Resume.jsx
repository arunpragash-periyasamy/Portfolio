import React from "react";
import { Card, Col, Flex, Progress, Row, Timeline, Typography } from "antd";
import { CheckOutlined } from "@ant-design/icons";
const { Title } = Typography;
const Resume = () => {
    return (
      <Card style={{ padding: "20px", width: "100vw" }}>
        <div style={{ textAlign: "left" }}>
          <Title level={1} className="title">
            Resume
          </Title>
        </div>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={15} lg={12} xl={12} xxl={12}>
            <div style={{ fontSize: "40px" }}>
              <i className="fab fa-html5" style={{ color: "#ff9900" }}></i>
            </div>
            <Title level={2}>Experience</Title>

            <Timeline className="pt-2">
              <Timeline.Item color="#f6b846">
                <Row>
                  <Typography
                    style={{ border: "0.5px solid #ff9900", padding: "8px" }}
                  >
                    Jan 2024 - Present
                  </Typography>
                </Row>
                <Row justify={"space-between"} className="mt-2">
                  <Col>
                    <Title level={5}>Tech Support Intern</Title>
                  </Col>
                  <Col>
                    <Title level={5}>GUVI</Title>
                  </Col>
                </Row>
                <Row>
                  <p>
                    Helping the learners while they are having doubts about the
                    tasks. Evaluating the tasks of the learners.
                  </p>
                </Row>
              </Timeline.Item>
              <Timeline.Item color="#666">
                <Row>
                  <Typography
                    style={{
                      border: "0.5px solid #666",
                      color: "#666",
                      padding: "8px",
                    }}
                  >
                    Aug 2022 - Nov 2022
                  </Typography>
                </Row>
                <Row justify={"space-between"} className="mt-2">
                  <Col>
                    <Title level={5}>Software Developer Intern</Title>
                  </Col>
                  <Col>
                    <Title level={5} className="text-wrap">
                      Infogreen
                    </Title>
                  </Col>
                </Row>
                <Row>
                  <p>
                    Developed a School ERP System to manage school activities
                    and store student information. Improved system efficiency
                    and user experience through innovative solutions
                  </p>
                </Row>
              </Timeline.Item>
            </Timeline>
          </Col>
          <Col xs={24} sm={24} md={15} lg={12} xl={12} xxl={12}>
            <div style={{ fontSize: "40px" }}>
              <i className="fab fa-php" style={{ color: "#ff9900" }}></i>
            </div>
            <Title level={2}>Education</Title>

            <Timeline className="pt-2">
              <Timeline.Item color="#f6b846">
                <Row>
                  <Typography
                    style={{
                      border: "0.5px solid #666",
                      color: "#666",
                      padding: "8px",
                    }}
                  >
                    2019 - 2024
                  </Typography>
                </Row>
                <Row justify={"space-between"} className="mt-2">
                  <Col>
                    <Title level={5} style={{ left: 0 }}>
                      MSc Software Systems
                    </Title>
                  </Col>
                  <p className="d-block">CGPA : 8</p>
                  <Col></Col>
                </Row>
                <Row>
                  <p className="d-block">
                    Kongu Enginnering College, Perundurai
                  </p>
                </Row>
              </Timeline.Item>

              <Timeline.Item color="#f6b846">
                <Row>
                  <Typography
                    style={{
                      border: "0.5px solid #666",
                      color: "#666",
                      padding: "8px",
                    }}
                  >
                    2018 - 2019
                  </Typography>
                </Row>
                <Row justify={"space-between"} className="mt-2">
                  <Col>
                    <Title level={5} style={{ left: 0 }}>
                      Higher Secondary Certificate
                    </Title>
                  </Col>
                  <p className="d-block">Percent : 61.1%</p>
                  <Col></Col>
                </Row>
                <Row>
                  <p className="d-block">
                    Aim Matric Hr Sec School, Thammampatti
                  </p>
                </Row>
              </Timeline.Item>
              <Timeline.Item color="#f6b846">
                <Row>
                  <Typography
                    style={{
                      border: "0.5px solid #666",
                      color: "#666",
                      padding: "8px",
                    }}
                  >
                    2016 - 2017
                  </Typography>
                </Row>
                <Row justify={"space-between"} className="mt-2">
                  <Col>
                    <Title level={5} style={{ left: 0 }}>
                      Secondary School Leaving Certificate
                    </Title>
                  </Col>
                  <p className="d-block">Percent : 90%</p>
                  <Col></Col>
                </Row>
                <Row>
                  <p className="d-block">
                    Aim Matric Hr Sec School, Thammampatti
                  </p>
                </Row>
              </Timeline.Item>
            </Timeline>
          </Col>
        </Row>
        <div style={{ textAlign: "left" }}>
          <Title level={1} className="title">
            Skills
          </Title>
        </div>
        <Row justify={"space-between"}>
          <Col xs={24} sm={24} md={24} lg={11} xl={11} xxl={11}>
            <Title level={3}>Coding</Title>
            <div className="d-flex justify-content-evenly flex-wrap">
              <div style={{ lineHeight: 5 }}>
                <Progress type="circle" percent={75} strokeColor={"orange"} />
                <div>React JS</div>
              </div>
              <div style={{ lineHeight: 5 }}>
                <Progress type="circle" percent={80} strokeColor={"orange"} />
                <div>Node JS</div>
              </div>
              <div style={{ lineHeight: 5 }}>
                <Progress type="circle" percent={70} strokeColor={"orange"} />
                <div>MySQL</div>
              </div>
              <div style={{ lineHeight: 5 }}>
                <Progress type="circle" percent={60} strokeColor={"orange"} />
                <div>Mongo DB</div>
              </div>
              <div style={{ lineHeight: 5 }}>
                <Progress type="circle" percent={80} strokeColor={"orange"} />
                <div>Java</div>
              </div>
              <div style={{ lineHeight: 5 }}>
                <Progress type="circle" percent={60} strokeColor={"orange"} />
                <div>jQuery</div>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={11} xl={11} xxl={11} className="text-left">
            <Title level={3}>Knowledge</Title>
            <div style={{textAlign:"left"}}>
            <p><CheckOutlined style={{color:"orange"}}/> Web development in React / jQuery</p>
            <p><CheckOutlined style={{color:"orange"}}/> Backend development in PHP / Node js</p>
            <p><CheckOutlined style={{color:"orange"}}/> Database Connectivity in MySQL / Mongoose</p>
            <p><CheckOutlined style={{color:"orange"}}/> Web Hosting in AWS EC2</p>
            <p><CheckOutlined style={{color:"orange"}}/> Frontend Hosting in Netlify / Vercel </p>
            <p><CheckOutlined style={{color:"orange"}}/> Backend Hosting in Render</p>
            <p><CheckOutlined style={{color:"orange"}}/> Working with Git and Github</p>
            <p><CheckOutlined style={{color:"orange"}}/> Antd, Bootstrap libraries for web development</p>
            <p><CheckOutlined style={{color:"orange"}}/> Postman and Bruno for API testing</p>
            </div>
          </Col>
        </Row>
      </Card>
    );
}

export default Resume;