import React, { useState } from "react";
import styled from "styled-components";

const LoginFormSection = styled.div`
  width: calc(100% - 3vw);
  margin-top: 10px;
  color: rgb(94, 86, 86);
  text-align: center;
  font-weight: bold;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: min(48px, 5vw);
`;

const LoginInput = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 2rem;
  color: floralwhite;
  text-align: center;
`;

const LoginButton = styled.button`
  opacity: 0;
`;

const Login = ({ onLoginSubmit }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onLoginSubmit(username);
  };

  return (
    <LoginFormSection>
      <form id="login-form" onSubmit={handleSubmit}>
        <div id="loginGuideMsg"></div>
        <LoginInput
          id="login-input"
          type="text"
          maxLength="15"
          placeholder="Please write your name"
          autoFocus
          required
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <LoginButton type="submit"></LoginButton>
      </form>
    </LoginFormSection>
  );
};

export default Login;
