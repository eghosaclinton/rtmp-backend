import type {Request, Response} from "express"

export class Users {
    constructor(){}

    registerUser(){

    }

    helloUser (_req: Request, res: Response){
        res.send("Hello bro")
    }
}