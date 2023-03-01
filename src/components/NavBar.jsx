import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import regarsa from "./regarsa.png";
import img from "./img.png";

function NavBar() {
  return (
    <Navbar
      expand="lg"
      style={{
        height: "62px",
        width: "100vw",
        backgroundColor: "#FFFFFF",
        border: "1px solid #F3F3F3",
      }}
    >
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src={regarsa} alt="regarsa" />
        </Navbar.Brand>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              fontFamily: "Poppins",
              fontWeight: "500",
              fontSize: "18px",
              lineHeight: "27px",
              textAlign: "center",
              fontStyle: "normal",
              marginBottom: "0px",
              marginRight: "11px",
            }}
          >
            Itxaro
          </h2>

          <img
            src={img}
            alt="img"
            style={{ borderRadius: "30px", height: "40px", width: "40px" }}
          />
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
