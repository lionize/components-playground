import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #525f7f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-weight: 600;
  font-family: system-ui;
  font-size: 16px;
  padding: 80px 0;
  width: calc(100% - 160px);
  margin: 0 auto;
`;

const Div = styled.div`
  display: flex;
  margin: 0 15px 30px;
  padding: 0 20px;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 100%;
`;

const Input = styled.input`
  color: #fff;
  font-size: 16px;
  padding: 10px 20px 11px;
  background-color: #7488aa;
  border-radius: 20px;
  outline: none;
  appearance: none;
  border-style: none;
  width: ${props => {
    if (props.half) return "calc(50% - (5px / 2))";
    if (props.third) return "calc(33% - (5px / 3))";
    return "100%";
  }};

  &:focus {
    color: #424770;
    background-color: #f6f9fc;
  }

  + input {
    margin-top: 6px;
  }

  &::placeholder {
    color: #9bacc8;
  }

  ${props => {
    if (props.invalid)
      return `
        background-color: #fa755a;

        &:focus {
            color: #fa755a;
        }
      `;
  }};
`;

const Submit = styled.input`
  display: block;
  width: 100%;
  height: 40px;
  background-color: #fcd669;
  border-radius: 20px;
  border-style: none;
  color: #525f7f;
  text-transform: uppercase;
  text-align: center;
  font-weight: 600;
  font-size: 1rem;
`;

const formatCardNumber = input => {
  const regex = /[^0-9]/g;
  input = input.replace(regex, "");

  if (input.length > 4) {
    const numberGroups = [];

    let collector = "";
    for (let i = 1; i <= input.length; i++) {
      collector += input[i - 1];

      if (i % 4 == 0) {
        numberGroups.push(collector);
        collector = "";
      }
    }

    if (collector.length > 0) numberGroups.push(collector);

    const result = numberGroups.slice(0, 4).join(" ");
    return result;
  }

  return input;
};

const formatExpirationDate = input => {
  const regex = /[^0-9]/g;
  input = input.replace(regex, "");

  if (input.length > 2) {
    const numberGroups = [];

    let collector = "";
    for (let i = 1; i <= input.length; i++) {
      collector += input[i - 1];

      if (i % 2 == 0) {
        numberGroups.push(collector);
        collector = "";
      }
    }

    if (collector.length > 0) numberGroups.push(collector);

    const result = numberGroups.slice(0, 2).join(" / ");
    return result;
  }

  return input;
};

class StripePayment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cardNumber: "",
      expirationDate: ""
    };

    this.onCardNumberChange = this.onCardNumberChange.bind(this);
    this.onExpirationDateChange = this.onExpirationDateChange.bind(this);
  }

  onCardNumberChange(e) {
    const { value } = e.target;

    const cardNumber = formatCardNumber(value);

    this.setState({
      cardNumber
    });
  }

  onExpirationDateChange(e) {
    const { value } = e.target;

    const expirationDate = formatExpirationDate(value);

    this.setState({
      expirationDate
    });
  }

  render() {
    return (
      <Wrapper>
        <Div>
          <Input type="text" name="name" placeholder="Name" />
          <Input type="text" name="email" placeholder="Email" half />
          <Input type="text" name="phone" placeholder="Phone" half />
        </Div>

        <Div>
          <Input
            type="text"
            name="cardNumber"
            placeholder="1234 1234 1234 1234"
            onChange={this.onCardNumberChange}
            value={this.state.cardNumber}
            invalid
          />
          <Input
            type="text"
            name="expirationDate"
            placeholder="MM / YY"
            onChange={this.onExpirationDateChange}
            value={this.state.expirationDate}
            invalid
            third
          />
          <Input type="text" name="cvc" maxLength="4" placeholder="CVC" third />
          <Input
            type="text"
            name="zip"
            maxLength="5"
            placeholder="90120"
            third
          />
        </Div>

        <Div>
          <Submit value="Pay $25" />
        </Div>
      </Wrapper>
    );
  }
}

export default StripePayment;
