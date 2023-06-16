import React from "react";
import Link from "next/link";
import { StyledButton } from "./index.style";

function NavigationButton({ page, text, disabled }) {
  return (
    <Link href={page}>
      <StyledButton disabled={!!disabled}>
        <span>{text}</span>
      </StyledButton>
    </Link>
  );
}

export default NavigationButton;
