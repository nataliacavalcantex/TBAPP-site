import Sequelize from 'sequelize'
import User from '../app/models/User'
import Unity from '../app/models/Unity'
import dbConfig from '../config/database'
const models=[User,Unity]

class Database{
    constructor(){
        this.init()
    }
    init(){
        this.connection=new Sequelize(dbConfig)
        models.map(model => model.init(this.connection))
        models.map(model=> model.associate && model.associate(this.connection.models))
    }
}

export default new Database