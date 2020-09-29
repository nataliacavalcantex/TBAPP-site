import React, { useState, useEffect } from 'react'
import Table from 'rc-table';
import Container from '../../components/Container'
import Burger from '../../components/Burger'
import Menu from '../../components/Menu'
import Header from '../../components/Header'
import api from '../../services/api'
import {MdKeyboardBackspace} from "react-icons/md";
import './style.css'
import { NavLink } from 'react-router-dom';
function PacientPage(){
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          width: 100,
        },
        {
          title: 'CPF',
          dataIndex: 'cpf',
          key: 'cpf',
          width: 100,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            width: 100,
        },
        {
            title: 'Dias em atraso',
            dataIndex: 'dias_atraso',
            key: 'dias_atraso',
            width: 150,
        },
        {
          title: 'Inicio do Tratamento',
          dataIndex: 'dt_inicio',
          key: 'dt_inicio',
          width: 200,
        },
        {
            title: 'Fim do Tratamento',
            dataIndex: 'dt_fim',
            key: 'dt_fim',
            width: 200,
          },
        
      ];
   
      const rows = [
          { name: 'Natália Xavier', cpf: 2887489347598, status: 'Curado', dias_atraso: '1',dt_inicio:"12/02/2019",dt_fim:"12/08/2019" },
          { name: 'Ana Julia ', cpf: 2889989347598, status: 'Curado', dias_atraso: '1',dt_inicio:"12/02/2019",dt_fim:"12/08/2019" },
          { name: 'Nicolas Fernandes', cpf: 28874893672598, status: 'Em tratamento', dias_atraso: '1',dt_inicio:"12/02/2019",dt_fim:"12/08/2019" },
          { name: 'Jucimar Junior', cpf: 2887489347598, status: 'Curado', dias_atraso: '1',dt_inicio:"12/02/2019",dt_fim:"12/08/2019" },
          { name: 'Fernanda Lima', cpf: 892887489376398, status: 'Curado', dias_atraso: '1',dt_inicio:"12/02/2019",dt_fim:"12/08/2019" },
          { name: 'Jackson Ramos', cpf: 2887489347598, status: 'Em tratamento', dias_atraso: '1',dt_inicio:"12/02/2019",dt_fim:"12/08/2019" },
          { name: 'Maria Fernanda', cpf: 2887489347598, status: 'Curado', dias_atraso: '1',dt_inicio:"12/02/2019",dt_fim:"12/08/2019" },
          { name: 'Isabella Mello', cpf: 9987489347598, status: 'Curado', dias_atraso: '1',dt_inicio:"12/02/2019",dt_fim:"12/08/2019" },
          { name: 'Eduardo Morais', cpf: 6687489347598, status: 'Abandono', dias_atraso: '90',dt_inicio:"12/02/2019",dt_fim:"12/08/2019" },
          
      ];
    const [open, setOpen] = useState(false);
    return(
        <div>
            <div>
            <Header></Header>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
            </div>
            <br/>
            <br/>
            <br/>
            
            <Container width="130vh" height="50vh">
              <NavLink to="/unity">
                    <MdKeyboardBackspace size={32} className="icons"/>

              </NavLink>
            <br></br>
            <br></br>
            <Table className='table' columns={columns} data={rows} />
            
            
            </Container>
        </div>
    )
}

export default PacientPage