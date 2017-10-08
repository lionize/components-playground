import React from "react";
import styled from "styled-components";
import DrugIcon from "./DrugIcon";
import FA from "react-fontawesome";

const Wrapper = styled.div`
  display: flex;

  padding: 0.75rem;

  box-shadow: 0 10px 20px 2px rgba(0, 0, 0, 0.09);

  margin-bottom: 1rem;
`;

const Details = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Name = styled.div`
  font-size: 0.9rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 0.15rem;
`;

const Size = styled.div`font-size: 0.7rem;`;

const Price = styled.div`
  font-size: 0.75rem;
  font-weight: 500;
  margin-bottom: 0.15rem;
`;

const PurchaseIcon = styled(FA).attrs({
  name: "check-circle-o"
})`
  text-align: right;
  color: #aaa;
`;

const direction = () => {
  const directions = [
    "to right",
    "to left",
    "to top",
    "to bottom",
    "to top right",
    "to bottom right",
    "to top left",
    "to bottom left"
  ];

  return directions[Math.floor(Math.random() * directions.length)];
};

const gradient = ([first, second]) =>
  `linear-gradient(${direction()}, ${first}, ${second})`;

const DrugCard = ({ name, size, price, colors }) => (
  <Wrapper>
    <DrugIcon background={gradient(colors)} />
    <Details>
      <div>
        <Name>{name}</Name>
        <Size>{size}</Size>
      </div>
      <div style={{ textAlign: "right" }}>
        <Price>{price}</Price>
        <PurchaseIcon />
      </div>
    </Details>
  </Wrapper>
);

export default DrugCard;
