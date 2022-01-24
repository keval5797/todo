import { createReducer,on } from "@ngrx/store";
import { AddItemAction, ShoppingAction, ShoppingActionTypes } from "../actions/shopping.actions";
import { ShoppingItem } from "../models/shopping-item";

const initialState: Array<ShoppingItem> = [
    {
        id: '1777777',
        name: 'Diet Coke'
    }
]

// const reducer = createReducer(
//     initialState,
//     on (AddItemAction, (state, action) => {
//        return [...state, action.payload]
//     })
//  );

export function ShoppingReducer(state: Array<ShoppingItem>| undefined = initialState,action : ShoppingAction){
    if(action.type == ShoppingActionTypes.ADD_ITEM){
        return [ ...state,action.payload]
    }
    else{
        return state;
    }
}

