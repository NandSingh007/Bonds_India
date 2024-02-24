// Reducer.js
import { createReducer } from "@reduxjs/toolkit";
import { storeFormData } from "./Action";

const initialState = {
  formData: null,
};

export const dataReducer = createReducer(initialState, (builder) => {
  builder.addCase(storeFormData, (state, action) => {
    state.formData = action.payload;
  });
});
