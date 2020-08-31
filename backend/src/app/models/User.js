import {Model,Sequelize} from 'sequelize'
import bcrypt from 'bcryptjs'
class User extends Model{
    static init(sequelize){
        super.init({
            name:Sequelize.STRING,
            email:Sequelize.STRING,
            password:Sequelize.VIRTUAL,
            password_hash:Sequelize.STRING,
            cpf:Sequelize.STRING,
            phone:Sequelize.STRING,
            professional_type:Sequelize.INTEGER

        },{
            sequelize
        })
        this.addHook('beforeSave',async (user)=>{
            if(user.password){
                user.password_hash= await bcrypt.hash(user.password,8)
            }
        })
    }
    static associate(models){
        this.belongsTo(models.Unity,{foreignKey:'unity_id',as:'unitys'})
    }
    checkPassword(password){
        return bcrypt.compare(password,this.password_hash)
    }
}
export default User