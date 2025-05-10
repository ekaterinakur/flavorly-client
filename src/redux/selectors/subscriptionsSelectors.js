export const selectFollowers = (state) => state.subscriptions.followers;
export const selectFollowing = (state) => state.subscriptions.following;
export const selectIsFollowing = (id) => (state) =>
  state.subscriptions.following.some((user) => user.id === id);
