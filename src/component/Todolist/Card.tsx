import React, { useState } from "react";
import styled from "styled-components";
import { ITodoState } from "../../App";
import { Button } from "../../uikit";
import { CloseBtn } from "../Modal";

export function Card({
  todo,
  handleDelete,
  handleUpdate,
}: {
  todo: ITodoState;
  handleDelete: (id: string) => Promise<void>;
  handleUpdate: ({
    id,
    title,
    description,
  }: {
    id: string;
    title: string;
    description: string;
  }) => Promise<void>;
}) {
  const [item, setItem] = useState<ITodoState>(todo);
  console.log(item);
  return (
    <CardContainer>
      <CardDeletebtn
        onClick={async () => {
          if (window.confirm("please ensure and then confirm!")) {
            await handleDelete(todo._id);
            alert("delete success");
          } else {
            alert("cancel delete");
          }
        }}
      >
        &times;
      </CardDeletebtn>
      <CardTitle
        value={item.title}
        onChange={(e) => {
          setItem((pre) => {
            return { ...pre, title: e.target.value };
          });
        }}
      />
      <CardContent
        value={item.description}
        onChange={(e) => {
          setItem((pre) => {
            return { ...pre, description: e.target.value };
          });
        }}
      />
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <Button
          onClick={async () => {
            if (
              item?.description === undefined ||
              item?.title === undefined ||
              item?.description === "" ||
              item?.title === ""
            ) {
              alert(`todo ${item._id}  need input data`);
            } else {
              await handleUpdate({
                id: item._id,
                title: item.title,
                description: item.description,
              });
            }
          }}
        >
          SAVE
        </Button>
      </div>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  background-color: #dfdfdf;
  position: relative;
  padding: 1.5rem 2rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  border-radius: 0.25rem;
  box-shadow: 5px 5px 12px 1px rgba(0, 0, 0, 0.5);
  overflow: hidden;
`;

const CardDeletebtn = styled(CloseBtn)`
  position: absolute;
  color: #777777;
  top: 0;
  right: 0.5rem;
`;

const CardTitle = styled.input`
  text-transform: uppercase;
  border: none;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: #dfdfdf;
`;
const CardContent = styled.textarea`
  border: none;
  background-color: #dfdfdf;
  resize: vertical;
  height: 10rem;
  width: 100%;
`;
