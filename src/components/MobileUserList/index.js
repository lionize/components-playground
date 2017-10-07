import React from "react";
import styled from "styled-components";
import FA from "react-fontawesome";
import { randomGradient } from "../CssShapes/gradient";
import { default as CircleShape } from "../CssShapes/Circle";

const Wrapper = styled.div`
  background-color: #fbfbfb;
  width: 400px;
  padding: 1rem 2rem;
  font-family: system-ui;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
`;

const IconLink = styled.a`
  font-weight: light;
  margin: 0;
  color: #666;
`;

const UserCards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const UserCard = styled.div`
  background-color: #fff;
  padding: 1.5rem;
  margin: 0.5rem 0;
  border-radius: 5px;
  box-shadow: 0 0 15px 0px rgba(0, 0, 0, 0.15);
  position: relative;
`;

const Circle = styled(CircleShape)`
  position: absolute;
  top: 5px;
  right: -18px;
`;

const Social = styled.div`
  display: flex;
  align-items: center;
`;

const LetterCircle = styled.div`
  width: 40px;
  height: 40px;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  background: ${props => props.color};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.25rem;
`;

const SocialIcons = styled.div`display: flex;`;

const SocialIcon = styled.div`
  width: 25px;
  height: 25px;
  background: #ccc;
  padding: 0.25rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.8rem;
  font-size: 0.75rem;
`;

const Line = styled.span`
  display: block;
  border: none;
  color: white;
  margin: 1.25rem 0.5rem;
  width: 15px;
  height: 2px;
  background: ${props => props.color};
`;

const UserDetails = styled.div`
  font-size: 0.9rem;
  color: #666;
`;

const P = styled.p`
  margin: 0;
  padding: 0;
`;

const UserName = styled(P)``;

const UserPhone = styled(P)`margin-top: 0.5rem;`;

const UserSettings = styled.div`
  position: absolute;
  bottom: 23px;
  right: 15px;
  color: #ddd;
`;

const colors = [randomGradient(), randomGradient(), randomGradient()];

const MobileUserList = () => (
  <Wrapper>
    <Menu>
      <IconLink href="#">
        <FA name="plus" />
      </IconLink>
      <IconLink href="#">
        <FA name="search" />
      </IconLink>
    </Menu>
    <UserCards>
      <UserCard>
        <Circle color={colors[0]} size="15px" />
        <Social>
          <LetterCircle color={colors[0]}>M</LetterCircle>
          <SocialIcons>
            <SocialIcon>
              <FA name="twitter" />
            </SocialIcon>
            <SocialIcon>
              <FA name="facebook" />
            </SocialIcon>
          </SocialIcons>
        </Social>

        <Line color={colors[0]} />

        <UserDetails>
          <UserName>Mark Chandler</UserName>
          <UserPhone>1-(999)999-9999</UserPhone>
        </UserDetails>

        <UserSettings>
          <FA name="drivers-license-o" />
        </UserSettings>
      </UserCard>

      <UserCard>
        <Circle color={colors[1]} size="15px" />
        <Social>
          <LetterCircle color={colors[1]}>C</LetterCircle>
          <SocialIcons>
            <SocialIcon>
              <FA name="instagram" />
            </SocialIcon>
          </SocialIcons>
        </Social>

        <Line color={colors[1]} />

        <UserDetails>
          <UserName>Curtis Schumacher</UserName>
          <UserPhone>1-(777)777-7777</UserPhone>
        </UserDetails>

        <UserSettings>
          <FA name="drivers-license-o" />
        </UserSettings>
      </UserCard>

      <UserCard>
        <Circle color={colors[2]} size="15px" />
        <Social>
          <LetterCircle color={colors[2]}>D</LetterCircle>
          <SocialIcons>
            <SocialIcon>
              <FA name="twitter" />
            </SocialIcon>
            <SocialIcon>
              <FA name="facebook" />
            </SocialIcon>
          </SocialIcons>
        </Social>

        <Line color={colors[2]} />

        <UserDetails>
          <UserName>Mark Chandler</UserName>
          <UserPhone>1-(999)999-9999</UserPhone>
        </UserDetails>

        <UserSettings>
          <FA name="drivers-license-o" />
        </UserSettings>
      </UserCard>
    </UserCards>
  </Wrapper>
);

export default MobileUserList;
