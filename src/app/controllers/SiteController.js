const user = require("../models/Course");
const data = require("../models/data");

const view = "../../resource/views/";
const { mutipleMongooseToObject } = require("../../util/mongoose");

class SiteController {
  //[GET] new
  index(req, res, next) {
    user
      .find({})
      .then((user) => {
        res.render("home", {
          user: mutipleMongooseToObject(user),
        });
      })
      .catch(next);
  }

  checklogin(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;
    const document = user
      .find({ username: { $regex: username, $options: "i" } })
      .lean()
      .exec(function (err, document) {
        if (document.length === 0 || document[0].password !== password ) {
          res.redirect('/login');
        } else {
          res.redirect("/");
        }
      });
  }

  //[GET] /search
  search(req, res) {
    const inp_search = req.query.inp_search;
    data
      .find({ title: { $regex: inp_search, $options: "i" } })
      .lean()
      .exec(function (err, document) {
        res.render("search", { document });
      });
  }

  login(req, res) {
    res.render("login", { layout: "login" });
  }
}

module.exports = new SiteController();
