export function ProductReducer(state, action) {
    switch (action.type) {
        case 'Toggle_Product_Code':
            return {
                ...state,
                showProductCode: action.payload,
            };
        case 'default':
            return state;
    }
}
