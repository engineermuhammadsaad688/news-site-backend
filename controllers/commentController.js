const commentService = require('../services/commentService');

const addComment = async (req, res) => {
  try {
    const data = {
      ...req.body,
      userId: req.user.id
    };
    const comment = await commentService.addComment(data);
    res.status(201).json(comment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getComments = async (req, res) => {
  try {
    const articleId = req.query.articleId;
    const comments = await commentService.getComments(articleId);
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateComment = async (req, res) => {
  try {
    const updated = await commentService.updateComment(req.params.id, req.user.id, req.body);
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  addComment,
  getComments,
  updateComment
};
