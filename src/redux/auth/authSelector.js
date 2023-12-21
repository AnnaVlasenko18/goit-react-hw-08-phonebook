export const selectIsLoggedIn = state => state.aut.isLoggedIn;

export const selectUserName = state => state.auth.user.name;

export const selectUserEmail = state => state.auth.user.email;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectToken = state => state.auth.token;

export const selectError = state => state.auth.isError;

export const selectIsLoading = state => state.auth.isLoading;
