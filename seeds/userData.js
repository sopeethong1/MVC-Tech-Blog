const { User } = require('../models');

const userData = [
    {
        name: "sopee_t",
        email: "tsopee@gmail.com",
        password: "p@ss1234"
    },
    {
        name: "labat_y",
        email: "labaty@gmail.com",
        password: "p@ss1234"
    },
    {
        name: "tom_t",
        email: "tt@gmail.com",
        password: "p@ss1234"
    },
    {
        name: "kim_p",
        email: "kp@gmail.com",
        password: "p@ss1234"
    },
    {
        name: "jo_Q",
        email: "jq@gmail.com",
        password: "p@ss1234"
    },
    {
        name: "dara_i",
        email: "di@gmail.com",
        password: "p@ss1234"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = userData;