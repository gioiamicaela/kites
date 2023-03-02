import React, { useState } from "react";
import NavBar from "../components/NavBar";
import MenuBar from "../components/MenuBar";
import Producto from "../components/Producto";
import Web from "../components/Web";
import Ficha from "../components/Ficha";
import Documento from "../components/Documento";

function LandingPage() {
  const [content, setContent] = useState("productos");
  const contentDisplay = (key) => {
    setContent(key.key);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        flex: "1",
      }}
    >
      <NavBar />
      <div style={{ display: "flex", flexDirection: "row", flex: "2" }}>
        <MenuBar
          style={{
            float: "left",
            color: "#FFFFFF",
            borderRight: "1px solid #F3F3F3",
          }}
          contentDisplay={contentDisplay}
        ></MenuBar>
        {content === "productos" && <Producto />}
        {content === "webs" && <Web />}
        {content === "documentos" && <Documento />}
        {content === "fichas" && <Ficha />}
      </div>
    </div>
  );
}

export default LandingPage;
