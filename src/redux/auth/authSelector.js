export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUserName = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectUserEmail = state => state.auth.user.email;

export const selectToken = state => state.auth.token;

export const selectIsError = state => state.auth.isError;

export const selectIsLoading = state => state.auth.isLoading;
