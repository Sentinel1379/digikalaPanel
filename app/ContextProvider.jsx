"use client";
import React from "react";
import { createContext, useState } from "react";
 

export const MenuContext = createContext({
  state1: null,
  setState1: () => {},
});

export function MenuContextProvider(props) {
  const [itemBold, setItemBold] = useState("");

  return (
    <MenuContext.Provider value={{ itemBold, setItemBold }}>
      {props.children}
    </MenuContext.Provider>
  );
}
