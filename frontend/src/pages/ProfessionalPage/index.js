import React, { useState, useEffect } from 'react'

import List from '../../components/List'
import api from '../../services/api'

function ProfessionalPage(){
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          width: 100,
          align:"center"
        },
        {
            title: 'Sexo',
            dataIndex: 'gender',
            key: 'gender',
            width: 150,
            align:"center"
          },
        {
          title: 'CPF',
          dataIndex: 'cpf',
          key: 'cpf',
          width: 200,
          align:"center"
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            width: 100,
            align:"center"
        },
        {
            title: 'CNS',
            dataIndex: 'cns',
            key: 'cns',
            width: 200,
            align:"center"
        },
        {
            title: 'Unidade',
            dataIndex: 'unity',
            key: 'unity',
            width: 200,
            align:"center"
        },
        {
            title: 'Tipo de profissional',
            dataIndex: 'professional_type',
            key: 'professional_type',
            width: 250,
            align:"center"
        },
  
        
      ];
   
      const data = [
          { name: 'Julia',gender:"feminino", cpf: 2887489347598, status: 'Ativo', cns: '1774863465783432',unity:'Unidade 1',professional_type:"Enfermeiro" },
          { name: 'Maria',gender:"feminino", cpf: 388748347847598, status: 'Ativo', cns: '4865873465783432',unity:'Unidade 1',professional_type:"Médico" },
          { name: 'Marcos',gender:"masculino", cpf: 883632489347598, status: 'Ativo', cns: '873465783432',unity:'Unidade 1',professional_type:"Enfermeiro" },
          { name: 'Antonio',gender:"masculino", cpf: 46874892037598, status: 'Ativo', cns: '65873465783432',unity:'Unidade 1',professional_type:"Médico" },
          { name: 'Alex',gender:"masculino", cpf: 887265632, status: 'Ativo', cns: '1865873465783432',unity:'Unidade 1',professional_type:"Enfermeiro" },
          
      ];
     
    return(
        <div> 
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <List  columns={columns} data={data} width="160vh" height="50vh" />  
        </div>
    )
}

export default ProfessionalPage