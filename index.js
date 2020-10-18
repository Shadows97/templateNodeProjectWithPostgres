const UserService = require('./services/userService')
const {server} = require('./config/serveurConfig')


server.post('/user/create', UserService.createUser)
server.post('/user/update', UserService.updateUser)


const port = process.env.PORT || 5020;

server.listen(port, () => console.log(`Server running on port ${port} 🔥`));