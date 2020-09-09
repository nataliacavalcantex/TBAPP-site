import React from 'react'
import profile from '../../assets/img/profile2.png'

import './StyledHeader.css'
function Header(){
    const name=sessionStorage.getItem('name')
    return(
        <>
            <nav className="Menu">
                <div className="identify">
                    <p>Olá,{name}!<img src={profile} alt="tbapp profile"></img></p>         
                </div>
            </nav>
      </>
    )
}
export default Header