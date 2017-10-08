import React from "react";
import styled from "styled-components";
import FA from "react-fontawesome";

const Wrapper = styled.div`
  width: 350px;

  padding: 2.5rem 2.5rem 0 2.5rem;

  font-family: system-ui;

  background: #fff;
`;

const Back = styled.div`
  display: flex;
  align-items: center;

  color: #888;

  font-size: 0.8rem;
  font-weight: 600;

  margin-bottom: 2rem;
`;

const LeftArrow = styled(FA).attrs({
  name: "long-arrow-left"
})`
    margin-right: 0.5rem;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 50px;
  height: 50px;

  border-radius: 5px;

  margin: 0 auto;
  margin-bottom: 2rem;

  background: linear-gradient(to bottom right, #fc5c7d, #6a82fb);
`;

const Logo = styled(FA).attrs({
  name: "superpowers"
})`
    color: white;
    font-size: 2rem;
`;

const Text = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
`;

const Big = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
`;

const Small = styled.div`
  font-size: 0.8rem;
  color: #999;
`;

const Form = styled.form`margin-bottom: 1.75rem;`;

const Field = styled.div`margin-bottom: 1.5rem;`;

const Label = styled.label`
  display: block;

  font-size: 0.8rem;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem 0;
  border: 0;
  border-bottom: 1px solid #ddd;
`;

const Forgot = styled.div`
  text-align: right;
  font-size: 0.8rem;
  font-weight: bold;
  color: #f569ee;
  margin-bottom: 6rem;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: -2.5rem;
  margin-right: -2.5rem;
  color: white;
  height: 50px;

  font-weight: bold;
  font-size: 0.9rem;

  background: #f569ee;
`;

const Login = () => (
  <Wrapper>
    <Back>
      <LeftArrow /> Back
    </Back>

    <LogoWrapper>
      <Logo />
    </LogoWrapper>

    <Text>
      <Big>Welcome Back</Big>
      <Small>Sign in to continue</Small>
    </Text>

    <Form>
      <Field>
        <Label>Email</Label>
        <Input type="text" />
      </Field>

      <Field>
        <Label>Password</Label>
        <Input type="password" />
      </Field>
    </Form>

    <Forgot>Forgot Password?</Forgot>

    <Footer>Sign In</Footer>
  </Wrapper>
);

export default Login;
