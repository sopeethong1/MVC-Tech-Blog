const { Post } = require('../models');

const postData = [
    {
        title: "Tech123.",
        post_content: "123 Update!",
        user_id: 3
    },
    {
        title: "Tech456.",
        post_content: "456 Update!",
        user_id: 55
    },
    {
        title: "Tech789.",
        post_content: "789 Update!",
        user_id: 55

    },
    {
        title: "Tech000!",
        post_content: "000 Update!",
        user_id: 5
    },
    {
        title: "Tech555!",
        post_content: "555 Update!",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;