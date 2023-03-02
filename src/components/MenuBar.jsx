import React from "react";
import { Menu } from "antd";

function MenuBar({ contentDisplay }) {
  return (
    <Menu
      onClick={contentDisplay}
      mode="inline"
      style={{
        width: 259,
      }}
      items={[
        { label: "Productos", key: "productos", className: "sideMenuTitle" },
        { label: "Webs", key: "webs", className: "sideMenuTitle" },
        { label: "Fichas", key: "fichas", className: "sideMenuTitle" },
        { label: "Documentos", key: "documentos", className: "sideMenuTitle" },
      ]}
    ></Menu>
  );
}

export default MenuBar;
