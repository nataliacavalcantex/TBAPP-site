import React, { useState, useEffect } from 'react'
import Table from 'rc-table';
import Container from '../../components/Container'
import Burger from '../../components/Burger'
import Menu from '../../components/Menu'
import Header from '../../components/Header'
import api from '../../services/api'
import './style.css'
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
          { name: 'Jack', cpf: 2887489347598, status: 'some where', dias_atraso: '1',dt_inicio:"12/02/2019",dt_fim:"12/08/2019" },
          
      ];
    const [open, setOpen] = useState(false);
    return(
        <div>
            <div>
            <Header></Header>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
            </div>
            <Container width="130vh" height="80vh">
            <Table className='table' columns={columns} data={rows} />
            </Container>
        </div>
    )
}

export default PacientPage