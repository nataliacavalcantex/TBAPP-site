import jwt from 'jsonwebtoken'
import auth from '../../config/auth'
import User from '../models/User'
import * as Yup from 'yup'
class SessionController{
    async store(req,res){
        const schema= Yup.object().shape({
            cpf:Yup.string().required().max(12),
            password:Yup.string().required().max(15)
        })
        if(!(await schema.isValid(req.body))){
            return res.status(401).json({error:"Schema is not valid"})
        }
        const {cpf,password}=req.body
        const userExist= await User.findOne({where:{
            cpf

        }})
        if(!userExist){
            return res.status(404).json({error:"User not found"})
        }
        if(!(await userExist.checkPassword(password))){
            return res.status(401).json({error:"Password does not match"})
        }
        const{id,name}=userExist
        return res.json({
            user:{
                id,
                name,
                cpf,
                password
            },token: jwt.sign({id},auth.secret,{
                expiresIn:auth.expiresIn
            })
        })
    }

}
export default new SessionController()