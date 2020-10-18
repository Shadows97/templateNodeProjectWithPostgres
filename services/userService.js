const { User } = require('../models/User')



const createUser = async (request, response) => {

    const data = request.body;
    const jane = await User.create({
        firstName: data.firstName,
        lastName: data.lastName
    });
    console.log(jane)
    response.status(200).json(jane)
}

const updateUser = async (request, response) => {

    const data = request.body;
    console.log(data)
    const jane = await User.findByPk(data.id)
    jane.firstName = data.firstName
    jane.lastName = data.lastName
   await jane.save()
    console.log(jane.toJSON())
    response.status(200).json(jane)
}

const deleteUser = async (request, response) => {

    const data = request.body;
    console.log(data)
    await User.destroy({
        where: {
          id: data.id
        }
      });
    response.status(200).json({"resp": "ok"})
}




module.exports = {
    createUser,
    updateUser,
    deleteUser
}