import React, { useState } from 'react';
import Burger from '../../components/Burger/index';
import Menu from '../../components/Menu/index';
import Header from '../../components/Header'
import Container from '../../components/Container'
import './styles.css'
function MainPage() {
  const [open, setOpen] = useState(false);
  return (
  
        <div className="home-body">
            <div>
            <Header></Header>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
            
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Container width='90vh' height='30vh' className="container">
                <h2 id="title-main">Bem vindo ao TBApp</h2>
                <br></br>
                <br></br>
                <p >O TBApp é uma aplicação que auxilia os pacientes durante o tratamento da tuberculose e permite que os profissionais de saúde acompanhem mais de perto o tratamento dos enfermos</p>
            </Container>
      
        </div>
  );
}
export default MainPage;