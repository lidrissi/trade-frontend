// import storage from 'redux-persist/lib/storage';
import { userApi } from "./api/endpoints/user";
import cartReducer from "./features/cart-slice";

// const persistConfig = {
//   key: 'root',
//   storage,
// };
// const persistedProfileReducer = persistReducer(persistConfig, profileReducer);

const rootReducer = {
  cartReducer,
  [userApi.reducerPath]: userApi.reducer,
};
export default rootReducer;
