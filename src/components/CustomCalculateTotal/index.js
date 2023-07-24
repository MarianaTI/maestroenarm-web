import React from "react";
import { AcceptPaymentContainer, CalculateTotalContainer, Line, RowSummary } from "./index.style";

const CustomCalculateTotal = ({ originalPrice, totalPrice }) => {
  return (
    <AcceptPaymentContainer>
      <span>Resumen</span>
      <CalculateTotalContainer>
        <RowSummary>
          <p>Precio original:</p>
          <p>$ {originalPrice} MX</p>
        </RowSummary>
        <Line></Line>
        <RowSummary>
          <p className="ImportantText">Total:</p>
          <p className="ImportantText">$ {totalPrice} MX</p>
        </RowSummary>
      </CalculateTotalContainer>
    </AcceptPaymentContainer>
  );
};

export default CustomCalculateTotal;
