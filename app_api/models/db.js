const mongoose = require('mongoose');
// Might need to add a semicolon
const host = process.env.DB_HOST || `127.0.0.1`;
const dbURI = "mongodb://127.0.0.1/travlr";
const readLine = require('readline');

// avoid 'current Server Discovery and Monitoring engine is deprecated'
// mongoose.set('useUnifiedTopology', true);

const connect = () => {
    setTimeout(() => mongoose.connect(dbURI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    }), 1000);
}
mongoose.connection.on('connected', () => {                 2
    console.log(`Mongoose connected to ${dbURI}`);            2
  }); 
                                                          2
mongoose.connection.on('error', err => {                    2
    console.log(`Mongoose connection error: ${err}`);         2
  });
                                                           2
mongoose.connection.on('disconnected', () => {              2
    console.log('Mongoose disconnected');                     2
  });  
                                                         2
const gracefulShutdown = (msg, callback) => {               3
    mongoose.connection.close( () => {                        3
      console.log(`Mongoose disconnected through ${msg}`);    3
      callback();                                             3
    });                                                       3
  };  
                                                          3
// For nodemon restarts                                     4
process.once('SIGUSR2', () => {                             4
    gracefulShutdown('nodemon restart', () => {               4
      process.kill(process.pid, 'SIGUSR2');                   4
    });                                                       4
  });                                                         4

// For app termination                                      4
process.on('SIGINT', () => {                                4
    gracefulShutdown('app termination', () => {               4
      process.exit(0);                                        4
    });                                                       4
  });    

// For Heroku app termination                               4
process.on('SIGTERM', () => {                               4
    gracefulShutdown('Heroku app shutdown', () => {           4
      process.exit(0);                                        4
    });                                                       4
  });

  connect();

  //bring in the Mongoose Schema
  require('./travlr');
  require('./user');