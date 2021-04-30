const { User } = require('../models');

const userData = [
    {
        username: "sopee_t",
        twitter: "sopee_t",
        github: "sopeethong1",
        email: "tsopee@gmail.com",
        password: "p@ss1234"
    },
    {
        username: "labat_y",
        twitter: "labat_y",
        github: "labaty",
        email: "labaty@gmail.com",
        password: "p@ss1234"
    },
    {
        username: "tom_t",
        twitter: "tom_t",
        github: "tomt",
        email: "tt@gmail.com",
        password: "p@ss1234"
    },
    {
        username: "kim_p",
        twitter: "kim_p",
        github: "kimps",
        email: "kp@gmail.com",
        password: "p@ss1234"
    },
    {
        username: "jo_Q",
        twitter: "jo-Q",
        github: "josephq",
        email: "jq@gmail.com",
        password: "p@ss1234"
    },
    {
        username: "dara_i",
        twitter: "dara_i",
        github: "darainthamo",
        email: "di@gmail.com",
        password: "p@ss1234"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;