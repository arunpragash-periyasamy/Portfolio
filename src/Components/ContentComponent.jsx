// ContentComponent.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Card } from "antd";
import { Outlet } from "react-router-dom";
const ContentComponent = () => {
  return (
    <Row
      // style={{
      //   backgroundColor: "#1c1c1c",
      //   color: "#fff",
      //   padding: "15tpx",
      //   borderRadius: "10px",
      //   width: "100%",
      //   maxWidth: "900px", // Adjust maxWidth as needed
      //   height: "45vh", // Adjust height as needed
      //   overflow: "auto",
      //   margin: "0 auto",
      //   scrollbarWidth: "none", // For Firefox
      //   msOverflowStyle: "none", // For IE and Edge
      // }}
      className="custom-scrollbar content-container"
    >
          <Outlet />
    </Row>
  );
};

export default ContentComponent;
