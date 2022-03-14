import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";
const initialCountState = {
  counter: 0,
  counterShow: true,
};

const counterSlice = createSlice({
  name: "COUNTER",
  initialState: initialCountState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.counterShow = !state.counterShow;
    },
  },
});

const initialAuthState = { isAuthenticated: false };

const authSlice = createSlice({
  name: "AUTH",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});
export const authActions = authSlice.actions;
export const counterActions = counterSlice.actions;

export default store;
// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return { counter: state.counter + 1, counterShow: state.counterShow };
//     case "DECREMENT":
//       return { counter: state.counter - 1, counterShow: state.counterShow };
//     case "INCREMENTBY5":
//       return {
//         counter: state.counter + action.payload,
//         counterShow: state.counterShow,
//       };
//     case "TOGGLE":
//       return { counterShow: !state.counterShow, counter: state.counter };
//     default:
//       return state;
//   }
// };
// const store = createStore(counterReducer);

// export default store;
