import React,{Component} from 'react'
import Title from '../../components/Title'
import Form from '../../components/Form'
import Button from '../../components/Button'
import Container from '../../components/Container'
import { AiOutlineMail,AiOutlineLock,AiOutlineUser} from "react-icons/ai"
import { ToastContainer, toast } from 'react-toastify';
import api from '../../services/api.js'
import "./styles.css"
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
            <Container width="600px" height="550px">
                <Form>
                    <Title>Sign Up</Title>   
                    <div >
                        <label>Name </label>
                        <AiOutlineUser></AiOutlineUser>
                        <input type="name"  placeholder="Enter name" value={this.name} onChange={this.handleName}/>
                    </div>
                    <div>
                        <label>Email address</label>
                        <AiOutlineMail></AiOutlineMail>
                        <input type="email"  placeholder="Enter email" value={this.email} onChange={this.handleEmail} />
                    </div>
                    <div >
                        <label>Password</label>
                        <AiOutlineLock></AiOutlineLock>
                        <input type="password" placeholder="Enter password" value={this.password} onChange={this.handlePassword} />
                        
                    </div>
                    <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                    </p>
                    <Button  width="100%"type="submit" onClick={this.handleSubmit} >Register</Button>
                </Form>
                <ToastContainer/>
            </Container>
        )
    }
}
export default RegisterPage