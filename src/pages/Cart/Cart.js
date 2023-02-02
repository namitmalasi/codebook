import React from "react";
import { CartEmpty } from "./components/CartEmpty";
import { CartList } from "./components/CartList";
import { useCart } from "../../context";
 
export function Cart() {
  const {cartList} = useCart();
  return <main>{cartList.length ? <CartList /> : <CartEmpty />}</main>;
}
