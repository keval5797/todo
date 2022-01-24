import { ShoppingAction, ShoppingActionTypes } from "../actions/shopping.actions";
import { ShoppingItem } from "../models/shopping-item";

const initialState: Array<ShoppingItem> = [
    {
        id: '1777777',
        name: 'Diet Coke'
    }
]
export function shoppingListReducer(
    state = initialState,
    action: ShoppingAction
  ) {
    switch (action.type) {
      case ShoppingActionTypes.ADD_ITEM:
        return {
          ...state,
          ingredients: [...state, action.payload]
        };
      default:
        return state;
    }
  }