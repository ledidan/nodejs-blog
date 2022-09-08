const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost/blog_mongo_nodejs");
    console.log("Connect successfully");
  } catch (err) {
    console.log(err.response.error, "connect failed");
  }
}

module.exports = { connect };
