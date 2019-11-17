const { forwardTo } = require('prisma-binding');

const Query = {
  // async items(parent, args, ctx, info) {
  //   const items = await ctx.db.query.items();
  //   return items;
  // },
  items: forwardTo('db'), // shorthand for the above (ie doesn't need any custom logic/resolvers)
  item: forwardTo('db'),
  itemsConnection: forwardTo('db'),
};

module.exports = Query;
