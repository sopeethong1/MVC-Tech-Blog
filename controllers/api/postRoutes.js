const router = require('express').Router();
const { Post } = require('../../models');
const sequelize = require('../../config/connection');


// get all users
// router.get('/', (req, res) => {
//     console.log('======================');
//     Post.findAll({
//         attributes: [
//             'id',
//             'title',
//             'created_at',
//             'post_content'
//         ],
//       order: [['created_at', 'DESC']],
//       include: [
//         // Comment model here -- attached username to comment
//         {
//           model: Comment,
//           attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//           include: {
//             model: User,
//             attributes: ['username', 'twitter', 'github']
//           }
//         },
//         {
//           model: User,
//           attributes: ['username', 'twitter', 'github']
//         },
//       ]
//     })
//       .then(dbPostData => res.json(dbPostData))
//       .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   });

//   router.get('/:id', (req, res) => {
//     Post.findOne({
//       where: {
//         id: req.params.id
//       },
//       attributes: [
//         'id',
//         'title',
//         'created_at',
//         'post_content'
//       ],
//       include: [
  
//         {
//           model: User,
//           attributes: ['username', 'twitter', 'github']
//         },
//         {
//           model: Comment,
//           attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//           include: {
//             model: User,
//             attributes: ['username', 'twitter', 'github']
//           }
//         }
//       ]
//     })
//       .then(dbPostData => {
//         if (!dbPostData) {
//           res.status(404).json({ message: 'No post found with this id' });
//           return;
//         }
//         res.json(dbPostData);
//       })
//       .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   });

  router.post('/', async (req, res) => {
    try {
      const newPost = await Posts.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newPost);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.delete('/:id', async (req, res) => {
    console.log('error');
    try {
      const postData = await Posts.destroy({
        where: {
          post_id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!postData) {
        res.status(404).json({ message: 'No post found with this id!' });
        return;
      }
  
      res.status(200).json(postData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  
  module.exports = router;