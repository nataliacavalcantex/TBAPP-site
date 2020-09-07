import React, { useState, useEffect } from 'react'
import Table from 'rc-table';
import Container from '../../components/Container'
import Burger from '../../components/Burger'
import Menu from '../../components/Menu'
import './StyledList.css'
const List= ({columns,data,width,height})=>{
    const [open, setOpen] = useState(false);
    return(
        <div>
            <div>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
            </div>
            <Container width={width} height={height}>
            <Table className='table' columns={columns} data={data} />
            </Container>
        </div>
    )
}

export default List