import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export default store;

// import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { contactsReducer } from './contactsSlice';
// import { filterReducer } from './filterSlice';
// import { authReducer } from '../../redux/auth/authSlice';

// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
//   authorization: persistReducer(authPersistConfig, authReducer),
// });

// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);
