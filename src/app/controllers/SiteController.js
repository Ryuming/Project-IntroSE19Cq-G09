const user = require("../models/Course");
const data = require("../models/data");

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
    console.log(req.body);
    user
      .find({
        username: req.body.username,
        password: req.body.password,
      })
      .then(() => res.render("home"))
      .catch(next);
  }

  //[GET] /search
  search(req, res) {
    const inp_search = req.query.inp_search;
    console.log(inp_search);
    let tmp =`/^${inp_search}/i`
    console.log(tmp);
    data
      .find({ title: { $regex:  inp_search,$options: "i"} })
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
