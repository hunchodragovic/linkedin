import React from "react";
import styled from "styled-components";
const Login = () => {
  return (
    <Container>
      <Nav>
        <a href="/">
          <img src="" alt="" />
        </a>
        <div>
          <Join>Join now</Join>
          <SignIn>Sign in</SignIn>
        </div>
      </Nav>
    </Container>
  );
};
const Container = styled.div`
  padding: 0px;
`;

export default Login;
