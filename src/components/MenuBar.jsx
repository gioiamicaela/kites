import React from "react";
import { Menu } from "antd";

const onClick = (e) => {
  console.log("click ", e);
};

function MenuBar() {
  return (
    <Menu
      onClick={onClick}
      mode="inline"
      style={{
        width: 256,
      }}
      items={[
        { label: "Productos", key: "productos" },
        { label: "Webs", key: "Webs" },
        { label: "Fichas", key: "Fichas" },
        { label: "Documentos", key: "Documentos" },
      ]}
    ></Menu>
  );
}

export default MenuBar;
