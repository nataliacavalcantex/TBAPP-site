import User from '../models/User'
import * as Yup from 'yup'
class UserController{
    async store(req,res){
        console.log(req.body)
        const schema=Yup.object().shape({
            name:Yup.string().required(),
            email:Yup.string().required(),
            password:Yup.string().required().min(8),
            cpf:Yup.string().required(),
            phone:Yup.string().required(),
            
        })
        if(!(await schema.isValid(req.body))){
            return res.status(401).json({error:"Not valid data"})
        }
        const {email,cpf} = req.body
        const userExist= await User.findOne({where:{
            cpf
        }})
        if(userExist){
            return res.status(401).json({error:"User already registred"})
        }
        const {name,professional_type} = await User.create(req.body)
    
        return res.json({
             name,
             email,
             professional_type,
        })
    }
    async index(req,res){
        console.log(req.userId)
        // const user= await User.findOne({
        //     where:{
        //         id:req.userId
        //     }
        // })

        // if(!user){
        //     return res.status(404).json({error:"User not found"})
        // }
        // return res.json(user)
    }

}
export default new UserController()