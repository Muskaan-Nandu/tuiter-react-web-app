import { createSlice } from "@reduxjs/toolkit";
import tuitInfo from './tuit-info.json';
import { updateTuitThunk, createTuitThunk, deleteTuitThunk, findTuitsThunk } from "../services/tuits-thunks";

const currentUser = {
  "username": "NASA",
  "handle": "@nasa",
  "image": "/images/nasa.png",
};

const templateTuit = {
  ...currentUser,
  "topic": "Space",
  "time": "2h",
  "liked": false,
  "replies": 0,
  "retuits": 0
}

const tuitInfoSlice = createSlice({
  name: 'tuitInfoArray',
  initialState: { tuitInfoArray: [], loading: false},
  extraReducers: {
    [createTuitThunk.fulfilled]:
      (state, { payload }) => {
        state.loading = false
        state.tuitInfoArray.push(payload)
      },
    [updateTuitThunk.fulfilled]:
      (state, { payload }) => {
        state.loading = false
        const tuitNdx = state.tuitInfoArray.findIndex((t) => t._id === payload._id)
        state.tuitInfoArray[tuitNdx] = { ...state.tuitInfoArray[tuitNdx], ...payload }
      },
    [deleteTuitThunk.fulfilled]:
      (state, { payload }) => {
        state.loading = false
        state.tuitInfoArray = state.tuitInfoArray.filter(t => t._id !== payload)
      },

    [findTuitsThunk.pending]:
      (state) => {
        state.loading = true
        state.tuitInfoArray = []
      },
    [findTuitsThunk.fulfilled]:
      (state, { payload }) => {
        state.loading = false
        state.tuitInfoArray = payload
      },
    [findTuitsThunk.rejected]:
      (state, action) => {
        state.loading = false
        state.error = action.error
      }
  },
  reducers: {
    // deleteTuit(state, action) {
    //   const index = state.tuitsArray.findIndex(tuitsArray =>
    //     tuitsArray._id === action.payload);
    //   state.tuitsArray.splice(index, 1);
    // },
    // createTuit(state, action) {
    //   state.tuitsArray.unshift({
    //     ...action.payload,
    //     ...templateTuit,
    //     _id: (new Date()).getTime(),
    //   })
    // }
  }
});

export const { createTuit, deleteTuit } = tuitInfoSlice.actions;
export default tuitInfoSlice.reducer;