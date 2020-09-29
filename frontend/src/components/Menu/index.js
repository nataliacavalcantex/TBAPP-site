import React,{useEffect, useState} from 'react';
import { StyledMenu } from './StyledMenu';
import logo from '../../assets/img/profile.png'
import { Link,NavLink } from 'react-router-dom';
import api from '../../services/api'
const Menu = ({ open }) => {
  const[name,setName]=useState('')
  const token= sessionStorage.getItem('token')
  async function getUser(){
    const res = await api.get('/user',{
        headers: { Authorization: "Bearer " + token }})
    console.log(res.data.name)
    setName(res.data.name) 
}
useEffect(()=>{
  getUser()
})
  return (
    <StyledMenu open={open}>
      {/* <img src={logo} className="Logo" alt="loldesign logo"></img> */}
      <p>Bem vindo(a), {name}</p>
      <a><Link className="Link" to='/home'>Home</Link></a>
      <a><Link className="Link" to='/profile'>Meus Dados</Link></a>
      <a><NavLink className="Link" to='/professional'>Profissionais</NavLink></a>
      <a ><Link className="Link" to='/unity'>Unidades</Link></a>
      <a>Estatísticas</a>
      <a><Link className="Link" to='/register'>Adicionar Profissional</Link></a>
      <a><NavLink className="Link" to='/'>Sair</NavLink></a>
    </StyledMenu>
  )
}

export default Menu;