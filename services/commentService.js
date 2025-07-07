const Comment = require('../models/Comment');

const addComment = async (data) => {
    console.log('called')
  const comment = new Comment(data);
  await comment.save();
  return comment;
};

const getComments = async (articleId = null) => {
  if (articleId) {
    return await Comment.find({ articleId }).populate('userId', 'name');
  }
  return await Comment.find().populate('userId', 'name').populate('articleId', 'title');
};

const updateComment = async (id, userId, updatedData) => {
  const comment = await Comment.findById(id);
  if (!comment) throw new Error('Comment not found');

  const isOwner = comment.userId.toString() === userId;
  if (!isOwner) throw new Error('Unauthorized');

  Object.assign(comment, updatedData);
  await comment.save();
  return comment;
};

module.exports = {
  addComment,
  getComments,
  updateComment
};
