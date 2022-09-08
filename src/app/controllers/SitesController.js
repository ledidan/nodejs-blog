const Course = require("../models/Course");

class SiteController {
  // [GET] /news
  index(req, res) {
    Course.find({}, (err, courses) => {
      if (!err) {
        res.json(courses);
      } else {
        res.status(500).json({ error: "message" });
      }
    });
    // res.render("home");
  }

  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
