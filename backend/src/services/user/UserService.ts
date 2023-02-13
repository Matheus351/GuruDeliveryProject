import prismaClient from "../../prisma";
import { hash } from "bcryptjs"


interface UserRequest {
    name: string
    email: string
    password: string
    endereco_id:string
}

class UserService {

    async createUser({ name, email, password, endereco_id}: UserRequest) {



        const passwordHash = await hash(password, 8)

        const user = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: passwordHash,
                endereco_id:endereco_id
            },
            select: {
                id: true,
                name: true,
                email: true,
                endereco_id:true
            }
        })


        return user
    }
}

export { UserService }