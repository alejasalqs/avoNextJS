import React from "react";
import Link from "next/link";

export const AvoCard = ({ name, price, image, id }) => {
  return (
    <Link href={`product/${id}`}>
      <div className="avo-card">
        <img src={image} alt={name} />
        <div className="avo-card_content">
          <h2>{name}</h2>
          <span>{price}</span>
        </div>
      </div>
    </Link>
  );
};
