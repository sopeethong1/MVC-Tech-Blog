const { Comment } = require('../models');

const commentData = [
    {
        user_id: 55,
        post_id: 5,
        description: "I agree!"
    },
    {
        user_id: 30,
        post_id: 30,
        description: "I disagree!"
    },
    {
        user_id: 55,
        post_id: 30,
        description: "My thoughts exactly!"
    },
    {
        user_id: 3,
        post_id: 5,
        description: "Thank you!"
    },
    {
        user_id: 3,
        post_id: 2,
        description: "stoppppp!"
    },
    {
        user_id: 3,
        post_id: 30,
        description: "This is suprising"
    },
    {
        user_id: 5,
        post_id: 3,
        description: "Can't believe it"
    },
    {
        user_id: 2,
        post_id: 55,
        description: "Try again!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = commentData;