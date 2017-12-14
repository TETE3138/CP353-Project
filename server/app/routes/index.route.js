import index from '../controllers/index.controller';
const path = '/api/index';

var notebook = require('../controllers/notebook.controller');
var user = require('../controllers/user.controller');
module.exports = (app) => {
    app.get('/', index.index);
    app.get('/help', index.help);

    app.get('/notebook/getall', notebook.getNotebooks);
    app.post('/notebook/create', notebook.createNotebooks);
    app.put('/notebook/edit', notebook.editNotebook);
    app.put('/notebook/like', notebook.like);
    app.post('/notebook/delete', notebook.delete);
    app.post('/notebook/getLikeCount', notebook.getLikeCount);
    app.post('/notebook/getLikeUsers', notebook.getLikeUsers);

    app.get('/user/getuser', user.getUsers);
    app.post('/user/signup', user.signup);
    app.post('/user/login', user.login);

};