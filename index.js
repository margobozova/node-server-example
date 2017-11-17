const Express = require('express');
const http = require('http');
const jwt = require('jsonwebtoken');

const user = {
  login: 'misterPug',
  password: 'iamthepug'
};

const app = Express();
const secretKey = 'WhoRunTheWorld?PUGS!';

app.post('/login', (req, res) => {
  req.body.login;
  req.body.password;
});

const server = http.createServer(app);
server.listen(3000, () => console.log('Server listening on port 3000'));

const login = (req, res) => {
  if (req.body.login === user.login && req.body.password === user.password) {
    const token = jwt.sign(user, secretKey);
    console.log(token);
  } else {
    console.error('error');
  }
};

login({ body: { login: 'misterPug', password: 'iamthepug' }});