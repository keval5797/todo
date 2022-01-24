import {Action} from '@ngrx/store';
import { ShoppingItem } from '../models/shopping-item';

export enum ShoppingActionTypes {
    ADD_ITEM = '[Shopping] Add Item',
    ADD_ITEM_SUCCESS = '[Shopping] Add Item Success',
    ADD_ITEM_FAILURE = '[Shopping] Add Item Failure',
}

export class AddItemAction  {
    readonly type = ShoppingActionTypes.ADD_ITEM;
    constructor(public payload: ShoppingItem) {}
}

export type ShoppingAction = AddItemAction