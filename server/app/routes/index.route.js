import index from '../controllers/index.controller';
const path = '/api/index';

var notebook  = require('../controllers/notebook.controller');
module.exports = (app) => {
       app.get('/', index.index);
       app.get('/help', index.help);

       app.get('/notebook/get',notebook.getNotebooks);
       app.post('/notebook/create',notebook.createNotebooks);
};
