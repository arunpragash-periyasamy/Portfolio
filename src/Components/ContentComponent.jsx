// ContentComponent.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "antd";
import { Outlet } from "react-router-dom";
const ContentComponent = () => {
  return (
    <Row
      style={{
        backgroundColor: "#1c1c1c",
        color: "#fff",
        paddingTop: "20px",
        paddingLeft: "20px",
        borderRadius: "10px",
        width: "100%",
        maxWidth: "900px", // Adjust maxWidth as needed
        height: "45vh", // Adjust height as needed
        overflow: "auto",
        margin: "0 auto",
        scrollbarWidth: "none", // For Firefox
        msOverflowStyle: "none", // For IE and Edge
      }}
      className="custom-scrollbar"
    >
      <div className="content">
      <Outlet />
      </div>
    </Row>
  );
};

export default ContentComponent;
