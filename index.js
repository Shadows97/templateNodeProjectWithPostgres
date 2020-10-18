const UserService = require('./services/userService')
const {server} = require('./config/serveurConfig')


server.post('/user/create', UserService.createUser)
server.put('/user/update', UserService.updateUser)
server.delete('/user/delete/:id', UserService.deleteUser)
server.get('/user/:id', UserService.getUser)
server.get('/user', UserService.getAllUser)


const port = process.env.PORT || 5020;

server.listen(port, () => console.log(`Server running on port ${port} 🔥`));