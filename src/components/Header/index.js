import React from 'react';
import { Link} from 'react-router-dom'
import { LogOut } from 'react-feather';

import { Container, Logo, Logout, Red } from './styles';

function Header(props) {
  return (
      <Container>
        <Logo>To<Red>DO</Red></Logo>
        <Logout><Link to="/logout">Sair</Link><LogOut color="black" size={24} /></Logout>
      </Container>
  );
}

export default Header;