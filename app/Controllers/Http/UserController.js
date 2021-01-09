'use strict'
const User = use('App/Models/User')


class UserController {
    async store ({request, response}){
        const userData = request.only(['username', 'age', 'email', 'password'])
        const user = await User.create(userData)

        return response.created({
            status: true,
            data: user
        })
    }

    async update ({request, response}){
        const userData = request.only('Oemail')
        const Data = request.only(['username','email', 'password'])
        const user = await User.findByOrFail('email', userData['Oemail'])
        user.username = Data['username']
        user.email = Data['email']
        if (Data['password']){
            user.password = Data['password']
        } 
        await user.save()
        return response.ok({
            status: true,
            data: user
        })
    }

    async read({request, response}){
        const user = await User.all()

        return response.ok({
            status: true,
            data: user
        })
    }
    async delete({request, response}){
        const email = request.only('email')
        //const data = await Database.query().select('id').from('users').where('email', email['email'])
        const user = await User.findByOrFail('email', email['email'])
        await user.delete()
        

        return response.ok({
            status: true
        })
    }
    
}

module.exports = UserController
