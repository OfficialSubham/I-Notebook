const express = require("express");
const router = express.Router();
const getuserdetails = require("../middleware/getuserdetails");
const Blog = require("../models/Blog");
const { body, validationResult } = require("express-validator");

//Route to Get All the blog of a particular user

router.get("/fetchblog", getuserdetails, async (req, res) => {
  try {
    let blogs = await Blog.find({ user: req.id });
    res.json(blogs);
  } catch (error) {
    res.status(400).send("error");
  }
});

//Route to add blogs using: POST

router.post(
  "/addblog",
  getuserdetails,
  [
    body("title").isLength({ min: 5 }),
    body("description").isLength({ min: 5 }),
  ],
  async (req, res) => {
    //The results of the valid client request
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(422).json({ errors: result.array() });
    }
    try {
      const { title, description, tag } = req.body;
      let blog = await Blog.create({
        user: req.id,
        title: title,
        description: description,
        tag: tag,
      });

      res.json(blog);
    } catch (error) {
      res.status(400).send("error");
    }
  }
);

//Route to Update Blog using: Put request

router.put("/updateBlog/:id", getuserdetails, async (req, res) => {
  try {
    //destructuring the data from body
    const { title, description, tag } = req.body;
    let newBlog = {};
    if (title) {
      newBlog.title = title;
    }
    if (description) {
      newBlog.description = description;
    }
    if (tag) {
      newBlog.tag = tag;
    }
    let existingBlog = await Blog.findById(req.params.id);
    if (!existingBlog) {
      return res.status(404).send("Not Found");
    }
    if (existingBlog.user.toString() !== req.id) {
      res.status(401).send("Not allowed");
    }
    //The blog is updated
    existingBlog = await Blog.findByIdAndUpdate(req.params.id, newBlog, {
      new: true,
    });
    res.json(existingBlog);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.delete("/deleteblog/:id", getuserdetails, async (req, res) => {
  try {
    let toDeleteBlog = await Blog.findById(req.params.id);
    if (!toDeleteBlog) {
      res.status(404).send("Not Found");
    }
    if (toDeleteBlog.user.toString() !== req.id) {
      res.status(401).send("You are not allowed");
    }
    await Blog.findByIdAndDelete(req.params.id)
    res.send("Blog Is Deleted")
  } catch (error) {
    res.status(500).send("Some internal Error Occured")
  }
});

module.exports = router;
