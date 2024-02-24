import { configureStore } from "@reduxjs/toolkit";
import { dataReducer } from "./Reducer";
const store = configureStore({
  reducer: {
    add: dataReducer,
  },
});

export default store;

// import { createStore, applyMiddleware } from "redux";
// import { thunk } from "redux-thunk";
// import { dataReducer } from "../ReactRedux/Reducer";
// const store = createStore(dataReducer, applyMiddleware(thunk));
// export default store;
