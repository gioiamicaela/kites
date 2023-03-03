import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import vector from "./Vector.png";
import { Tag } from "antd";
import ingles from "../components/ingles.png";
import español from "../components/españa.png";

function Detail() {
  const params = useParams();
  const [product, setProduct] = useState([]);
  const data = [
    {
      key: "1",
      codigo: 100020,
      nombre: "TEXTURGLAS A",
      categoria: "TEJIDOS TÉCNICOS DE FIBRA DE VIDRIO/ TEXTURGLAS",
      webs: ["Ficha completa", "Landing comercial"],
      fichas: ["Ficha técnica", "Ficha seguridad"],
      idiomas: ["español", "ingles"],
    },
    {
      key: "2",
      codigo: 500913,
      nombre: "PHANTASY PLUS 913",
      categoria: "TEJIDOS TÉCNICOS DE FIBRA DE VIDRIO/ PHANTASY PLUS",
      webs: ["Ficha completa"],
      fichas: ["Ficha técnica", "Ficha seguridad"],
      idiomas: ["español", "ingles"],
    },
    {
      key: "3",
      codigo: 600000,
      nombre: "CINTA TAPAGRIETAS TAPE-TEX 5x20",
      categoria: "CINTAS/CINTAS AUTOADHESIVAS",
      webs: ["Ficha completa", "Landing comercial"],
      fichas: ["Ficha técnica"],
      idiomas: ["español", "ingles"],
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
    },
  ];

  useEffect(() => {
    const find = data.filter(
      (product) => product.codigo === parseInt(params.codigo)
    );
    setProduct(find);
  }, []);

  return (
    <>
      {product.length > 0 && (
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
                    marginBottom: "50px",
                  }}
                >
                  {product[0].nombre}
                </h4>
                <div className="d-flex align-items-center">
                  <h5 className="detailsTitle">Código:</h5>
                  <h6>{product[0].codigo}</h6>
                </div>
                <div className="d-flex align-items-center">
                  <h5 className="detailsTitle">Categoría:</h5>
                  <h6>{product[0].categoria}</h6>
                </div>
                <div className="d-flex align-items-center">
                  <h5 className="detailsTitle">Webs:</h5>
                  {product[0].webs.map((web) => {
                    let color;
                    if (web === "Landing comercial" || web === "Loading 2") {
                      color = "#2980B9";
                    } else if (
                      web === "Ficha completa" ||
                      web === "Ficha decoración"
                    ) {
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
                </div>
                <div className="d-flex align-items-center">
                  <h5 className="detailsTitle">Fichas:</h5>
                  {product[0].fichas.map((ficha) => {
                    let color;
                    if (
                      ficha === "Landing comercial" ||
                      ficha === "Loading 2"
                    ) {
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
                </div>
                <div className="d-flex align-items-center">
                  <h5 className="detailsTitle">Idiomas:</h5>
                  {product[0].idiomas.map((idioma) => {
                    let url;
                    if (idioma === "español") {
                      url = español;
                    } else {
                      url = ingles;
                    }
                    return <img src={url} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Detail;
