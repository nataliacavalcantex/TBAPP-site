import React,{useState} from 'react'
import profile from '../../assets/img/profile.png'
import Burger from '../../components/Burger'
import Menu from '../../components/Menu'
import api from '../../services/api'
import {Form,Input,Button,Title} from '../../components/Form'
import Container from '../../components/Container'
import { ToastContainer, toast } from 'react-toastify';
import { Link,Navlink } from 'react-router-dom'
import { AiOutlineMail,AiOutlineLock,AiOutlineUser,AiOutlinePhone,AiOutlineSetting,AiOutlineHome,AiOutlineAudit} from "react-icons/ai"
import './styles.css'
import Header from '../../components/Header'
function EditPage(){
    const [name,setName]=useState('');
    const [cpf,setCPF]=useState('');
    const [cns,setCNS]=useState('');
    const [email,setEmail]=useState('');
    const [oldPassword,setoldPassword]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setconfirmPassword]=useState('');
    const [phone,setPhone]=useState('');
    const [unity2,setUnity2]=useState('');
    const [unity,setUnity]=useState('');
    const [open, setOpen] = useState(false);
    const token= sessionStorage.getItem('token')
    async function submit(e){
        e.preventDefault()
        const res= await api.put('/user',{
            name:name,
            email:email,
            oldPassword:oldPassword,
            password:password,
            confirmPassword:confirmPassword,
            phone:phone,
            // unity_id:unity,
            // unity2_id:unity2,
        },{
            headers: { Authorization: "Bearer " + token }}).then(response =>{
            console.log(response)
            toast.success("Cadastro alterado com sucesso!")
        }).catch(error=>{
            console.log(error)
        })
    }
        return(
            <div >
               
                <Header></Header>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
                <br></br>
                <br></br>
                
                <Container width="90vh" height="100%"> 
                {/* <ToastContainer className='notify'></ToastContainer>                */}
                        <h2>Editar Cadastro</h2>

                        <img src={profile} className="edit-profile-photo" alt="profile logo"></img>

                    <Form display="table-row"> 
                        <div className='input-field'>
                            <label>Nome </label>
                            <AiOutlineUser></AiOutlineUser>
                            <Input height="35px" type="name"  placeholder="Digite o nome" value={name} onChange={e=>{setName(e.target.value)}}/>                        
                        </div>
                        <div className='input-field'>
                            <label>Email </label>
                            <AiOutlineMail></AiOutlineMail>
                            <Input  height="35px"  type="email"  placeholder="Digite o email" value={email} onChange={e=>{setEmail(e.target.value)}}/>
                        </div>
                        <div className='input-field'>
                            <label>Senha antiga </label>
                            <AiOutlineLock></AiOutlineLock>
                            <Input height="35px"   type="password"  placeholder="Digite a senha antiga" value={oldPassword} onChange={e=>{setoldPassword(e.target.value)}}/>
                        </div>
                        <div className='input-field'>
                            <label>Senha nova </label>
                            <AiOutlineLock></AiOutlineLock>
                            <Input height="35px"   type="password"  placeholder="Digite a senha nova" value={password} onChange={e=>{setPassword(e.target.value)}}/>
                        </div>
                        <div className='input-field'>
                            <label>Confirmar Senha </label>
                            <AiOutlineLock></AiOutlineLock>
                            <Input height="35px"   type="password"  placeholder="Confirme a senha nova" value={confirmPassword} onChange={e=>{setconfirmPassword(e.target.value)}}/>
                        </div>
                        <div className='input-field'>
                            <label>Telefone </label>
                            <AiOutlinePhone></AiOutlinePhone>
                            <Input height="35px"  type="name"  placeholder="Digite o telefone" value={phone} onChange={e=>{setPhone(e.target.value)}}/>
                        </div>
                        {/* <div className='input-field'>
                            <label>Unidade 1 </label>
                            <AiOutlineHome></AiOutlineHome>
                            <select>
                                <option selected ></option>
                                <option value="1">Unidade A</option>
                                <option value="2">Unidade B</option>
                                <option value="3">Unidade C</option>
                                <option value="4">Unidade D</option>
                            </select>
                        </div>
                        <div className='input-field'>
                            <label>Unidade 2 (opcional)</label>
                            <AiOutlineHome></AiOutlineHome>
                            <select>
                                <option selected ></option>
                                <option value="1">Unidade A</option>
                                <option value="2">Unidade B</option>
                                <option value="3">Unidade C</option>
                                <option value="4">Unidade D</option>
                            </select>
                        </div> */}
                        <div className="button">
                            <Button  type="submit" onClick={(e)=>{submit(e)}} >Finalizar</Button>
                            <a><Link to="/profile"><Button className="cancel-button">Cancelar</Button></Link></a>
                            <br></br>
                        </div>
                    </Form>
                    
                </Container>
              
            </div>
        )
    
}
export default EditPage