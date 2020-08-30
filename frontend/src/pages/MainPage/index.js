import React,{Component} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import Container from '../../components/Container'
import Title from '../../components/Title'
import List from '../../components/List'
import Button from '../../components/Button'
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import api from '../../services/api.js'
import './styles.css'
import 'react-toastify/dist/ReactToastify.css';


class MainPage extends Component{

    state={
        orig:'',
        dest:'',
        plan_time:'',
        time:'',
        price:'',
        plan_price:'',
    }
    
    calculatePlanCall=  (plan_time, time) =>{
      if(time > plan_time){
        const excess_time=time-plan_time
        this.state.plan_price=this.calculateCall(excess_time)
      }
      this.state.plan_price='00.00'
    }

    calculateCall= (minutes) =>{
        const {orig,dest}=this.state
        var time= parseInt(minutes,10)
   
        console.log(time)
        console.log("PRICE", this.state.price);
   
        if((orig == "011" && dest == "016") || (orig == "018" && dest == "011")){
            this.setState({price: 1.90*time});
        }
        if(orig == "011" && dest == "017"){
            this.state.price=(1.70*time)
        }     
        if(orig == "011" && dest == "018"){
            this.state.price=(0.90*time)
        }
        if(orig == "016" && dest == "011"){
            this.state.price=(2.90*time)
        }
        if(orig == "017" && dest == "011"){
            this.state.price=(2.70*time)
        }
        
        console.log("PRICE", this.state.price);
    }

    getPrice =  async () =>{
        var {time,plan_time,orig,dest}=this.state
        if(orig == dest|| orig == null ||dest== null){
            await toast("Origin and destiny must be diferents")
        }      
        this.calculateCall(time)
        this.calculatePlanCall(plan_time, time)
    }
    
    handleOrig = async e=>{
        this.setState({orig:e.target.value})
    }
    handleDest = async e=>{
        this.setState({dest:e.target.value})
    }
    handlePlan = async e=>{
        this.setState({plan_time:e.target.value})
    }
    handleTime =  e=>{
        this.setState({time:e.target.value})
    }
    handleSubmit= async e=>{
        e.preventDefault()
    }
    render() { 
        
        const {orig, dest, time, plan_time, price, plan_price} = this.state;
        
        return(

            <Container width="800px" height="750px">
            <div> 
                <Title>Fale Mais </Title>
            </div>       
            <div>
                <form onSubmit={this.handleSubmit}>
                    <FormControl variant="outlined" className="formSize">
                        <InputLabel id="demo-simple-select-outlined-label">Origem</InputLabel>
                        <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={orig}
                        onChange={this.handleOrig}
                        label="origem"
                        className="space"
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="011">011</MenuItem>
                        <MenuItem value="016">016</MenuItem>
                        <MenuItem value="017">017</MenuItem>
                        <MenuItem value="018">018</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl variant="outlined" className="formSize">
                        <InputLabel id="demo-simple-select-outlined-label">Destino</InputLabel>
                        <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={dest}
                        onChange={this.handleDest}
                        label="destino"
                        className="space"
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="011">011</MenuItem>
                        <MenuItem value="016">016</MenuItem>
                        <MenuItem value="017">017</MenuItem>
                        <MenuItem value="018">018</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl variant="outlined" className="formSize">
                        <InputLabel id="demo-simple-select-outlined-label">Plano</InputLabel>
                        <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={plan_time}
                        onChange={this.handlePlan}
                        label="plano"
                        className="space"
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="30">FaleMais 30</MenuItem>
                        <MenuItem value="60">FaleMais 60</MenuItem>
                        <MenuItem value="120">FaleMais 120</MenuItem>
                        </Select>
                    </FormControl>
                    <input type="text" value={time}  onChange={this.handleTime} placeholder="minutes"></input>
                    <Button width="80%" onClick={()=>{this.getPrice()}}>Calculate</Button>
                </form>
            
            </div>   
            <div>
                <List>
                    <li>
                        <span>Com o plano FaleMais</span>
                        <p>R${plan_price}</p>
                    </li>
                    <li>
                        <span>Sem o plano FaleMais</span>
                        <p>R${price} </p>
                    </li>
                </List>
            </div>
            <ToastContainer/>
            </Container>

        )
    }
}

export default MainPage