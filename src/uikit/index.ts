import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;

export const TextInput = styled.input`
  padding: 1rem 0.5rem;
`;

export const Button = styled.a`
  padding: 0.5rem;
  width: 100%;
  border: 2px solid #444444;
  color: #444444;
  cursor: pointer;
  &:hover {
    color: #ffffff;
    background-color: #444444;
  }
`;

export const Paragraph = styled.p``;

export const Header = styled.h3`
  text-transform: uppercase;
`;
