import React from "react";
import styled from "styled-components";

const primary = "#0988BA";
const secondary = "rgba(38, 193, 255, 0.25);";

const Wrapper = styled.div`
  width: 350px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  box-sizing: border-box;

  border: 1px solid #ccc;
  border-radius: 5px;

  font-family: system-ui;
  font-size: 0.9rem;
`;

const Notifications = styled.div`
  padding: 0.5rem;
  margin-left: 1.25rem;
  border-left: 1px solid ${secondary};
`;

const Notification = styled.div`
  padding: 12px;
  position: relative;

  &:before {
    content: "";
    display: inline-block;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    border: 2px solid ${primary};
    position: absolute;
    top: 14px;
    left: -14px;
    z-index: 1;
    background-color: #fff;
  }
`;

const Body = styled.div`
  color: #666;
  font-size: 0.8rem;
  margin-bottom: 4px;
  line-height: 1.2;
`;

const Date = styled.div`
  color: #bbb;
  font-size: 0.7rem;
  text-transform: uppercase;
`;

const InvoiceLink = styled.a`
  font-weight: bold;
  border-bottom: 1px solid #ddd;
`;

const Link = styled.a`
  text-decoration: underline;
  text-decoration-color: #ddd;
`;

const Footer = styled.div`
  width: 100%;

  padding: 0.75rem;

  color: ${primary};

  border-top: 1px solid #eee;

  font-size: 0.8rem;
  font-weight: bold;
  text-align: center;
`;

const DropdownNotifications = () => (
  <Wrapper>
    <Notifications>
      <Notification>
        <Body>
          Mark Chandler viewed your Invoice <InvoiceLink>#5221</InvoiceLink>.
        </Body>
        <Date>Oct 5, 2017 3:39PM</Date>
      </Notification>
      <Notification>
        <Body>
          Curtis Schumacher sent a <Link>contract</Link> to mark@test.com.
        </Body>
        <Date>Oct 5, 2017 3:39PM</Date>
      </Notification>
      <Notification>
        <Body>
          David Felix created a new <Link>contract</Link> for ChanChan.io.
        </Body>
        <Date>Oct 5, 2017 3:39PM</Date>
      </Notification>
    </Notifications>
    <Footer>View More</Footer>
  </Wrapper>
);

export default DropdownNotifications;
