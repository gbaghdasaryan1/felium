import { basketReduser } from './reducers/basket/basket.slice';
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
	basket: basketReduser
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		// middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userAPI.middleware)
	});
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
