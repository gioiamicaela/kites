import React from "react";
import { Link } from "react-router-dom";
import vector from "./Vector.png";
import FormPrduct from "../components/FormProduct";

function AddProduct() {
  return (
    <div className="container-fluid mx-5">
      <div className="row mt-5">
        <div className="col-2 d-flex jutify-content-end">
          <Link to="/" style={{ marginRight: "78px" }}>
            <img
              src={vector}
              alt=""
              style={{ width: "40px", height: "40px" }}
            />
          </Link>
          <div
            className="col-10 d-flex flex-column align-items-start "
            style={{ width: "80vw" }}
          >
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
            <FormPrduct />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
