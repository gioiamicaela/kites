import React from "react";
import { Link } from "react-router-dom";
import vector from "./Vector.png";

function AddProduct() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-2 d-flex jutify-content-end">
          <Link to="/" style={{ marginRight: "78px" }}>
            <img
              src={vector}
              alt=""
              style={{ width: "40px", height: "40px" }}
            />
          </Link>
          <div className="col-10" style={{ width: "80vw" }}>
            <h4
              style={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "30px",
                lineHeight: "45px",
              }}
            >
              Nuevo Producto
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
