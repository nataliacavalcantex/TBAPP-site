import React, { useState } from 'react';
import Burger from '../../components/Burger/index';
import Menu from '../../components/Menu/index';
import Container from '../../components/Container'
import './styles.css'
function MainPage() {
  const [open, setOpen] = useState(false);
  return (
  
        <>
        <div>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
        </div>
        <body>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Container width='90vh' height='40vh' className="container">
                <h2>Bem vindo ao TBApp</h2>
                <br></br>
                <br></br>
                <p >O TBApp é um aplicativo que auxilia os pacientes durante o tratamento da tuberculose e permite que os profissionais de saúde acompanhem mais de perto o tratamento dos enfermos</p>
            </Container>
        </body>
        </>
  );
}
export default MainPage;