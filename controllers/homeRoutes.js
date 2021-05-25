const router = require('express').Router();
const { Posts, User, Comment } = require('../models')


router.get('/', async (req, res) => {
  try {
    const postData = await Posts.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const posts = postData.map((post) =>
      post.get({ plain: true }));

   
      res.render('homepage', {
      posts,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/posts/:id', async (req, res) => {
  try {
    console.log('Success');
    const postData = await Posts.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          attributes: [
            'description',
            'createdAt',
            'user_id'
          ],
        },
        {
            model: User,
            attributes: ['name'],
          }
        ],
    });
      
    const post = postData.get({ plain: true });
    console.log(post);
    res.render('post', { 
      ...post, 
      logged_in: req.session.logged_in 
    });
  
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/profile', async (req, res) => {
  console.log('Success');
  console.log(req.session.user_id);
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Posts }],
    });

    const user = userData.get({ plain: true});

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
  console.log('Success');
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }
  res.render('login');
});

module.exports = router;