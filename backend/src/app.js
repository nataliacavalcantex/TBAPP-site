import express from 'express'
import routes from './routes'
import cors from 'cors'
import "./database"
import 'dotenv/config'
class App{
    constructor(){
        this.server=express()
        this.server.use(cors({
        'origin': '*',
        'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',}));
        this.middlewares()
        this.routes()
    }
    middlewares(){
        this.server.use(express.json())
    }
    routes(){
        this.server.use(routes)
    }
}
export default new App().server