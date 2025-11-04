import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart,removeCart,updateCartQuantity  } from '../store/modules/cartSlice';
import "./css/banner.css";
import { Button } from "@mui/material";

export default function Banner() {
  // cartItems：从 Redux 状态中获取购物车商品列表
  // isCartOpen：购物车弹窗是否显示的状态
  // dispatch：用于触发 Redux actions
  // 第一个 .cart：访问全局 state 里由 cartReducer 管理的那部分状态
  // 第二个 .cart：访问 cartReducer 状态里的 cart 属性（也就是购物车数组）
  const cartItems = useSelector(state => state.cart.cart) || []; 
  const isCartOpen = useSelector(state => state.cart.isCartOpen);
  const dispatch = useDispatch();
  // 计算购物车商品数量
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  // 计算购物车总金额
  const totalAmount = cartItems.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);
  const handleToggleCart = () => {
    dispatch(toggleCart());
  };
  const [errors, setErrors] = React.useState('');
  const handleCheckout = () => {
    setErrors('Checkout is disabled on this site.');
  }

  return (
    <div>
      <div className="nav">
        <div className="nav-top">
          <div className="container">
            <div className="nav-top-left">
              <span>Call Us: +1 213 974-5898</span>
              <span>
                Email: <a href="#">toystore@template.com</a>
              </span>
            </div>
            <div className="nav-top-right">
              <a href="https://elasticthemes.com" target="_blank" class="social-link w-inline-block">
                <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec5227792568635e37_twitter-icon-white.svg" alt=""/>
              </a>
              <a href="https://elasticthemes.com" target="_blank" class="social-link w-inline-block">
                <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec3cb36463d4cf4661_facebook-icon-white.svg" alt=""/>
              </a>
              <a href="https://elasticthemes.com" target="_blank" class="social-link w-inline-block">
                <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec7fe624275552217c_instagram-icon-white.svg" alt=""/>
              </a>
              <a href="https://elasticthemes.com" target="_blank" class="social-link w-inline-block">
                <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec6e93377c0bbdba8a_pinterest-icon-white.svg" alt=""/>
              </a>
              <a href="https://elasticthemes.com" target="_blank" class="social-link w-inline-block">
                <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eecfff242b7c309e311_youtube-icon.svg" alt=""/>
              </a>
            </div>
          </div>
        </div>
        <div className="nav-bottom">
          <div className="container">
            <div className="nav-bottom-left">
              <div className="logo"><span>ToyStore</span></div>
              <div className="nav-menu">
                <a href="/catalog">Catalog</a>
                <a href="/delivery">Delivery</a>
                <a href="/about">About</a>
                <a href="/contacts">Contacts</a>
              </div>
            </div>
            <div className="nav-bottom-right">
              <a href="#" onClick={handleToggleCart}>Cart</a>
              <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5baf75c3bf02346640399fec_cart-icon.svg" alt="" />
              <div className="cart">
                <span>{cartCount}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
       {/* 弹窗区域：添加关闭按钮 */}
       {isCartOpen && (
        <div className="cart-popup">
          {/* 弹窗头部：标题 + 关闭按钮 */}
          <div className="cart-popup-header">
            <h2>You Cart</h2>
            {/* 关闭按钮：点击触发隐藏弹窗 */}
            <button className="cart-close-btn" onClick={handleToggleCart}>
              ×
            </button>
          </div>

          {/* 弹窗内容：商品列表/空提示 */}
          {cartItems.length === 0 ? (
            <p className="cart-empty">购物车为空</p>
          ) : (
            <>
              {cartItems.map(item => (
                <div className="cart-item" key={item.id}>
                  <img src={item.img} alt={item.title} />
                  <div className="cart-item-info">
                    <h3>{item.title}</h3>
                    <a style={{ color: '#fb416b', cursor: 'pointer' }} onClick={()=>{dispatch(removeCart(item.id))}}>Remove</a>
                    <input 
                      type="number" 
                      min="1" 
                      // 绑定商品当前数量（受控）
                      value={item.quantity} 
                      // 数量变化时更新 Redux
                      onChange={(e) => {
                        const newQuantity = Number(e.target.value); // 转成数字
                        dispatch(updateCartQuantity({ 
                          id: item.id, 
                          quantity: newQuantity 
                        }));
                      }}
                    />
                    
                  </div>
                </div>
              ))}
              {/* 总金额区域 */}
              <div className="cart-total">
                <label>Subtotal:</label>
                <span>${totalAmount.toFixed(2)} USD</span>
              </div>
              <div className="checkout-btn">
                <Button 
                  variant="contained"
                  sx={{
                    backgroundColor: '#a5c926',
                    height: '40px',
                    width: '100%',
                    borderRadius: '24px',
                  }}
                  onClick={handleCheckout}

                >Continue to Checkout</Button>
              </div>
              {errors && (
                <div style={{ color: '#fb416b', fontSize: '14px'}} className="err">
                  {errors}
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}