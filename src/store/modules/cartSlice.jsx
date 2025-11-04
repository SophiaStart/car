import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    // 空数组，用来存放购物车数据
   cart: [],
   isCartOpen: false, // 购物车弹窗是否显示
  },
  reducers: {
    addToCart: (state, action) => {
      // 向购物车添加商品，如果商品已存在，则增加数量，否则添加新商品。
      // state.cart.find(...) 检查购物车中是否已有相同 id 的商品
        const existingItem = state.cart.find(item => item.id === action.payload.id);
        
        if (existingItem) {
          existingItem.quantity += action.payload.quantity;
        } else {
          // 如果没找到（新商品）：
          // 将新商品对象 push 到 cart 数组
          // 同时设置数量（如果 action.payload.quantity 没传，默认是 1）
          state.cart.push({ ...action.payload, quantity: action.payload.quantity || 1 });
        }
      },
    toggleCart: (state) => {
      // 将 state.isCartOpen 取反
      // 如果原来是 false（隐藏），会变成 true（显示）
      // 如果原来是 true（显示），会变成 false（隐藏）
        state.isCartOpen = !state.isCartOpen;
    },
    removeCart:(state,action)=>{
        const id = action.payload;
        state.cart = state.cart.filter(item => item.id !== id);
          
    },
    updateCartQuantity: (state, action) => {
        const { id, quantity } = action.payload;
        const item = state.cart.find(item => item.id === action.payload.id);
        if (item) {
          item.quantity = Math.max(1, quantity); // 确保数量不小于1
          console.log(id);
        }
    }
  }
})
const {addToCart,toggleCart,removeCart,updateCartQuantity} = cartSlice.actions
const cartReducer = cartSlice.reducer

export {addToCart,toggleCart,removeCart,updateCartQuantity}
export default cartReducer