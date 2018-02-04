const postsData = require('../data/posts.json');

module.exports = {
    getPost: (ctx, next) => {
        const post = postsData.find((post) => post.id == ctx.params.id);

        ctx.body = post || {};
        next();
    },
    getAllPostsTitle: (ctx, next) => {
        const posts = postsData.map((post) =>
            ({
                id: post.id,
                title: post.title,
                subtitle: post.subtitle
            })
        );

        ctx.body = posts || [];
        next();
    }
}