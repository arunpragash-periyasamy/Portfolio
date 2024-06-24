import React from "react";
import { Col, Layout, Row , Grid} from "antd";
import Sidebar from "../Sidebar/Sidebar";
import ProfileCard from "../ProfileCard/ProfileCard";
import ContentComponent from "../ContentComponent";
import Header from "../Header/Header";
const { Content } = Layout;
const { useBreakpoint } = Grid;
const Main = () => {
  const screens = useBreakpoint();
  console.log(screens.lg)
  return ( 
    <Layout className="layout">
      {!screens.lg ? <Header/> : null}
      <Content className="d-flex align-items-center">
        <div className="d-flex align-items-center">
          <Row className="d-flex align-items-center">
            <Col sm={24} md={24} lg={2} xl={2} xxl={2}>
              {screens.lg ? <Sidebar /> : null}
            </Col>
            <Col sm={24} md={24} lg={8} xl={8} xxl={8}>
              <ProfileCard />
            </Col>
            <Col sm={24} md={24} lg={14} xl={14} xxl={14}>
              <ContentComponent/>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
};

export default Main;
