import styled from "@emotion/styled";

export const Container = styled.div`
  margin-top: 64px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const ChartContainer = styled.div`
  height: 368px;
  width: 368px;
`;

export const CustomUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 48px;
  padding: 0;
`;

export const CustomLi = styled.li`
  width: 100px;
  margin-top: 16px;
  list-style-type: none;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Image = styled.img`
  margin: auto;
  height: 32px;
  width: 32px;
  object-fit: cover;
`;

export const CustomSpan = styled.span`
  margin: auto;
`;
