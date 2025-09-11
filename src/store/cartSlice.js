const { createSlice } = require("@reduxjs/toolkit");

const cart = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    //additem

    addItem(state, action) {
      const index = state.findIndex((item) => item.id === action.payload.id);
      const countAdd = Number(action.payload.count || 1);

      if (index > -1) {
        state[index].count += countAdd;
        state[index].totalPrice =
          Number(state[index].after_price) * Number(state[index].count);
      } else {
        state.push({
          ...action.payload,
          count: countAdd,
          totalPrice: Number(action.payload.after_price) * countAdd,
        });
      }
    },

    //addCount
    addCount(state, action) {
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state[index].count++;
        state[index].totalPrice =
          Number(state[index].after_price) * state[index].count;
      }
    },
    //subCount
    subCount(state, action) {
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index === -1) return;

      state[index].count -= 1;

      if (state[index].count <= 0) {
        state.splice(index, 1);
         return;
      } 
        state[index].totalPrice =
          Number(state[index].after_price) * state[index].count;
      },
    //deleteitem
    deleteItem(state, action) {
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addItem, addCount, deleteItem, subCount } = cart.actions;
export default cart.reducer;
