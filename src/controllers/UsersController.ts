import { Request, Response } from "express";
import { UsersService } from "../services/UsersService";


class UsersController {
    async create(request: Request, response: Response): Promise<Response>{
        const { email } = request.body;

        const usersService = new UsersService();

        const user = await usersService.create(email);

        return response.json(user);
    }

    async findByEmail(request: Request, response: Response): Promise<Response>{
        const { email } = request.params;

        const usersService = new UsersService();

        const user = await usersService.findByEmail(email);

        if(!user){
            return response.status(404).json({
                message: "User not found!"
            })
        }

        return response.json(user);
    }

}

export { UsersController } 