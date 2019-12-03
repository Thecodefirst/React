import React from 'react';
import { Container, Typography } from '@material-ui/core'
import { LoginContent } from "./style";

function Login() {
  return (
    <LoginContent>
      <div className="Login">
        <Container maxWidth="md">
          <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
        </Container>
      </div>
    </LoginContent>
  );
}

export default Login;
