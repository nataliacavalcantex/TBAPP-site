import React,{Component} from 'react'
import {AiOutlineLock,AiOutlineUser} from "react-icons/ai"
import { ToastContainer, toast } from 'react-toastify';
import logo from '../../assets/img/logo.png'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Container from '../../components/Container'
import Title from '../../components/Title'
import Form from '../../components/Form'
import api from '../../services/api.js'
import '../../custom.scss';
import './styles.css'
import 'react-toastify/dist/ReactToastify.css';
import { Link,NavLink } from 'react-router-dom';
class LoginPage extends Component{

state={
    cpf:'',
    password:''
}

handleCPF= e=>{
    this.setState({cpf:e.target.value})
}

handlePassword= async e=>{
    this.setState({password:e.target.value})
}

 handleSubmit= async e=>{
    e.preventDefault()
    const response= await api.post('/login',{
        cpf:this.state.cpf,
        password:this.state.password
    }).then(response => {
        console.log(response)
        sessionStorage.setItem('token',response.data.token)
        sessionStorage.setItem('name',response.data.user.name)
        console.log(response.data.user.name)
        
    })
    .catch(error => {
        console.log(error)
        toast("Something went wrong!")
      })
}

 render(){

     return(
         <div>
             <br></br>
            <a href="/"><img src={logo} className="Logo" alt="tbapp logo"></img></a>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
         <Container width="80vh" height="400px">
            <Title>Login</Title>
            <Form>
                <div>
                    <label >CPF</label>
                    <AiOutlineUser ></AiOutlineUser>
                    <Input width ="550px" type="cpf"  placeholder="Digite seu CPF" value={this.state.cpf} onChange={this.handleCPF} />
                </div>

                <div>
                    <label>Senha</label>
                    <AiOutlineLock></AiOutlineLock>
                    <Input width = "550px" type="password"  placeholder="Digite sua senha"  value={this.state.password} onChange={this.handlePassword}/>
                </div>
                <div>
                    
                    <p className="text">Esqueceu a senha? Clique <a href="#">aqui</a> para recuperar</p>
                    <a><Button  width="95%" type="submit" onClick={this.handleSubmit} ><NavLink className="Link" to='/home'>Login</NavLink></Button></a>
                </div>
            </Form>
            
         </Container>
         </div>
     )
 }   
}

export default LoginPage