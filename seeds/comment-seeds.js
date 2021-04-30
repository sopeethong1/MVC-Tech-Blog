const { Comment } = require('../models');

const commentData = [
    {
        user_id: 55,
        post_id: 5,
        comment_text: "I agree!"
    },
    {
        user_id: 30,
        post_id: 30,
        comment_text: "I disagree!"
    },
    {
        user_id: 55,
        post_id: 30,
        comment_text: "My thoughts exactly!"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "Thank you!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "stoppppp!"
    },
    {
        user_id: 3,
        post_id: 30,
        comment_text: "This is suprising"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "Can't believe it"
    },
    {
        user_id: 2,
        post_id: 55,
        comment_text: "Try again!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;