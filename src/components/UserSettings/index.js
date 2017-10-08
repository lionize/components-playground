import React from "react";
import styled, { css } from "styled-components";
import FA from "react-fontawesome";
import Tag from "./Tag";

const colors = {
  dark: "#666",
  light: "#aaa",
  ultralight: "#ccc",
  input: {
    background: "#f5f5f5",
    border: "#e0e0e0"
  }
};

const Wrapper = styled.div`
  margin: 2rem 0;
  width: 325px;
  background-color: #fff;
  font-family: system-ui;
  padding: 1.5rem 2rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 2rem;

  font-size: 0.9rem;
  color: ${colors.dark};
`;

const BackArrow = styled(FA)`font-size: 1em;`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 0.9em;
  letter-spacing: 0.5px;
`;

const EmptyDiv = styled.div``;

const Body = styled.div``;

const Form = styled.div``;
const Field = styled.div`
  margin-bottom: 1.75rem;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const Label = styled.label`
  display: block;

  margin-bottom: 0.75rem;

  font-size: 0.7rem;
  font-weight: 500;
  color: ${colors.light};
`;

const inputSharedStyles = css`
  width: 100%;
  padding: 0.6rem 0.75rem;

  color: ${colors.dark};
  font-size: 0.8rem;

  background-color: ${colors.input.background};
  border: 1px solid ${colors.input.border};
  border-radius: 3px;

  &:focus {
    background-color: #fff;
    border-color: ${colors.dark};
    outline: none;
  }

  &::placeholder {
    color: ${colors.ultralight};
  }
`;

const Input = styled.input.attrs({
  type: "text"
})`
  ${inputSharedStyles};
`;

const Textarea = styled.textarea`
  ${inputSharedStyles};
  height: 75px;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  margin-top: 0.25rem;
`;

const UserSettings = () => (
  <Wrapper>
    <Header>
      <BackArrow name="chevron-left" />
      <Title>Update Profile</Title>
      <EmptyDiv />
    </Header>

    <Body>
      <Form>
        <Field>
          <Label html="name">Name</Label>
          <Input name="name" placeholder="Name" />
        </Field>

        <Field>
          <Label htmlFor="email">Email</Label>
          <Input name="email" placeholder="Email" />
        </Field>

        <Field>
          <Label htmlFor="bio">Bio</Label>
          <Textarea name="bio" placeholder="Bio" />
        </Field>

        <Field>
          <Label htmlFor="url">URL</Label>
          <Input name="url" placeholder="URL" />
        </Field>

        <Field>
          <Label htmlFor="tags">Tags</Label>
          <Input name="tags" placeholder="Javascript, C++, Python, etc." />

          <Tags>
            <Tag>Javascript</Tag>
            <Tag>Kotlin</Tag>
            <Tag>Elixir</Tag>
            <Tag>Rust</Tag>
          </Tags>
        </Field>
      </Form>
    </Body>
  </Wrapper>
);

export default UserSettings;
