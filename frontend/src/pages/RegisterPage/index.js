import React,{useState} from 'react'
import profile from '../../assets/img/profile.png'
import Burger from '../../components/Burger'
import Menu from '../../components/Menu'
import api from '../../services/api'
import { useHistory } from 'react-router-dom';
import {Form,Input,Button,Title} from '../../components/Form'
import Container from '../../components/Container'
import { ToastContainer, toast } from 'react-toastify';
import { AiOutlineMail,AiOutlineLock,AiOutlineUser,AiOutlinePhone,AiOutlineSetting,AiOutlineHome,AiOutlineAudit} from "react-icons/ai"
import './styles.css'
import Header from '../../components/Header'
function RegisterPage(){
    const [name,setName]=useState('');
    const [cpf,setCPF]=useState('');
    const [cns,setCNS]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [phone,setPhone]=useState('');
    const [unity,setUnity]=useState('');
    const [unity2,setUnity2]=useState('');
    const [professional_type,setProfessionalType]=useState('');
    let history = useHistory();
    const [open, setOpen] = useState(false);
    async function submit(e){
        e.preventDefault()
        const res= await api.post('/users',{
            cpf:cpf,
            name:name,
            //  cns:cns,
            email:email,
            password:password,
            phone:phone,
            unity_id:1,
            unity2_id:2,
            professional_type:1,
        }).then(response =>{
            console.log(response)
            alert("Cadastro realizado com sucesso!")
            history.push('/home')
        }).catch(error=>{
            console.log(error)
            alert("Algo deu errado!Por favor, confira se os dados estão preenchidos corretamente")
        })
    }
        return(
            <div >
                <Header></Header>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
                <br></br>
                <br></br>
                
                <Container width="90vh" height="100vh">                
                        <h2 id="title-register">Cadastro de Profissional</h2>
                        <br></br>
                         <img src={profile} className="profile-photo" alt="profile logo"></img> 
                        <br></br>
                    <Form > 
                        <div>
                            <label>Nome </label>
                            <AiOutlineUser></AiOutlineUser>
                            <Input height="35px" type="name"  placeholder="Digite o nome" value={name} onChange={e=>{setName(e.target.value)}}/>                        
                        </div>
                        <div >
                            <label>CPF </label>
                            <AiOutlineAudit></AiOutlineAudit>
                            <Input  height="35px" type="cpf"  placeholder="Digite o CPF" value={cpf} onChange={e=>{setCPF(e.target.value)}}/>
                        </div>
                        <div >
                            <label>CNS </label>
                            <AiOutlineAudit></AiOutlineAudit>
                            <Input height="35px"   type="cns"  placeholder="Digite o CNS" value={cns} onChange={e=>{setCNS(e.target.value)}}/>
                        </div>
                        <div className='input-field'>
                            <label>Email </label>
                            <AiOutlineMail></AiOutlineMail>
                            <Input  height="35px"  type="email"  placeholder="Digite o email" value={email} onChange={e=>{setEmail(e.target.value)}}/>
                        </div>
                        <div className='input-field'>
                            <label>Senha </label>
                            <AiOutlineLock></AiOutlineLock>
                            <Input height="35px"   type="password"  placeholder="Digite a senha" value={password} onChange={e=>{setPassword(e.target.value)}}/>
                        </div>
                        <div className='input-field'>
                            <label>Telefone </label>
                            <AiOutlinePhone></AiOutlinePhone>
                            <Input height="35px"  type="name"  placeholder="Digite o telefone" value={phone} onChange={e=>{setPhone(e.target.value)}}/>
                        </div>
                        <div className='input-field'>
                            <label>Unidade 1 </label>
                            <AiOutlineHome></AiOutlineHome>
                            <select>
                                <option selected ></option>
                                <option>Unidade A</option>
                                <option>Unidade B</option>
                                <option>Unidade C</option>
                                <option>Unidade D</option>
                            </select>
                        </div>
                        <div className='input-field'>
                            <label>Unidade 2 (opcional)</label>
                            <AiOutlineHome></AiOutlineHome>
                            <select>
                                <option selected ></option>
                                <option>Unidade A</option>
                                <option>Unidade B</option>
                                <option>Unidade C</option>
                                <option>Unidade D</option>
                            </select>
                        </div>
                        <div className='input-field'>
                            <label>Tipo de usuário </label>
                            <AiOutlineSetting></AiOutlineSetting>
                            <select>
                                <option selected ></option>
                                <option>Enfermeiro/Medico</option>
                                <option>Gestor Distrital</option>
                                <option>Administrador Municipal</option>
                            </select>
                        </div>
                    
                        <Button type="submit" onClick={(e)=>{submit(e)}} >Cadastrar</Button>
                        <br></br>
                    </Form>
                    <ToastContainer></ToastContainer>
                </Container>
              
            </div>
        )
    
}
export default RegisterPage