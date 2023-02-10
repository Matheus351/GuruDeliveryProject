import prismaClient from "../../prisma";

interface UserRequest {
    name: string
    email: string
    password: string
    endereco_id:string
}

class UserService {

    async createUser({ name, email, password, endereco_id}: UserRequest) {

        const user = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: password,
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