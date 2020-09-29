import React, { useEffect, useState } from 'react'
import profile from '../../assets/img/profile2.png'
import api from '../../services/api'
import './StyledHeader.css'
function Header(){
    
    const urlPhoto=sessionStorage.getItem('avatar_path')
    const photo=`http://localhost:3333/files/${urlPhoto}`
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
    return(
        <>
            <nav className="Menu">
                <div className="identify">
                    <p>Olá,{name}!<img src={photo ||profile} alt="tbapp profile"></img></p>         
                </div>
            </nav>
      </>
    )
}
export default Header