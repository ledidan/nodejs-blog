const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");
class CoursesController {
  // [GET] /courses/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/show", { course: mongooseToObject(course) });
      })
      .catch(next);
  }
  //   [GET] /courses/create
  create(req, res) {
    res.render("courses/create");
  }
  //   [POST] /courses/store
  store(req, res) {
    const formData = req.body;
    formData.image = `https://i.ytimg.com/vi/${req.body.videoId}/hq720.jpg`;
    const course = new Course(formData);
    course.save();

    res.send("COURSE SAVED");
  }
}

module.exports = new CoursesController();
