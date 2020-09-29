import React,{useState,useEffect} from 'react'
import profile from '../../assets/img/profile2.png'
import Burger from '../../components/Burger'
import Menu from '../../components/Menu'
import api from '../../services/api'
import Avatar from '../EditPage/Avatar'
import {Form,Input,Button,Title} from '../../components/Form'
import Container from '../../components/Container'
import { ToastContainer, toast } from 'react-toastify';
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
    const urlPhoto=sessionStorage.getItem('avatar_path')
    const photo=`http://localhost:3333/files/${urlPhoto}`
    const token= sessionStorage.getItem('token')
    async function submit(){
        const res= await api.get('/user',{
            headers: { Authorization: "Bearer " + token }})
        .then(response =>{
            // console.log(response.data)
            setName(response.data.name)
            setCPF(response.data.cpf)
            setCNS(response.data.cns)
            setPhone(response.data.phone)
            setEmail(response.data.email)
            setUnity("UBSF AMPLIADA DR PLATAO ARAUJO")
            setUnity2("UBS L 36")
            
        }).catch(error=>{
            console.log(error)
        })
    }
   
    async function getPhoto(){
        const response= await api.get(`/files/${photo}`,{
            headers: { Authorization: "Bearer " + token }
        })
        .then(response =>{
             console.log(response.data)

        }).catch(error=>{
            console.log(error)
        })

    }
    useEffect(()=>{
        submit();
    })
        return(
           
            <div>
                <Header></Header>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />

                <br></br>
                <br></br>
                
                <Container width="95vh" height="250%">       
                    <h3 id="title" style={{marginLeft:"35%"}}>Meus Dados</h3>   
                    <br></br>   
                    <br></br>   
                      
                     <img src={photo} className="Profile"></img>
                    
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
                     <NavLink to="/editProfile"><Button  className='end-button' justify='center' height='40px' width='90%'>Editar</Button></NavLink>
                     <br></br>
                     <br></br>
                     <br></br>
                     <br></br>
                </Form>
                </Container>
                <ToastContainer></ToastContainer>
            </div>
        )
    
}
export default Profile