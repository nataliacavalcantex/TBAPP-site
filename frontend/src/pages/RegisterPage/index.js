import React,{Component} from 'react'
import Title from '../../components/Title'
import Form from '../../components/Form'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Container from '../../components/Container'
import { AiOutlineMail,AiOutlineLock,AiOutlineUser,AiOutlinePhone,AiOutlineSetting,AiOutlineHome,AiOutlineAudit} from "react-icons/ai"
import { ToastContainer, toast } from 'react-toastify';
import api from '../../services/api.js'
import './styles.css'
import 'react-toastify/dist/ReactToastify.css';
class RegisterPage extends Component{1
    state={
        name:'',
        email:'',
        password:'',
    }
    handleEmail= e =>{
        this.setState({email: e.target.value})
    }
    handlePassword= e =>{
        this.setState({password: e.target.value})
        
    }
    handleName= e =>{
        this.setState({name: e.target.value})
    }
    handleSubmit= async e =>{
        e.preventDefault()
        const response= await api.post('/users',{
            name:this.state.name,
            email:this.state.email,
            password:this.state.password
        }).then(response => {
            console.log(response)
            toast("User registred sucessfuly!!")
        })
        .catch(error => {
            console.log(error)
            toast("Something went wrong!")
          })
    }
    render(){
        const{name,email,password}=this.state
        return(
            <Container width="45%" height="95%">
                <h1>Cadastro</h1>
                <Form display="grid"> 
                    <div>
                        <label>Nome </label>
                        <AiOutlineUser></AiOutlineUser>
                        <Input  width=" 500px" type="name"  placeholder="Digite o nome" value={this.name} onChange={this.handleName}/>
                    </div>
                    <div>
                        <label>CPF </label>
                        <AiOutlineAudit></AiOutlineAudit>
                        <Input  width=" 500px" type="name"  placeholder="Digite o CPF" value={this.name} onChange={this.handleName}/>
                    </div>
                    <div>
                        <label>Email </label>
                        <AiOutlineMail></AiOutlineMail>
                        <Input width=" 500px" type="name"  placeholder="Digite o email" value={this.name} onChange={this.handleName}/>
                    </div>
                    <div >
                        <label>Senha </label>
                        <AiOutlineLock></AiOutlineLock>
                        <Input  width=" 500px" type="password"  placeholder="Digite a senha" value={this.name} onChange={this.handleName}/>
                    </div>
                    <div >
                        <label>Telefone </label>
                        <AiOutlinePhone></AiOutlinePhone>
                        <Input type="name"  placeholder="Digite o telefone" value={this.name} onChange={this.handleName}/>
                    </div>
                    <div >
                        <label>Unidade </label>
                        <AiOutlineHome></AiOutlineHome>
                        <Input type="name"  placeholder="Escolha a Unidade" value={this.name} onChange={this.handleName}/>
                    </div>
                    <div >
                        <label>Tipo de usuário </label>
                        <AiOutlineSetting></AiOutlineSetting>
                        <Input type="name"  placeholder="Escolha o tipo de usuário" value={this.name} onChange={this.handleName}/>
                    </div>
                   
                    <br></br>
                    <Button  width="100%"type="submit" onClick={this.handleSubmit} >Cadastrar</Button>
                </Form>
                
                <ToastContainer/>
            </Container>
        )
    }
}
export default RegisterPage