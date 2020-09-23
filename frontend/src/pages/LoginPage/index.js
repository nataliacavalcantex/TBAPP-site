import React,{useState,useEffect} from 'react'
import {AiOutlineLock,AiOutlineUser} from "react-icons/ai"
import { useHistory } from 'react-router-dom';
import {Form,Input,Button,Title} from '../../components/Form'
import Container from '../../components/Container'
import api from '../../services/api.js'
import '../../custom.scss';
import './styles.css'
function LoginPage(){
    let history = useHistory();
    const [cpf,setCPF]=useState('');
    const [password,setPassword]=useState('')

    async function submit (e){
        e.preventDefault()
        const res= await api.post('/login',{
            cpf:cpf,
            password:password
        }).then(response =>{
            console.log(response)
            sessionStorage.setItem('token',response.data.token)
            sessionStorage.setItem('name',response.data.userExist.name)
            sessionStorage.setItem('avatar_id',response.data.userExist.avatar_id)
            sessionStorage.setItem('avatar_url',response.data.userExist.avatar.url)
            sessionStorage.setItem('avatar_path',response.data.userExist.avatar.path)
            history.push('/home')
        }).catch(error =>{
            console.log(error)
            // alert('Dados inválidos')
        })
    }

     return(
         <div className="home-body">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
         <Container width="80vh" height="60%">
            <Title>Login</Title>
            <Form>
                <div>
                    <label >CPF</label>
                    <AiOutlineUser ></AiOutlineUser>
                    <Input width = "100%" type="cpf"  placeholder="Digite seu CPF" value={cpf} onChange={e=>{setCPF(e.target.value)}} />
                </div>

                <div>
                    <label>Senha</label>
                    <AiOutlineLock></AiOutlineLock>
                    <Input width = "100%" type="password"  placeholder="Digite sua senha"  value={password} onChange={e=>{setPassword(e.target.value)}}/>
                </div>
                <div>
                    <br></br>
                    <p className="text">Esqueceu a senha? Clique <a href="#">aqui</a> para recuperar</p>
                    <Button  width="95%" type="submit" onClick={(e)=>{submit(e)}}>Login</Button>
                </div>
            </Form>
            
         </Container>
         </div>
     )
    
}

export default LoginPage