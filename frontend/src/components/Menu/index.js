import React from 'react';
import { StyledMenu } from './StyledMenu';

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <p>Bem vindo(a),user.name</p>
      <a href="/">Unidades</a>
      <a href="/">Pacientes</a>
      <a href="/">Sair</a>
    </StyledMenu>
  )
}

export default Menu;