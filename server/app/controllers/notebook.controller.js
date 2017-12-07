var Notebook =  require('mongoose').model('Notebook');
var path = require('path');

exports.getNotebooks = (req, res, next) => {
    Notebook.find((err, notebook) => {
           if (err) {
                  console.log('Failure');
                  return next(err);
           }
           else {
                  console.log('Success');
                  res.json(notebook);
           }
    });
}
exports.createNotebooks = (req, res, next) => {
    var notebook = new Notebook(req.body);
    console.log(req.body);
    notebook.save((err) => {
           if (err) {
                  console.log('Failure');
                  return next(err);
           }
           else {
                  console.log('Success');
                  res.json(notebook);
           }
    });
}

