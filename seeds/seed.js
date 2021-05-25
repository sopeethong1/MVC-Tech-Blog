
const sequelize = require('../config/connection');
const seedPosts = require('./postData');
const seedUsers = require('./userData');
const seedComments = require('./commentData');
const { Comment, Posts, User  } = require('../models');


const seedAll = async () => {
  await sequelize.sync({ force: true });

  
  await User.bulkCreate(seedUsers, {
    individualHooks: true,
    returning: true,
  });

  await Posts.bulkCreate(seedPosts, {
    individualHooks: true,
    returning: true,
  });

  await Comment.bulkCreate(seedComments, {
    individualHooks: true,
    returning: true,
  });
 
  process.exit(0);
};


seedAll();