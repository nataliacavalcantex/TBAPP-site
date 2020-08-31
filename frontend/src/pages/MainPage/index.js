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
            <Container width='90vh' height='40vh' className="container">
                <h1>Bem vindo ao TBApp</h1>
                <p className='text'>O TBApp é um aplicativo que auxilia os pacientes durante o tratamento e permite os profissionais de saúde acompanhar de perto o tratamento dos enfermos</p>
            </Container>
        </body>
        </>
  );
}
export default MainPage;