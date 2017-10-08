import React from "react";
import styled, { css } from "styled-components";
import FA from "react-fontawesome";

const colors = {
  primary: "#333",
  secondary: "#aaa"
};

const slabFont = css`font-family: "Roboto Slab", serif;`;

const Wrapper = styled.div`
  width: 350px;

  padding: 2rem;

  background-color: #fff;

  font-family: system-ui;
`;

const Header = styled.div`
  color: ${colors.secondary};
  margin-bottom: 3rem;
`;

const LongArrowLeft = styled(FA).attrs({
  name: "long-arrow-left"
})`
    margin-right: 0.5rem;
`;

const Body = styled.div``;

const Date = styled.div`
  ${slabFont};
  text-transform: uppercase;
  padding-bottom: 0.25rem;
  letter-spacing: 1px;
  font-size: 0.9rem;
  color: ${colors.secondary};
  border-bottom: 1px solid ${colors.secondary};
`;

const Category = styled.div`
  margin: 1rem 0 2rem;
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 4px;
  text-transform: uppercase;
`;

const Posts = styled.div``;

const Post = styled.div`margin-top: 1.5rem;`;

const TitleWrapper = styled.div`
  ${slabFont};
  font-size: 1rem;
  max-width: 80%;
  line-height: 1.7;
  margin-bottom: 0.5rem;
`;

const Title = styled.span`
  background-color: #fcef79;
  margin: 0;
  padding: 2px;
`;

const Excerpt = styled.div`
  font-size: 0.7rem;
  line-height: 1.5;
`;

const Blog = () => (
  <Wrapper>
    <Header>
      <LongArrowLeft />
      Back
    </Header>
    <Body>
      <Date>October 8 2017</Date>
      <Category>Business</Category>
      <Posts>
        <Post>
          <TitleWrapper>
            <Title>Monsanto loses again</Title>
          </TitleWrapper>
          <Excerpt>
            Monsanto has found itself in a down-and-out fight with the
            government this year, and after spending millions on its legal
            defense, it finds itself with its back against the wall...
          </Excerpt>
        </Post>
        <Post>
          <TitleWrapper>
            <Title>Intellectual property a scam?</Title>
          </TitleWrapper>
          <Excerpt>
            A study released yesterday from The People's Think Tank details its
            investigation into the misuse of intellectual property laws around
            the globe...
          </Excerpt>
        </Post>
        <Post>
          <TitleWrapper>
            <Title>Nikkei posts highest gains in decade</Title>
          </TitleWrapper>
          <Excerpt>
            Sailing on rapidly-increasing sales in the Anime industry, Japan
            finds itself in the midst of an economic golden era...
          </Excerpt>
        </Post>
      </Posts>
    </Body>
  </Wrapper>
);

export default Blog;
