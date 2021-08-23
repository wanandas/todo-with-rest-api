import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "../uikit";
import { SCREEN } from "../utils/SCREEN";

interface Props {
  isActive: boolean;
}

interface ITodo {
  title?: string;
  description?: string;
}

export function Modal({
  handleCreatetodo,
}: {
  handleCreatetodo: ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => void;
}) {
  const [open, setOpen] = useState<boolean>(false);
  const [todo, setTodo] = useState<ITodo>({ title: "", description: "" });

  return (
    <>
      <ContainAddTodo onClick={() => setOpen(!open)}>
        <button>+</button>
      </ContainAddTodo>

      <ModalContainer isActive={open}>
        <ModalContent>
          <CloseBtn onClick={() => setOpen(!open)}>&times;</CloseBtn>
          <div style={{ textAlign: "center" }}>
            <h1>CREATE TODO</h1>
          </div>
          <TextInputContainer>
            <TextInputLabel>TITLE :</TextInputLabel>
            <TextInput
              placeholder=""
              value={todo?.title}
              onChange={(e) =>
                setTodo({ ...todo, title: e.target.value.trim() })
              }
            />
          </TextInputContainer>

          <TextInputContainer>
            <TextInputLabel>CONTENT :</TextInputLabel>
            <TextInputArea
              placeholder=""
              value={todo?.description}
              onChange={(e) =>
                setTodo({ ...todo, description: e.target.value.trim() })
              }
            />
          </TextInputContainer>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Button
              onClick={() => {
                if (
                  todo?.description === undefined ||
                  todo?.title === undefined ||
                  todo?.description === "" ||
                  todo?.title === ""
                ) {
                  alert("need input data");
                } else {
                  handleCreatetodo({
                    title: todo.title,
                    description: todo.description,
                  });
                  setTodo({ title: "", description: "" });
                  setOpen(!open);
                }
              }}
            >
              SAVE
            </Button>
          </div>
        </ModalContent>
      </ModalContainer>
    </>
  );
}

const ContainAddTodo = styled.div`
  display: flex;
  border-radius: 0.25rem;
  box-shadow: 5px 5px 12px 1px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  & button {
    border: none;
    font-weight: 800;
    font-size: 3rem;
    background-color: #ffffff;
  }
  &:hover {
    & button {
      opacity: 0.5;
    }
  }
`;

export const CreateButton = styled(Button)`
  padding: 0.5rem 0.5rem;
  width: 100%;
  border: 2px solid #94d490;
  color: #94d490;
  cursor: pointer;
  &:hover {
    color: #ffffff;
    background-color: #94d490;
  }
`;

const TextInputContainer = styled.div`
  display: flex;
  align-items: center;
  &:not(:nth-child(1)) {
    margin-top: 1rem;
  }
`;
const TextInputLabel = styled.label`
  font-weight: 700;
  width: 30%;
`;

const TextInput = styled.input`
  width: 50%;
  font-size: 14px;
  padding: 10px;
  background: #dfdfdf;
  border: none;
  border-radius: 3px;
`;
const TextInputArea = styled.textarea`
  width: 50%;
  font-size: 14px;
  padding: 10px;
  background: #dfdfdf;
  border: none;
  border-radius: 3px;
  resize: vertical;
`;

const ModalContainer = styled.div<Props>`
  display: ${(props) => (props.isActive ? "unset" : "none")};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.7);
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 50% auto; /* 15% from the top and centered */
  padding: 20px;
  border-radius: 0.5rem;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */

  @media (min-width: ${SCREEN.md}) {
    margin: 20% auto;
    width: 60%;
  }
  @media (min-width: ${SCREEN.xl}) {
    margin: 10% auto;
  }
  @media (min-width: ${SCREEN["xl"]}) {
    width: 40%;
  }
`;

export const CloseBtn = styled.span`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;

  &:hover,
  &:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;
