import Unity from '../models/Unity'

class UnityController{
    async index(req,res){
        const {knes}=req.params
        const unity= await Unity.findOne({where:{ knes}})
        return res.json({
           unity:{
               name,
               knes
           }
        })
    }
    async show(req,res){
        const unitys= await Unity.findAll({
            raw: true,
            attributes:['name','knes']
        })
        return res.json({unitys})
    }
}
export default new UnityController()