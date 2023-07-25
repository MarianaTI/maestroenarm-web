import React from "react";
import { DetailContainer, Row } from "./index.style";

const CustomShoppingDetails = ({
  productName,
  productPrice,
  productTopics,
}) => {
  return (
    <DetailContainer>
      <span>Detalles de la compra</span>
      <Row>
        <p className="ImportantTextName">{productName}</p>
        <p className="ImportantTextPrice">$ {productPrice}</p>
      </Row>
      <p className="DetailText">
      {productTopics.join(", ").toLowerCase()}
      </p>
    </DetailContainer>
  );
};

export default CustomShoppingDetails;
