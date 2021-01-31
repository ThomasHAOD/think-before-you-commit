const http = require('http');

const cloudServiceKey = 'd9834jhd98n39dns9dnxx0356nm';

const exampleAdminUser = {
  name: 'Jane "The CEO" Jenkins',
  username: 'imceo',
  email: 'jane@goldenshoe.uk',
  password: 'qwerty1234',
};

const server = http.createServer();

server.saveToDataBase(exampleAdminUser, cloudServiceKey);
