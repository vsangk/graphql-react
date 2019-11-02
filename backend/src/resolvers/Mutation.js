const mutations = {
  async createItem(parent, args, ctx, info) {
    // TODO: Check if they are logged in

    // returning a promise works here too
    const item = await ctx.db.mutation.createItem(
      {
        data: {
          ...args,
        },
      },
      info
    );

    return item;
  },
};

module.exports = mutations;
