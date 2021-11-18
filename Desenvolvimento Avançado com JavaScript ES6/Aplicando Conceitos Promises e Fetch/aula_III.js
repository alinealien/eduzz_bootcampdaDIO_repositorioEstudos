// EventEmitter

const EventEmitter = ' events ';

const emitter = new EventEmitter();

emitter.on('User logged', data => {
    console.log(data);
});

emitter.emit('User Logged', { user: 'Aline Antunes'});