import React from 'react';
import { StyledMenu } from './StyledMenu';
import logo from '../../assets/img/profile.png'
import { Link,NavLink } from 'react-router-dom';
const Menu = ({ open }) => {
  const name=sessionStorage.getItem('name')
  return (
    <StyledMenu open={open}>
      <img src={logo} className="Logo" alt="loldesign logo"></img>
      <br></br>
      <br></br>
      <p>Bem vindo(a), {name}</p>
      <a><Link className="Link" to='/home'>Home</Link></a>
      <a><NavLink className="Link" to='/professional'>Profissionais</NavLink></a>
      <a ><Link className="Link" to='/unity'>Unidades</Link></a>
      <a>Estatísticas</a>
      <a><Link className="Link" to='/register'>Adicionar Profissional</Link></a>
      <a><NavLink className="Link" to='/'>Sair</NavLink></a>
    </StyledMenu>
  )
}

export default Menu;