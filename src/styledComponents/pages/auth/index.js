import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Container, SubTitle, Title, Wrapper } from "./styled";
import ColoredLabel from "./../../commons/Buttons/ColoredLabel";
import Input from "./../../commons/Inputs/Input";
import LogInLayout from "../../commons/LogInLayout";

export const ButtonsGroup = styled.div`
  display: ${(props) => (props.disabled ? "none" : "flex")};
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 64px;
  padding: 0px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50%;
  width: 100%;
`;

const ErrorContainer = styled.div`
  display: ${(props) => (props.showError ? "block" : "none")};
  color: white;
  background-color: red;
  padding: 10px;
  margin-top: 10px;
`;

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSignIn = () => {
    if (username.trim() === "") {
      setError(true);
      return;
    }

    if (password.trim() === "") {
      setError(true);
      return;
    }

    setError(false);

    // Aquí puedes enviar los datos a tu backend para realizar la autenticación
    console.log("Nombre de usuario:", username);
    console.log("Contraseña:", password);
  };

  return (
    <LogInLayout>
      <Wrapper>
        <Container>
          <Title>¡Bienvenido de nuevo!</Title>
          <SubTitle>Ingresá tus datos para iniciar sesión</SubTitle>
          <div>
            <InputContainer>
              <Input
                type="text"
                placeholder="usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                type="password"
                placeholder="contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputContainer>
            <ButtonsGroup>
              <ColoredLabel
                color="#fafafa"
                label="Iniciar sesión"
                background="#243d7f"
                onClick={handleSignIn}
              />
            </ButtonsGroup>
            <ErrorContainer showError={error}>
              Por favor, ingrese un nombre de usuario y una contraseña válidos.
            </ErrorContainer>
          </div>
        </Container>
      </Wrapper>
    </LogInLayout>
  );
};

export default SignIn;

