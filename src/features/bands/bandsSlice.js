import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const bandsSlice = createSlice({
  name: "bands",
  initialState: {
    entities: [],
  },
  reducers: {
    bandAdded(state, action) {
      state.entities.push({
        id: uuid(),
        name: action.payload
      });
    },
    bandRemoved(state, action){
      const index = state.entities.findIndex((name) => name.id === action.payload);
      state.entities.splice(index, 1);
    }
  },
});

export const { bandAdded, bandRemoved } = bandsSlice.actions;

export default bandsSlice.reducer;