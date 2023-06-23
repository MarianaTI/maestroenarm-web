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
        <p className="ImportantText">{productName}</p>
        <p className="ImportantText">$ {productPrice}</p>
      </Row>
      <p className="DetailText">
        {productTopics}
      </p>
    </DetailContainer>
  );
};

export default CustomShoppingDetails;
