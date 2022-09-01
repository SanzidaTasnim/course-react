import React from 'react';
import Badge from 'react-bootstrap/Badge';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cart.css';

const Cart = (props) => {

   function fixedNum(num){
      const toFixed = num.toFixed(2);
      const toNumber = Number(toFixed);
      return toNumber;
   }
   const cart = props.cart;
   const totalPrice = cart.reduce((total,item) => total + item.price ,0);
   let discount = fixedNum(totalPrice * 0.40);
   const tax = fixedNum(totalPrice * 0.10);
   const grandTotal = fixedNum((totalPrice - discount) + tax);

   
   return (
      <div className="cart-margin">
         <Badge text ='dark' bg='warning'>
            <h6>Order Summary</h6>
         </Badge>
         <p className="margin">Course Purchased: {cart.length}</p>
         <p>Price: ${totalPrice}</p>
         <p>Discount 40%: ${discount}</p>
         <p>Tax & vat: ${tax}</p>
         <p>Total Price: ${grandTotal}</p>
         <button>Place Your Order</button>
         
      </div>
   );
};

export default Cart;