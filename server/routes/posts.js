const express = require('express');
const router = express.Router();

const Post = require('../models/vocabular');

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post('/', async (req, res) => {
  const post = new Post({
    english: req.body.english,
    german: req.body.german,
    text: req.body.text
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
