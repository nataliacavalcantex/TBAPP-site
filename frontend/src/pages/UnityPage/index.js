import React, { useState, useEffect } from 'react'

import List from '../../components/List'
import api from '../../services/api'

function UnityPage(){
    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
            width: 200,
            align:"center"
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          width: 450,
          align:"center"
        },
        {
            title: 'Knes',
            dataIndex: 'knes',
            key: 'knes',
            width: 450,
            align:"center"
          },
        
      ];
   
      const data = [
          { id:1,name: 'Unidade 1', knes: 2887489347598 },
          { id:2,name: 'Unidade 2',knes: 388748347847598 },
          { id:3,name: 'Unidade 3', knes: 883632489347598 },
          { id:4,name: 'Unidade 4', knes: 46874892037598 },
          { id:5,name: 'Unidade 5', knes: 81187265635672 },
          { id:6,name: 'Unidade 6', knes: 8118726563288 },
          { id:7,name: 'Unidade 7', knes: 8118726563212 },
          { id:8,name: 'Unidade 8', knes: 8118726563662 },
          
      ];
      
    return(
        <div> 
         <br></br>
         <br></br>
         <br></br>
         <List  columns={columns} data={data} width="120vh" height="50vh" />  
        </div>
    )
}

export default UnityPage