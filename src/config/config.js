
const ENVIRONMENT =  process.env.ENVIRONMENT || 'dev' ;
const PATH =  process.env.PATH || 'http://localhost:3000/' ;

module.exports = {
    PATH,
    ENVIRONMENT
  };