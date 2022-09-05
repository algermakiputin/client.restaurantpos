const order = (state = [], action) => {
    switch(action.type) {
        case 'ADD_LINE_ITEM' : 
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    price: action.price
                }
            ]
        default: 
            return state
    }
}

export default order;