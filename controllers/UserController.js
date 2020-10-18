const {server} = require('../config/serveurConfig')
const UserService = require('../services/userService')

server.post('/user/create', UserService.createUser)