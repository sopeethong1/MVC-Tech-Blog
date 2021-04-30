const seedPosts = require('./post-seeds');
const seedUsers = require('./user-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
    console.log('\n success! \n');
  
  await seedUsers();
    console.log('\nsuccess!\n');
  
  await seedPosts();
    console.log('\nsuccess!\n');

  await seedComments();
    console.log('\nsuccess!\n');

  process.exit(0);
};

seedAll();