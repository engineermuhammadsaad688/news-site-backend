const commentService = require('../services/commentService');

const addComment = async (req, res) => {
  try {
    const data = {
      ...req.body,
      userId: req.user.id
    };
    const result = await commentService.addComment(data);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getComments = async (req, res) => {
  try {
    const id = req.query.articleId;
    const result = await commentService.getComments(id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateComment = async (req, res) => {
  try {
    const data = {
      ...req.body,
    };
    const id = req.params.id
    const result = await commentService.updateComment(id,data);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  addComment,
  getComments,
  updateComment
};
