var Notebook = require('mongoose').model('Notebook');
var Like = require('mongoose').model('Like');
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
exports.like = (req, res, next) => {
    var like = new Like(req.body);
    var query = Like.findOne({ 'nbid': like.nbid, 'username': like.username });

    query.exec(function (err, found_like) {
        if (err)
            console.log(err)

        let result = "";
        if (found_like == null) {
            //Like
            result = "addlike"
            like.save((err) => {
                if (err) {
                    console.log('Failure');
                    return next(err);
                } else {
                    var count;
                    Like.find({ "nbid": like.nbid }).exec(function (err, likelist) {
                        if (err) {
                            console.log('Add Like Failure');
                            return next(err);
                        } else {
                            count = likelist.length;
                            res.json({ "result": result, "likecount": count });
                        }
            
                    });
                }
            })
        } else {
            //Unlike
            result = "removelike"
            Like.find({ 'nbid': like.nbid, 'username': like.username }).remove().exec();
            var count;
            Like.find({ "nbid": like.nbid }).exec(function (err, likelist) {
                if (err) {
                    console.log('Add Like Failure');
                    return next(err);
                } else {
                    count = likelist.length;
                    res.json({ "result": result, "likecount": count });
                }
    
            });
        }

     
    });
}
exports.getLikeCount = (req, res, next) => {
    var nbid = req.body.nbid;
    console.log(nbid)

    Like.find({ "nbid": nbid }).exec(function (err, like) {
        if (err) {
            console.log('Add Like Failure');
            return next(err);
        } else {
            var count = like.length;
            res.json({ "nbid": nbid, "likecount": count });
        }

    });
}


exports.getLikeUsers = (req, res, next) => {
    var nbid = req.body.nbid;

    Like.find({ "nbid": nbid }).exec(function (err, like) {
        if (err) {
            console.log('Add Like Failure');
            return next(err);
        } else {
            var usernames = [];
            like.forEach(element => {
                usernames.push(element.username)
            });
            res.json({ "nbid": nbid, "usernames": usernames });
        }

    });
}
