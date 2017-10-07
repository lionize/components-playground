import React from "react";
import styled from "styled-components";
import FA from "react-fontawesome";

const colors = {
  background: "#D7D7D7",
  font: {
    dark: "#555555",
    light: "#808080"
  }
};

const Wrapper = styled.div`
  width: 400px;
  background-color: #d8d7d8;
  font-family: Futura;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #555555;
  text-align: center;
  font-size: 0.9rem;
  padding-top: 2rem;
`;

const PaddingBox = styled.div`padding: 0 2rem;`;

const Title = styled(PaddingBox)`
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  font-weight: normal;
  font-size: 0.9rem;
  letter-spacing: 1px;
  margin-bottom: 4.5rem;
`;

const SignupImage = styled(FA)`
  background-color: #cecece;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  color: #555;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const SignupText = styled.div``;

const LargeText = styled.p`
  font-size: 0.7rem;
  letter-spacing: 1.5px;
  color: #808080;
  text-transform: uppercase;
`;
const SmallText = styled.p`
  color: #8f8f8f;
  font-size: 0.75rem;
  letter-spacing: 1px;
  margin-bottom: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem 4rem;
  width: 100%;
  border-radius: 10px;
  margin-bottom: 4rem;
`;
const Input = styled.input`
  width: 100%;
  padding: 1.25rem;
  background: #f6f6f6;
  border: 1px solid #e9e9e9;
  font-family: Futura;
  z-index: 1;

  &::placeholder {
    color: #b0b0b0;
    letter-spacing: 1px;
    font-size: 0.7rem;
  }

  &:first-of-type {
    border-radius: 5px 5px 0 0;
  }

  &:last-of-type {
    border-radius: 0 0 5px 5px;
  }
`;
const Button = styled.div`
  margin-top: -4px;
  background-color: #e0e0e0;
  padding: 1.25rem;
  text-transform: uppercase;
  font-size: 0.8rem;
  border-radius: 10px;
`;

const Footer = styled.div`
  background-color: #525969;
  width: 100%;
  height: 25px;
`;
const Bubble = styled.div`
  background-color: #3e4556;
  width: 100px;
  margin: 0 auto;
  margin-top: -20px;
  color: #a2a2a2;
  padding: 0.5rem;
  border-radius: 20px;
  text-transform: uppercase;
  font-size: 0.7rem;
  letter-spacing: 1px;
`;

const MobileRegistrationForm = () => (
  <Wrapper>
    <Title>Sign Up</Title>
    <SignupImage name="users" />
    <SignupText>
      <LargeText>Free Account</LargeText>
      <SmallText>Limited feature, slow upload speed</SmallText>
    </SignupText>
    <Form>
      <Input type="text" placeholder="Username" />
      <Input type="text" placeholder="Password" />
      <Input type="text" placeholder="Confirm Password" />
      <Button>Sign Up Now</Button>
    </Form>
    <Footer>
      <Bubble>Premium</Bubble>
    </Footer>
  </Wrapper>
);

export default MobileRegistrationForm;
