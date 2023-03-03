import React from "react";
import { Table, Tag } from "antd";
import { DownOutlined } from "@ant-design/icons";
import ingles from "./ingles.png";
import español from "./españa.png";
import { Link } from "react-router-dom";
import avatar from "./avatar.png";
import avatar6 from "./avatar600000.png";
import avatarBD from "./avatarBD.png";

function ProductTable() {
  const columns = [
    {
      title: "",
      dataIndex: "avatar",
      key: "avatar",
      render: (text, record) => (
        <Link className="tableLink" to={`/${record.codigo}`}>
          <img src={record.img} alt="" />
        </Link>
      ),
    },
    {
      title: (
        <>
          Código
          <DownOutlined style={{ color: "black", marginLeft: "2px" }} />
        </>
      ),
      dataIndex: "codigo",
      key: "codigo",
      render: (text, record) => (
        <Link className="tableLink" to={`/${record.codigo}`}>
          {text}
        </Link>
      ),
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
      key: "webs",
      dataIndex: "webs",
      render: (_, { webs }) => (
        <>
          {webs.map((web) => {
            let color;
            if (web === "Landing comercial" || web === "Loading 2") {
              color = "#2980B9";
            } else if (web === "Ficha completa" || web === "Ficha decoración") {
              color = "#5499C7";
            } else if (web === "Ficha técnica") {
              color = "#45B39D";
            } else if (web === "Ficha seguridad") {
              color = "#16A085";
            }
            return (
              <Tag color={color} key={web}>
                {web}
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
    {
      title: "Idiomas",
      key: "idiomas",
      dataIndex: "idiomas",
      render: (_, { idiomas }) => (
        <>
          {idiomas.map((idioma) => {
            let url;
            if (idioma === "español") {
              url = español;
            } else {
              url = ingles;
            }
            return <img src={url} key={idioma} className="m-1" />;
          })}
        </>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      codigo: 100020,
      nombre: "TEXTURGLAS A",
      categoria: "TEJIDOS TÉCNICOS DE FIBRA DE VIDRIO/ TEXTURGLAS",
      webs: ["Ficha completa", "Landing comercial"],
      fichas: ["Ficha técnica", "Ficha seguridad"],
      idiomas: ["español", "ingles"],
      img: avatar,
    },
    {
      key: "2",
      codigo: 500913,
      nombre: "PHANTASY PLUS 913",
      categoria: "TEJIDOS TÉCNICOS DE FIBRA DE VIDRIO/ PHANTASY PLUS",
      webs: ["Ficha completa"],
      fichas: ["Ficha técnica", "Ficha seguridad"],
      idiomas: ["español", "ingles"],
      img: avatar,
    },
    {
      key: "3",
      codigo: 600000,
      nombre: "CINTA TAPAGRIETAS TAPE-TEX 5x20",
      categoria: "CINTAS/CINTAS AUTOADHESIVAS",
      webs: ["Ficha completa", "Landing comercial"],
      fichas: ["Ficha técnica"],
      idiomas: ["español", "ingles"],
      img: avatar6,
    },
    {
      key: "4",
      codigo: "BB050RDEN",
      nombre: "PINTURA PIZARRA ROJO 05 L",
      categoria: "SOLUCIONES DE ESCRITURA Y MAGNÉTICAS/PINTURA DE PIZARRA",
      webs: [
        "Ficha completa",
        "Landing comercial",
        "Loading 2",
        "Ficha decoración",
        "Otra",
      ],
      fichas: ["Ficha técnica", "Ficha seguridad"],
      idiomas: ["español", "ingles"],
      img: avatarBD,
    },
  ];
  return <Table columns={columns} dataSource={data} />;
}

export default ProductTable;
