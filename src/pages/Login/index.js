import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom'
import api from './../../service/api'

import { Container, Box, Bcadastro, Bregistro } from './styles';

function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLogged, setIsLogged] = useState(false)


  useEffect(() => {
    localStorage.getItem('auth')
    setIsLogged(localStorage.getItem('auth'))
  },[])
  const sigin = (e) => {
    e.preventDefault();
    api.post('/login', { username, password })
      .then(response => {
        localStorage.setItem('token', response.data.token)
        setIsLogged(true)
      })
      .catch(error => console.log(error))
  }

  return <Container>
    <Box>
      <h1><span>TO</span>DO</h1>
      <div>
        {
          isLogged ? <Redirect to="/" /> :
          <form onSubmit={ sigin }>

          <label htmlFor="Usuário">Usuário</label>
          <input placeholder="Usuário" onChange={e => setUsername(e.target.value)} type="text" value={username} name="username"/>

          <label htmlFor="Senha">Senha</label>
          <input placeholder="Senha" onChange={e => setPassword(e.target.value)} type="password" value={password} name="pass"/>

          <Bcadastro type="submit">Entrar</Bcadastro>
          <Bregistro>Cadastrar</Bregistro>
          </form>
        }
      </div>
    </Box>
  </Container>;
}

export default Login;