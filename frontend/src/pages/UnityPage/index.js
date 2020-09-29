import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import Burger from '../../components/Burger'
import Menu from '../../components/Menu'
import Container from '../../components/Container'
import api from '../../services/api'
import {Link} from 'react-router-dom'
import './styles.css'
export default function UnityPage(){
  const token= sessionStorage.getItem('token')
      const datas = [
          { id:1,name: 'UBS L 42', cnes: 2013010,Codigo_DISA:"Leste" } ,
          { id:2,name: 'UBS L 34', cnes: 2014645,Codigo_DISA:"Leste"  },
          { id:3,name: 'UBS L 35', cnes: 2014653,Codigo_DISA:"Leste"  },
          { id:4,name: 'UBS L 36', cnes: 2014661,Codigo_DISA:"Leste"  },
          { id:5,name: 'UBS L 22', cnes: 2014777,Codigo_DISA:"Leste"  },
          { id:6,name: 'UBS L 24', cnes: 2014785,Codigo_DISA:"Leste"  },
          { id:7,name: 'UBS L 27', cnes: 2014793,Codigo_DISA:"Leste"  },
          { id:8,name: 'UBSF AMPLIADA DR PLATAO ARAUJO', cnes: 2014807,Codigo_DISA:"Leste" },
          
       ];
    const [open, setOpen] = useState(false); 
    async function getUnity(){
        const response= await api.get('/unitys',{
          headers: { Authorization: "Bearer " + token }})
        
    }
    useEffect(()=>{
      getUnity()
    })
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
            <div>
              <Container width="100vh" height="200%">
                <table className="table">
                  <thead className="header">
                    <tr>
                      <td>ID</td>
                      <td>Nome</td>
                      <td>CNES</td>
                      <td>Codigo_DISA</td>
                    </tr>
                  </thead>
                  <tbody >
                  {datas.map((data)=>( 
                    <tr>
                      <td key={data.id}>{data.id}</td>
                      <td><Link to='/pacient' className="table-body">{data.name}</Link></td>
                      <td>{data.cnes}</td>
                      <td>{data.Codigo_DISA}</td>
                    </tr>
                      ))}
                     
                  </tbody>
                </table>
              </Container>
            </div>
        
        </div>
    )
}

