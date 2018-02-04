const Router = require('koa-router');
const router = new Router();
const postCtrl = require('./controllers/post');

router.get('/posts', postCtrl.getAllPostsTitle);
router.get('/post/:id', postCtrl.getPost);

module.exports = router;