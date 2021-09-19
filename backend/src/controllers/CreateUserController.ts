import { Request, Response } from "express"
import { CreateUserService } from "../services/CreateUserService"

class CreateUserController {
    async handle(request: Request, response: Response) {
        const { nome, documento, data_nasc } = request.body;

        const createUserService = new CreateUserService();
        const user = await createUserService.execute( {nome, documento, data_nasc})

        return response.json(user)
    }
}

export { CreateUserController }