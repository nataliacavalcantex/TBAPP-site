import React,{useState} from 'react'
import logo from '../../assets/img/logo.png'
import Burger from '../../components/Burger'
import Menu from '../../components/Menu'
import api from '../../services/api'
import Form from '../../components/Form'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Container from '../../components/Container'
import { ToastContainer, toast } from 'react-toastify';
import { Link,NavLink } from 'react-router-dom';
import { AiOutlineMail,AiOutlineLock,AiOutlineUser,AiOutlinePhone,AiOutlineSetting,AiOutlineHome,AiOutlineAudit} from "react-icons/ai"
import './styles.css'
function RegisterPage(){
    const [name,setName]=useState('');
    const [cpf,setCPF]=useState('');
    const [cns,setCNS]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [phone,setPhone]=useState('');
    const [unity,setUnity]=useState(0);
    const [professional_type,setProfessionalType]=useState(0);
    const [open, setOpen] = useState(false);
    async function submit(e){
        e.preventDefault()
        const res= await api.post('/users',{
            cpf:cpf,
            name:name,
            cns:cns,
            email:email,
            password:password,
            phone:phone,
            unity:unity,
            professional_type:professional_type,
        }).then(response =>{
            console.log(response)
            toast.success("Cadastro realizado com sucesso!")
        }).catch(error=>{
            console.log(error)
        })
    }
        return(
            <div>
                
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
            <Container width="75vh" height="10vh">
                <h1>Cadastro </h1>
                <Form display="grid"> 
                    <div>
                        <label>Nome </label>
                        <AiOutlineUser></AiOutlineUser>
                        <Input  width=" 500px" type="name"  placeholder="Digite o nome" value={name} onChange={e=>{setName(e.target.value)}}/> 
                    </div>
                    <div>
                        <label>CPF </label>
                        <AiOutlineAudit></AiOutlineAudit>
                        <Input  width=" 500px" type="cpf"  placeholder="Digite o CPF" value={cpf} onChange={e=>{setCPF(e.target.value)}}/>
                    </div>
                    <div>
                        <label>CNS </label>
                        <AiOutlineAudit></AiOutlineAudit>
                        <Input  width=" 500px" type="cns"  placeholder="Digite o CNS" value={cns} onChange={e=>{setCNS(e.target.value)}}/>
                    </div>
                    <div>
                        <label>Email </label>
                        <AiOutlineMail></AiOutlineMail>
                        <Input width=" 500px" type="email"  placeholder="Digite o email" value={email} onChange={e=>{setEmail(e.target.value)}}/>
                    </div>
                    <div >
                        <label>Senha </label>
                        <AiOutlineLock></AiOutlineLock>
                        <Input  width=" 500px" type="password"  placeholder="Digite a senha" value={password} onChange={e=>{setPassword(e.target.value)}}/>
                    </div>
                    <div >
                        <label>Telefone </label>
                        <AiOutlinePhone></AiOutlinePhone>
                        <Input type="name"  placeholder="Digite o telefone" value={phone} onChange={e=>{setPhone(e.target.value)}}/>
                    </div>
                    <div >
                        <label>Unidade </label>
                        <AiOutlineHome></AiOutlineHome>
                        <Input type="name"  placeholder="Escolha a Unidade" value={unity} onChange={e =>{setUnity(e.target.value)}}/>
                    </div>
                    <div >
                        <label>Tipo de usuário </label>
                        <AiOutlineSetting></AiOutlineSetting>
                        <Input type="name"  placeholder="Escolha o tipo de usuário" value={professional_type} onChange={e=>{setProfessionalType(e.target.value)}}/>
                    </div>
                   
                    <Button className="button" width="100%"type="submit" onClick={(e)=>{submit(e)}} >Cadastrar</Button>
                    <br></br>
                </Form>
                <ToastContainer></ToastContainer>
            </Container>
            </div>
        )
    
}
export default RegisterPage