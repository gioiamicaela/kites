import React from "react";
import NavBar from "../components/NavBar";
import MenuBar from "../components/MenuBar";

function LandingPage() {
  return (
    <div className="container-fluid">
      <NavBar />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <MenuBar
          style={{
            float: "left",
            color: "#FFFFFF",
            border: "1px solid #F3F3F3",
          }}
        ></MenuBar>

        <div>Content</div>
      </div>
    </div>
  );
}

export default LandingPage;
