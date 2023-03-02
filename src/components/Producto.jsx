import React from "react";
import { Button, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import ProductTable from "./ProductTable";

function Producto() {
  const handleButtonClick = (e) => {
    console.log("click left button", e);
  };

  const handleMenuClick = (e) => {
    console.log("click", e);
  };

  const items = [
    {
      label: "1",
      key: "1",
    },
    {
      label: "2",
      key: "2",
    },
    {
      label: "3",
      key: "3",
    },
    {
      label: "4",
      key: "4",
    },
  ];

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <div className="px-5 pt-2 w-100" style={{ backgroundColor: "#E5E5E5" }}>
      <div className="row">
        <div className="col-12 d-flex align-items-center">
          <h3 className="title mt-2">Productos</h3>
          <button
            className="mx-2"
            style={{
              backgroundColor: "#000000",
              borderRadius: "5px",
              width: "168.21px",
              height: "30px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <h4
              style={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "14px",
                lineHeight: "21px",
                color: "#FFFFFF",
                margin: "0px",
              }}
            >
              +
            </h4>
            <h4
              style={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "14px",
                lineHeight: "21px",
                color: "#FFFFFF",
                margin: "0px",
              }}
            >
              {" "}
              Añadir producto
            </h4>
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-12  mt-2 d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <h4
              style={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "14px",
                lineHeight: "21px",
                color: "black",
                margin: "0px",
              }}
            >
              Show
            </h4>
            <Dropdown menu={menuProps} className="mx-1">
              <Button>
                <Space>
                  10
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
            <h4
              style={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "14px",
                lineHeight: "21px",
                color: "black",
                margin: "0px",
              }}
            >
              entries
            </h4>
          </div>
          <div className="d-flex align-items-center">
            <h4
              style={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "14px",
                lineHeight: "21px",
                color: "black",
                margin: "0px",
              }}
            >
              Search:
            </h4>
            <input className="mx-2" />
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <ProductTable />
      </div>
    </div>
  );
}

export default Producto;
