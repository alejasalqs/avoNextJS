// Para usar rutas dinámicas creamos una carpeta para la primer parte de la ruta
// para este ejemplo es localhost:3000/product/
// para la segunda parte creamos un archivo [variable].js, que va a significar la segunda parte de la ruta
// lo que se ponga dentro de [] va a ser como se llame la variable en código
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router"; // para obtener la variable del url

const ProductItem = () => {
  const [product, setProduct] = useState([]);

  const {
    query: { id },
  } = useRouter();

  console.log(id);

  useEffect(() => {
    if (id) {
      fetch(`/api/avo/${id}`).then((res) =>
        res.json().then((data) => setProduct(data))
      );
    }
  }, [id]);

  return (
    <div className="product-container">
      <div className="product_presentation">
        <img src={product.image} alt={product.name} />
        <div className="product_presentation-info">
          <h2>{product.name}</h2>
          <span>{product.sku}</span>
        </div>
      </div>
      <div className="product_about">
        <h3>About this avocado</h3>
        <p>{product.attributes?.description}</p>
      </div>
      <hr />
      <div className="product_attributes"></div>
      <table className="ui celled table">
        <thead className="">
          <tr className="">
            <th colSpan="2" className="">
              Attributes
            </th>
          </tr>
        </thead>
        <tbody className="">
          <tr className="">
            <td className="attr-name">shape</td>
            <td className="">{product.attributes?.shape}</td>
          </tr>
          <tr className="">
            <td className="attr-name">hardiness</td>
            <td className="">{product.attributes?.hardiness}</td>
          </tr>
          <tr className="">
            <td className="attr-name">taste</td>
            <td className="">{product.attributes?.taste}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductItem;
