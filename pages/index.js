// NextJs trabaja con react, por lo que se hace un componente de react para mostrar datos
import React, { useEffect, useState } from "react";
import { AvoCard } from "../components/AvoCard";

// Como el archivo se llama index autamaticamente es la pagina principal
const Index = () => {
  const [productList, setproductList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/avo").then((resp) => {
      resp.json().then(({ data, length }) => setproductList(data));
    });
  }, [productList]);

  return (
    <>
      <div className="avo-container">
        {productList.map((p) => (
          <AvoCard key={p.id} {...p} />
        ))}
      </div>
    </>
  );
};

export default Index;
