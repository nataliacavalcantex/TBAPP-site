import React from 'react'
import profile from '../../assets/img/profile2.png'

import './StyledHeader.css'
function Header(){
    const urlPhoto=sessionStorage.getItem('avatar_path')
    const photo=`http://localhost:3333/files/${urlPhoto}`
    const name=sessionStorage.getItem('name')
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