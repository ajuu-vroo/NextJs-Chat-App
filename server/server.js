const io = require('socket.io')(3001, {
    cors: {
        origin: 'http://localhost:3000',
    },
});

let users = [];

const addUser = (user, socketId) => {
    !users.some(userr => userr.user === user) && users.push({ user, socketId })
}
const removeUser = (socketId) => {
    users = users.filter(user => user.socketId !== socketId)
}
const getUser = (reciever) => {
    return users.find((user) => user.user === reciever)
}


io.on("connection", (socket) => {
    // console.log(socket.id)

    socket.on('addUser', user => {
        if (users.find(userr => userr.user === user)) {
            io.emit('getUser', 'user already Created')
        } else {
            addUser(user, socket.id);
            io.emit('getUser', users)
        }
    });

    socket.on('checkUser', sender => {
        if (users.find((userr) => userr.user === sender)) {
            io.emit('validUser', 'true')
        } else {
            io.emit('validUser', 'user not found')
        }
    })

    socket.on('sendMessage', (data)=>{
        // console.log(data)
        const user = users.find(userr=> userr.user === data.receiverName);
        io.to(user?.socketId).emit('getMessage', {message:data.textMessage ,type:'notMine'})
    })

    socket.on('disconnect', () => {
        removeUser(socket.id);
        io.emit('getUser', users)
        io.emit('left','user left')
        // console.log('user disconnected')
    })
})