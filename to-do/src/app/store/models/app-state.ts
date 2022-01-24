import { ActionReducerMap } from "@ngrx/store";
import { ShoppingReducer } from "../reducers/shopping.reducer";
import { ShoppingItem } from "./shopping-item";

export interface AppState {
    readonly shopping: ShoppingItem[]
}

// export const reducers: ActionReducerMap<AppState, any> = {
//     // shoppingList: ShoppingReducer
// };