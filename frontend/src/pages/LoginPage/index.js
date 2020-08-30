import React,{Component} from 'react'
import { AiOutlineMail,AiOutlineLock} from "react-icons/ai"
import { ToastContainer, toast } from 'react-toastify';
import Button from '../../components/Button'
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
         <Container width="600px" height="450px" >
            <Title>Sign In</Title>
            <Form>
                <div >
                    <label>Email address</label>
                    <AiOutlineMail></AiOutlineMail>
                    <input type="email"  placeholder="Enter email" value={this.state.email} onChange={this.handleEmail} />
                </div>

                <div>
                    <label>Password</label>
                    <AiOutlineLock></AiOutlineLock>
                    <input type="password"  placeholder="Enter password"  value={this.state.password} onChange={this.handlePassword}/>
                </div>
                <div>
                    <p className="forgot-password text-right">
                        Not registered? Click here to <a href="#">sign up</a>
                    </p>
                </div>
                <div>
                    <Button  width="100%" type="submit" onClick={this.handleSubmit} >Submit</Button>
                </div>
            </Form>
            <ToastContainer/>
         </Container>
     )
 }   
}

export default LoginPage