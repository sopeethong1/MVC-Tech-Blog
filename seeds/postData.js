const { Posts } = require('../models');

const postData = [
    {
        title: "Tech123.",
        description: "123 Update!",
        user_id: 3
    },
    {
        title: "Tech456.",
        description: "456 Update!",
        user_id: 55
    },
    {
        title: "Tech789.",
        description: "789 Update!",
        user_id: 55

    },
    {
        title: "Tech000!",
        description: "000 Update!",
        user_id: 5
    },
    {
        title: "Tech555!",
        description: "555 Update!",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = postData;