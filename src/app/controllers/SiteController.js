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
        if (document.length === 0 || document[0].password !== password) {
          let a = 1;
          res.render("login", { layout: "login", a });
        } else {
          res.redirect("/");
        }
      });
    return;
  }

  search_category(req, res) {
    const inp_search = req.query.inp_search;
    data
      .find({ title: { $regex: inp_search, $options: "i" } })
      .lean()
      .exec(function (err, document) {
        if (inp_search == "") {
          res.render("home", { err: "chua nhap du lieu" });
        } else {
          res.render("search", { document });
        }
      });
  }
  search_category_2(req, res) {
    const inp_search = req.params.category;
    data
      .find({ category: { $regex: inp_search, $options: "i" } })
      .lean()
      .exec(function (err, document) {
        if (inp_search == "") {
          res.render("home", { err: "chua nhap du lieu" });
        } else {
          res.render("search", { document });
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
        if (inp_search == "") {
          res.render("home", { err: "chua nhap du lieu" });
        } else {
          res.render("search", { document, inp_search });
        }
      });
  }
  sort_Like(req, res) {
    const inp_search = req.params.category;
    data
      .find({ title: { $regex: inp_search, $options: "i" } })
      .lean()
      .exec(function (err, document) {
        function compareFirstNames( a, b ) {
          if ( parseInt(a.reply) > parseInt(b.reply) ){
            return -1;
          }
          if (parseInt(a.reply) < parseInt(b.reply) ){
            return 1;
          }
          return 0;
        }
        document.sort(compareFirstNames);
        if (inp_search == "") {
          res.render("home", { err: "chua nhap du lieu" });
        } else {
          res.render("search", { document , inp_search});
        }
      });
  }

  login(req, res) {
    res.render("login", { layout: "login" });
  }
}

module.exports = new SiteController();
