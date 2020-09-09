import React,{useState,useEffect} from 'react'
import profile from '../../assets/img/profile2.png'
import Burger from '../../components/Burger'
import Menu from '../../components/Menu'
import api from '../../services/api'
import {Form,Input,Button,Title} from '../../components/Form'
import Container from '../../components/Container'
import { ToastContainer, toast } from 'react-toastify';
// import { AiOutlineMail,AiOutlineLock,AiOutlineUser,AiOutlinePhone,AiOutlineSetting,AiOutlineHome,AiOutlineAudit} from "react-icons/ai"
 import './styles.css'
import Header from '../../components/Header'
import { NavLink } from 'react-router-dom'
function Profile(){
     const [name,setName]=useState('');
    const [cpf,setCPF]=useState('');
    const [cns,setCNS]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [phone,setPhone]=useState('');
    const [unity,setUnity]=useState(0);
    const [unity2,setUnity2]=useState(0);
    const [professional_type,setProfessionalType]=useState('');
    const [open, setOpen] = useState(false);

    const token= sessionStorage.getItem('token')
    async function submit(){
        const res= await api.get('/user',{
            headers: { Authorization: "Bearer " + token }})
        .then(response =>{
            console.log(response.data)
            setName(response.data.name)
            setCPF(response.data.cpf)
            setCNS(response.data.cns)
            setPhone(response.data.phone)
            setEmail(response.data.email)
            setUnity(response.data.unity_id)
            setUnity2(response.data.unity2_id)
        }).catch(error=>{
            console.log(error)
        })
    }
    useEffect(()=>{
        submit()
    })
        return(
            <div>
                <Header></Header>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />

                <br></br>
                <br></br>
                
                <Container width="80vh" height="100%">       
                    <h3 id="title">Meus Dados</h3>   
                    <br></br>     
                    <img src={profile} className="Profile" alt="profile logo"></img>
                <br></br>
                <Form className="profile-info" >
                        <div >
                            <label>Nome</label>
                            <p className="about-field">{name}</p>
                        </div>
                        <div >
                            <label>CPF</label>
                            <p className="about-field">{cpf}</p>
                        </div>
                        <div>
                            <label>Email</label>
                            <p className="about-field">{email}</p>
                        </div>
                        <div>
                            <label>Telefone</label>
                            <p className="about-field">{phone}</p>
                        </div>
                        <div>
                            <label>Unidade 1</label>
                            <p className="about-field">{unity}</p>
                        </div>
                        <div>
                            <label>Unidade 2</label>
                            <p className="about-field">{unity2}</p>
                        </div>
                    <br></br>
                     <NavLink to="/editProfile"><Button  className='end-button' width='90%'>Editar</Button></NavLink>
                </Form>
                </Container>
                <ToastContainer></ToastContainer>
            </div>
        )
    
}
export default Profile