import React from 'react';
import { Link} from 'react-router-dom'
import { LogOut } from 'react-feather';
import api from './../../service/api'

import { Container, Logo, Logout, Red } from './styles';

function Header(props) {
    const sigout = (e) => {
    e.preventDefault();
    api.post('/logout')
      .then(response => {
        localStorage.setItem('token', response.data.token)
      })
      .catch(error => console.log(error))
  }
  return (
      <Container>
        <Logo>To<Red>DO</Red></Logo>
        <Logout><Link to="/logout">Sair</Link><LogOut color="black" size={24} /></Logout>
      </Container>
  );
}

export default Header;