import React from 'react';

import { Container, Box, Bcadastro, Bregistro } from './styles';

function Login() {
  return <Container>
    <Box>
      <h1><span>TO</span>DO</h1>
      <div>
        <label htmlFor="nome">Nome</label>
        <input placeholder="Nome" type="text" name="nome"/>

        <label htmlFor="Usuário">Usuário</label>
        <input placeholder="Usuário" type="text" name="usuario"/>

        <label htmlFor="Senha">Senha</label>
        <input placeholder="Senha" type="password" name="senha"/>

        <Bregistro>Cadastrar</Bregistro>
      </div>
    </Box>
  </Container>;
}

export default Login;