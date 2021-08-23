import React from "react";
import styled from "styled-components";
import { Todolist } from "../../component/Todolist/TodoList";
import { Box } from "../../uikit";
import { SCREEN } from "../../utils/SCREEN";

export default function TodoPage({ token }: { token: string }) {
  console.log(token);
  return (
    <PageContainer>
      <ContentContainer>
        <div style={{ textAlign: "center" }}>
          <h1>TODOLIST</h1>
        </div>
        <Todolist />
      </ContentContainer>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  min-height: 100vh;
  box-sizing: border-box;
  @media (min-width: ${SCREEN.md}) {
    background-color: rgb(126, 126, 126);
    padding: 5% 0 4%;
  }
`;

const ContentContainer = styled.div`
  width: 90%;
  background-color: #ffffff;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 0.5rem;
  min-height: 80vh;
  @media (min-width: ${SCREEN.md}) {
    box-shadow: 5px 5px 12px 1px rgba(0, 0, 0, 0.5);
    width: 70%;
  }
`;
