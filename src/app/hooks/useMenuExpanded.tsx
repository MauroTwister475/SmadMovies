"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface MenuExpandedContextData {
  isExpanded: boolean,
  handlerIsMenuExpanded: () => void,
  handlerNotMenuExpanded: () => void,
}

const MenuExpandedContext = createContext(
  {} as MenuExpandedContextData );

  interface MenuExpandedProviderProps {
    children: ReactNode,
  }

export function MenuExpandedProvider({ children }: MenuExpandedProviderProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  function handlerIsMenuExpanded() {
    setIsExpanded(true);
  }
  function handlerNotMenuExpanded() {
    setIsExpanded(false);
  }

  return (
    <MenuExpandedContext.Provider value={{ isExpanded, handlerIsMenuExpanded, handlerNotMenuExpanded }}>
      {children}
    </MenuExpandedContext.Provider>
  )
}

export function useMenuExpanded() {
  return useContext(MenuExpandedContext);
}