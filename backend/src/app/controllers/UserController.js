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
        const user= await User.findOne({
            where:{
                id:req.userId
            }
        })
        if(!user){
            return res.status(404).json({error:"User not found"})
        }
        return res.json(user)
    }
    async update(req,res){
        const schema=Yup.object().shape({
            name:Yup.string(),
            email:Yup.string().email(),
            oldPassword:Yup.string().min(6),
            password:Yup.string().min(6).when('oldPassword',(oldPassword,field)=> oldPassword ? field.required() : field),
            confirmPassword:Yup.string().when('password',(password,field)=> password ? field.required().oneOf([Yup.ref('password')]) : field)
        })
        console.log(req.body)
        if(!(await schema.isValid(req.body))){
            return res.status(400).json({error:'Validation failed'})
        }
        const {email,oldPassword} =req.body
        const user= await User.findByPk(req.userId)
        if(email && email !== user.email){
            const userExists= await User.findOne({where:{email}})
            if(userExists){
                return res.status(400).json({error:'User already exist'})
            }
        }
        // if(oldPassword && !(await user.checkPassword(oldPassword))){
        //     return res.status(401).json({error:'Password does not mach'})
        // }
        const {id,name} = await user.update(req.body)
        return res.json({
            id,
            name,
            email,
           
        })
    }

}
export default new UserController()