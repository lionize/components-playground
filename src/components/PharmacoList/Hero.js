import React from "react";
import styled from "styled-components";
import DrugIcon from "./DrugIcon";

const pill = require("./pill.png");

const Wrapper = styled.div`
  display: flex;

  margin-bottom: 1rem;

  border-radius: 12px;

  color: white;
  background: linear-gradient(to bottom left, #f569ee, #6a82fb);
`;

const DrugDetails = styled.div`
  width: 70%;
  padding: 1rem;
  padding-right: 2rem;
  border-width: 0 1px 0 0;
  border-style: solid;
  border-color: rgba(255, 255, 255, 0.25);
`;

const DrugHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const DrugTitle = styled.h1`
  margin: 0;
  padding: 0;

  font-size: 0.9rem;
  letter-spacing: 1px;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Detail = styled.div``;

const DetailName = styled.div`
  margin-bottom: 0.5rem;
  font-size: 0.6rem;
`;

const DetailBody = styled.div`font-size: 0.7rem;`;

const DrugRatings = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
`;

const Rating = styled.div`
  font-size: 1.4rem;
  letter-spacing: 1px;
  font-weight: 700;
  margin-bottom: 0.9rem;
`;

const Ratings = styled.div`font-size: 0.5rem;`;

const Hero = () => (
  <Wrapper>
    <DrugDetails>
      <DrugHeader>
        <DrugIcon />
        <DrugTitle>Fever Pack</DrugTitle>
      </DrugHeader>
      <Details>
        <Detail>
          <DetailName>Date</DetailName>
          <DetailBody>15 days</DetailBody>
        </Detail>
        <Detail>
          <DetailName>Time</DetailName>
          <DetailBody>3 times</DetailBody>
        </Detail>
        <Detail>
          <DetailName>Price</DetailName>
          <DetailBody>$ 50</DetailBody>
        </Detail>
      </Details>
    </DrugDetails>
    <DrugRatings>
      <Rating>4.0</Rating>
      <Ratings>3512 ratings</Ratings>
    </DrugRatings>
  </Wrapper>
);

export default Hero;
