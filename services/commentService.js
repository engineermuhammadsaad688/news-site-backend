const Comment = require('../models/Comment');

const addComment = async (data) => {
  const comment = new Comment(data);
  await comment.save();
  return comment;
};

const getComments = async () => {
  return await Comment.find().populate('userId', 'name');
};

const updateComment = async (id,data) => {
  const result = await Comment.findByIdAndUpdate(id, data, { new: true });
  return result;
};

module.exports = {
  addComment,
  getComments,
  updateComment
};
