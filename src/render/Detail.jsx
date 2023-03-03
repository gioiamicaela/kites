import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import vector from "./Vector.png";

function Detail() {
  const params = useParams();
  const [product, setProduct] = useState([]);
  const data = [
    {
      key: "1",
      codigo: 100020,
      nombre: "TEXTURGLAS A",
      categoria: "TEJIDOS TÉCNICOS DE FIBRA DE VIDRIO/ TEXTURGLAS",
      tags: ["Ficha completa", "Landing comercial"],
      fichas: ["Ficha técnica", "Ficha seguridad"],
      idiomas: ["español", "ingles"],
    },
    {
      key: "2",
      codigo: 500913,
      nombre: "PHANTASY PLUS 913",
      categoria: "TEJIDOS TÉCNICOS DE FIBRA DE VIDRIO/ PHANTASY PLUS",
      tags: ["Ficha completa"],
      fichas: ["Ficha técnica", "Ficha seguridad"],
      idiomas: ["español", "ingles"],
    },
    {
      key: "3",
      codigo: 600000,
      nombre: "CINTA TAPAGRIETAS TAPE-TEX 5x20",
      categoria: "CINTAS/CINTAS AUTOADHESIVAS",
      tags: ["Ficha completa", "Landing comercial"],
      fichas: ["Ficha técnica"],
      idiomas: ["español", "ingles"],
    },
    {
      key: "4",
      codigo: "BB050RDEN",
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
                  }}
                >
                  {product[0].nombre}
                </h4>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Detail;
