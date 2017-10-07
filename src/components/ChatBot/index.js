import React from "react";
import styled from "styled-components";
import FA from "react-fontawesome";

const colors = {
  primary: "#6974EB",
  secondary: "#D3D7FE"
};

const Wrapper = styled.div`
  width: 325px;
  background-color: #fafafa;
  font-family: system-ui;
  font-size: 0.8rem;
  border-radius: 25px;
  box-sizing: border-box;
  border: 12px solid black;
  font-smooth: auto;
`;

const PaddingBox = styled.div`padding: 0.75rem 1.25rem;`;

const Header = styled(PaddingBox)`
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderText = styled.div``;
const Small = styled.h2`
  margin: 0;
  font-size: 0.7rem;
  font-weight: bold;
  color: #aaa;
`;
const Title = styled.h1`
  margin: 0;
  font-size: 1.4rem;
  font-weight: bold;
`;
const UserIcon = styled(FA)`
  font-size: 2rem;
  position: relative;

  &:after {
    content: "";
    width: 8px;
    height: 8px;
    background-color: lime;
    border-radius: 50%;
    border: 2px solid #fafafa;
    position: absolute;
    top: -2px;
    right: -2px;
  }
`;

const Body = styled(PaddingBox)`
  margin-top: 0.5rem;
  background-color: #fefefe;
  margin-bottom: 0.75rem;
`;

const Messages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

const Message = styled.div`
  display: inline-block;
  padding: 0.75rem;
  margin-bottom: 1rem;
  line-height: 1.4;
`;
const Date = styled(Message)`
  padding: 0.25rem;
  border-radius: 20px;
  background-color: ${colors.secondary};
  color: ${colors.primary};
  font-weight: 600;
  letter-spacing: -1px;
  width: 60px;
  text-align: center;
  margin-bottom: 1.5rem;
`;
const BotMessages = styled.div`
  margin-left: 2.5rem;
  position: relative;
`;
const BotIcon = styled(FA)`
  max-width: 40px;
  position: absolute;
  top: 1px;
  left: -45px;
  color: white;
  background-color: ${colors.primary};
  font-size: 1.5rem;
  padding: 0.5rem;
  border-radius: 50%;
`;
const BotMessage = styled(Message)`
  background-color: #fff;
  border-radius: 20px 20px 20px 2px;
  box-shadow: 0 0 15px -2px rgba(0, 0, 0, 0.25);
  align-self: flex-start;
`;
const UserMessage = styled(Message)`
  background-color: ${colors.primary};
  color: white;
  border-radius: 20px 20px 2px 20px;
  align-self: flex-end;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Button = styled.div`
  background-color: ${colors.primary};
  color: white;
  padding: 1rem;
  width: 125px;
  text-align: center;
  font-weight: bold;
  font-size: 1.1rem;
  border-radius: 5px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.25);
`;

const MessageInput = styled.input`
  height: 50px;
  width: 100%;
  border-style: solid;
  border-color: #e0e0e0;
  border-width: 1px 0;
  background: linear-gradient(to bottom, #f5f5f5, #fefefe);
  padding: 0.75rem 1.25rem;
  font-size: 0.8rem;

  &::placeholder {
    font-size: 0.8rem;
  }
`;

const BottomMenu = styled(PaddingBox)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.3rem;
`;
const MenuButton = styled(FA)`
  padding: 1rem 0;
  color: ${props => (props.active ? colors.primary : "#aaa")};
`;
const MainButton = styled(FA)`
  padding: 1rem 0;
  padding: 1rem;
  border-radius: 50%;
  color: white;
  background-color: ${colors.primary};
`;

const RandomLine = styled.div`
  width: 40%;
  height: 3px;
  background-color: #ced2db;
  margin: 0 auto;
  margin-bottom: 15px;
`;

const ChatBot = () => (
  <Wrapper>
    <Header>
      <HeaderText>
        <Small>Setting up your account</Small>
        <Title>Get to know you</Title>
      </HeaderText>
      <UserIcon name="user-circle" />
    </Header>

    <Body>
      <Messages>
        <Date>Today</Date>
        <BotMessages>
          <BotIcon name="commenting-o" />
          <BotMessage>Hello, my name is BOTSY.</BotMessage>
          <BotMessage>
            I am your virtual personal trainer for all your financial related
            goals. First, let me ask you a couple of questions to get to know
            you better!
          </BotMessage>
          <BotMessage>Should we proceed?</BotMessage>
        </BotMessages>
        <UserMessage>I'm a man</UserMessage>
      </Messages>
      <Buttons>
        <Button>Yes</Button>
        <Button>No</Button>
      </Buttons>
    </Body>
    <MessageInput placeholder="Press here to talk to BOTSY." />
    <BottomMenu>
      <MenuButton name="envelope" active />
      <MenuButton name="dollar" />
      <MainButton name="plus" primary />
      <MenuButton name="id-card" />
      <MenuButton name="gear" />
    </BottomMenu>
    <RandomLine />
  </Wrapper>
);

export default ChatBot;
