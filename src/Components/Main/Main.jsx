import React from "react";
import { Col, Layout, Row } from "antd";
import Sidebar from "../Sidebar/Sidebar";
import ProfileCard from "../ProfileCard/ProfileCard";
import ContentComponent from "../ContentComponent";
const { Content, Header, Sider, Footer } = Layout;
const Main = () => {
  return (
    <Layout className="layout">
      <Content className="d-flex align-items-center">
        <div className="d-flex align-items-center">
          <Row className="d-flex align-items-center">
            <Col sm={2} md={2} lg={2} xl={2} xxl={2}>
              <Sidebar />
            </Col>
            <Col sm={24} md={8} lg={8} xl={8} xxl={8}>
              <ProfileCard />
            </Col>
            <Col sm={24} md={14} lg={14} xl={14} xxl={14}>
              <ContentComponent/>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
};

export default Main;
