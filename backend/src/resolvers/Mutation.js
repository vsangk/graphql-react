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
  updateItem(parent, args, ctx, info) {
    const { id, ...updates } = args;
    // const updates = { ...args };
    // delete updates.id;
    // run the update method
    return ctx.db.mutation.updateItem(
      {
        data: updates,
        where: {
          id,
        },
      },
      info
    );
  },
};

module.exports = mutations;
