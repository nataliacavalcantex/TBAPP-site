import React,{Component} from 'react'
import {AiOutlineLock,AiOutlineUser} from "react-icons/ai"
import { ToastContainer, toast } from 'react-toastify';
import Button from '../../components/Button'
import Input from '../../components/Input'
import Container from '../../components/Container'
import Title from '../../components/Title'
import Form from '../../components/Form'
import api from '../../services/api.js'
import '../../custom.scss';
import './styles.css'
import 'react-toastify/dist/ReactToastify.css';
class LoginPage extends Component{

state={
    email:'',
    password:''
}

handleEmail= e=>{
    this.setState({email:e.target.value})
}

handlePassword= async e=>{
    this.setState({password:e.target.value})
}

 handleSubmit= async e=>{
    e.preventDefault()
    const response= await api.post('/login',{
        email:this.state.email,
        password:this.state.password
    }).then(response => {
        console.log(response)
        const token=response.data.token
        toast(`Welcome ${response.data.user.name}!!`)
    })
    .catch(error => {
        console.log(error)
        toast("Something went wrong!")
      })
}

 render(){

     return(
         <Container width="600px" height="400px">
            <Title>Login</Title>
            <Form>
                <div>
                    <label >CPF</label>
                    <AiOutlineUser ></AiOutlineUser>
                    <Input width ="500px" type="cpf"  placeholder="Digite seu CPF" value={this.state.email} onChange={this.handleEmail} />
                </div>

                <div>
                    <label>Senha</label>
                    <AiOutlineLock></AiOutlineLock>
                    <Input width = "500px" type="password"  placeholder="Digite sua senha"  value={this.state.password} onChange={this.handlePassword}/>
                </div>
                <div>
                    <Button width="95%" type="submit" onClick={this.handleSubmit} >Login</Button>
                </div>
            </Form>
            <ToastContainer/>
         </Container>
     )
 }   
}

export default LoginPage