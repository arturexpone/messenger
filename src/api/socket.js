import socketIO from 'socket.io-client'


export const socket = socketIO('https://dry-mountain-25307.herokuapp.com:80', {secure: true});
