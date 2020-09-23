import User from '../models/User'

class ProfessionalController{
    async show(req,res){
       const response= await User.findAll({
           raw: true,
           where:{professional_type:0}})
        return res.json(response)
    }
    

}

export default new ProfessionalController()