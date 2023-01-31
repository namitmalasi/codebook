import React from "react";
import { CartEmpty } from "./components/CartEmpty";
import { CartList } from "./components/CartList";

export function Cart() {
  const cartListLength = 2;
  return <main>{cartListLength ? <CartList /> : <CartEmpty />}</main>;
}
