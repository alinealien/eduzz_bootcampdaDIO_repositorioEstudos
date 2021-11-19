// EventEmitter

const eventEmitter = "events ";

class Users extends eventEmitter {
    userLogged(data){
        setTimeout(() => {
        this.emit('Used Logged', data);
    }, 2000);
}
}

const users = new Users();

/*users.once('User logged', data => {
    console.log(data);*/

users.once('User logged', data => {
    console.log(data);
});

users.userLogged({ user: 'Aline Antunes'});
users.userLogged({ user: 'Aline Antunes'});