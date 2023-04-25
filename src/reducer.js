import {
  CLEAR_CART,
  DECREASE_ITEM,
  INCREASE_ITEM,
  REMOVE_ITEM,
} from "./actions";

const reducer = (state, action) => {
  // {INCREASE_ITEM}
  if (action.type == INCREASE_ITEM) {
    const newMap = new Map(state.cartMap);
    const data = newMap.get(action.payload);
    const amount = data.amount + 1;

    const newData = { ...data, amount: amount };
    newMap.set(action.payload, newData);

    return { ...state, cartMap: newMap };
  }

  // DECREASE ITEM
  if (action.type == DECREASE_ITEM) {
    const newMap = new Map(state.cartMap);
    const data = newMap.get(action.payload);

    let amount = data.amount;
    if (amount == 1) {
      newMap.delete(action.payload);
      return { ...state, cartMap: newMap };
    } else {
      amount = amount - 1;
      const newData = { ...data, amount: amount };
      newMap.set(action.payload, newData);
      return { ...state, cartMap: newMap };
    }
  }

  // clear cart
  if (action.type == CLEAR_CART) {
    const newCart = new Map();
    return { ...state, cartMap: newCart };
  }

  // REMOVE ITEM
  if (action.type == REMOVE_ITEM) {
    const newMap = new Map(state.cartMap);
    newMap.delete(action.payload);
    return { ...state, cartMap: newMap };
  }

  throw new Error(`type mismatch ${action.type} not found in reducer`);
};
export default reducer;
