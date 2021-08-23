import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, withRouter } from "react-router-dom";
import styled from "styled-components";
import { IUser, postLogin } from "../../function/postLogin";
import { Box, Button, Header, TextInput } from "../../uikit";

export function LoginPage({
  setToken,
}: {
  setToken: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [user, setUser] = useState<IUser>({
    username: "",
    password: "",
  });

  let history = useHistory();

  return (
    <LoginPageContainer>
      <LoginContainer>
        <Box>
          <Box style={{ flexDirection: "row", gap: "1rem" }}>
            <Header>username</Header>
            <TextInput
              value={user.username}
              onChange={(e) => {
                setUser((pre) => {
                  return { ...pre, username: e.target.value };
                });
              }}
            />
          </Box>
          <Box style={{ flexDirection: "row", gap: "1rem" }}>
            <Header style={{ width: "50%" }}>Password</Header>
            <TextInput
              type="password"
              value={user.password}
              onChange={(e) => {
                setUser((pre) => {
                  return { ...pre, password: e.target.value };
                });
              }}
            />
          </Box>
        </Box>
        <Box>
          <Button
            type="submit"
            onClick={async () => {
              if (user.password === "" || user.username === "") {
                alert(`need input username or password`);
              } else {
                const [data, err] = await postLogin({ user });
                if (data) {
                  setToken(data.token);
                  history.push("/");
                }
                if (err) return alert(err.message);
              }
            }}
          >
            Login
          </Button>
        </Box>
      </LoginContainer>
    </LoginPageContainer>
  );
}

const LoginPageContainer = styled(Box)`
  min-height: 100vh;
`;

const LoginContainer = styled(Box)`
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #444444;
`;
