import { createContext, useContext, useReducer } from "react";
import cartItems from "./data";
import reducer from "./reducer.js";

const globalContext = createContext();

export const GlobalContextApp = ({ children }) => {
    const cartData= new Map();
    cartItems.forEach(element => {
      cartData.set(element.id, element);
    });

    // Array.from( cartData ).map(([key, values])=>{
    //   console.log(values);
    // }) 

    const defaultState={
        cartArray: [...cartItems],
        cartMap: cartData,
    }
    const[state, dispatch]= useReducer(reducer, defaultState);

  return (
    <globalContext.Provider value={{state, dispatch}} >
        {children}
    </globalContext.Provider>
  )
};

const useGlobalContext=()=>{
    return useContext(globalContext);
}
export default useGlobalContext;