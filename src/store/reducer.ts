// import storage from 'redux-persist/lib/storage';
import { userApi } from "./api/endpoints/user";
import cart from "./slices/cart";
import auth from "./slices/auth";

// const persistConfig = {
//   key: 'root',
//   storage,
// };
// const persistedProfileReducer = persistReducer(persistConfig, profileReducer);

const rootReducer = {
  cart,
  auth,
  [userApi.reducerPath]: userApi.reducer,
};
export default rootReducer;
