import * as actions from './BaseActions';
import { IBaseProps } from './IBaseProps';

export const initialBaseState: IBaseProps = {
    items: []
}

export default (state = initialBaseState, action: any) => {
    switch(action.type) {
        case 'INIT': return state;
        case 'INCREMENT':
            const incrementedItems = [ ...state.items ];
            const incrementedItemIndex = incrementedItems.findIndex(item => item.id === action.payload.id)
            if (incrementedItemIndex >= 0) {
                incrementedItems[incrementedItemIndex].selectedCount! += 1;
            } else {
                const newItem = {...action.payload};
                newItem.selectedCount = 1;
                incrementedItems.push(newItem);
            }
            return { items: incrementedItems };
        case 'DECREMENT':
            const decrementedItems = [ ...state.items ];
            const decrementedItemIndex = decrementedItems.findIndex(item => item.id === action.payload.id)
            if (decrementedItemIndex >= 0 && decrementedItems[decrementedItemIndex].selectedCount! > 1) {
                decrementedItems[decrementedItemIndex].selectedCount! -= 1;
            } else {
                decrementedItems.splice(decrementedItemIndex, 1);
            }
            return { items: decrementedItems };
        default:
            return state;
    }
}