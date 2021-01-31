const http = require('http');

const cloudServiceKey = 'd9834jhd98n39dns9dnxx0356nm';

const cloudServiceDatabaseID = '3856732272937haksjkdj';

const exampleAdminUser = {
  name: 'Jane "The CEO" Jenkins',
  username: 'imceo',
  email: 'jane@goldenshoe.uk',
  password: 'qwerty1234',
};

const server = http.connectToDatabase(cloudServiceDatabaseID, cloudServiceKey);

server.saveToDataBase(exampleAdminUser);
