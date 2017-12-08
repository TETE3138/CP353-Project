var User = require('mongoose').model('User');
var path = require('path');

exports.getUsers = (req, res, next) => {
    User.find((err, user) => {
        if (err) {
            console.log('Failure');
            return next(err);
        }
        else {
            console.log('Success');
            res.json(user);
        }
    });
}

exports.login = (req, res, next) => {
    var user_req = new User(req.body);
    User.findOne({ username: user_req.username }, '', (err, user) => {
        console.log(user_req);
        if (err || !user || !user.authenticate(user_req.password)) {
            var fail = { "sucess": "false" };
            res.json(fail);
        } else {
            var sucess = { "sucess": "true" };
            res.json(sucess);
        }
      
    });

}
exports.signup = (req, res, next) => {
    var user = new User(req.body);

    console.log(req.body);
    user.save((err) => {
        if (err) {
            console.log('Failure');
            return next(err);
        }
        else {
            console.log('Success');
            res.json(user);
        }
    });
}

