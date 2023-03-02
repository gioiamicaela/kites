import React from "react";
import { Space, Table, Tag } from "antd";
import Icon, { DownOutlined } from "@ant-design/icons";

function ProductTable() {
  const columns = [
    {
      title: "Código",
      dataIndex: "codigo",
      key: "codigo",
      icon: <DownOutlined />,
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Nombre",
      dataIndex: "nombre",
      key: "nombre",
    },
    {
      title: "Categoría",
      dataIndex: "categoria",
      key: "categoria",
    },
    {
      title: "Webs",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color;
            if (tag === "Landing comercial" || tag === "Loading 2") {
              color = "#2980B9";
            } else if (tag === "Ficha completa" || tag === "Ficha decoración") {
              color = "#5499C7";
            } else if (tag === "Ficha técnica") {
              color = "#45B39D";
            } else if (tag === "Ficha seguridad") {
              color = "#16A085";
            }
            return (
              <Tag color={color} key={tag}>
                {tag}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Fichas",
      key: "fichas",
      dataIndex: "fichas",
      render: (_, { fichas }) => (
        <>
          {fichas.map((ficha) => {
            let color;
            if (ficha === "Landing comercial" || ficha === "Loading 2") {
              color = "#2980B9";
            } else if (
              ficha === "Ficha completa" ||
              ficha === "Ficha decoración"
            ) {
              color = "#5499C7";
            } else if (ficha === "Ficha técnica") {
              color = "#45B39D";
            } else if (ficha === "Ficha seguridad") {
              color = "#16A085";
            }
            return (
              <Tag color={color} key={ficha}>
                {ficha}
              </Tag>
            );
          })}
        </>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      ccodigo: 100020,
      nombre: "TEXTURGLAS A",
      categoria: "TEJIDOS TÉCNICOS DE FIBRA DE VIDRIO/ TEXTURGLAS",
      tags: ["Ficha completa", "Landing comercial"],
      fichas: ["Ficha técnica", "Ficha seguridad"],
    },
    {
      key: "2",
      ccodigo: 500913,
      nombre: "PHANTASY PLUS 913",
      categoria: "TEJIDOS TÉCNICOS DE FIBRA DE VIDRIO/ PHANTASY PLUS",
      tags: ["Ficha completa"],
      fichas: ["Ficha técnica", "Ficha seguridad"],
    },
    {
      key: "3",
      ccodigo: 600000,
      nombre: "CINTA TAPAGRIETAS TAPE-TEX 5x20",
      categoria: "CINTAS/CINTAS AUTOADHESIVAS",
      tags: ["Ficha completa", "Landing comercial"],
      fichas: ["Ficha técnica"],
    },
    {
      key: "4",
      ccodigo: "BB050RDEN",
      nombre: "PINTURA PIZARRA ROJO 05 L",
      categoria: "SOLUCIONES DE ESCRITURA Y MAGNÉTICAS/PINTURA DE PIZARRA",
      tags: [
        "Ficha completa",
        "Landing comercial",
        "Loading 2",
        "Ficha decoración",
        "Otra",
      ],
      fichas: ["Ficha técnica", "Ficha seguridad"],
    },
  ];
  return <Table columns={columns} dataSource={data} />;
}

export default ProductTable;
