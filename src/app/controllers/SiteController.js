const user =require('../models/Course');
const { mutipleMongooseToObject }=require('../../util/mongoose')

class SiteController {
    //[GET] new
    index(req, res, next) {
        user.find({})
            .then(user=>{
                res.render('home', {
                    user: mutipleMongooseToObject(user)
                });
            })
            .catch(next);

    }

    checklogin(req, res, next) {
        console.log(req.body);
        user.find({
           username: req.body.username,
           password: req.body.password
       }).then(() => res.render('home'))
       .catch(next);
    }

    //[GET] /search
    search(req, res) {
        res.send('Search');
    }

    login(req, res) {
        res.render('login', { layout: 'login' });
    };
}

module.exports = new SiteController();
