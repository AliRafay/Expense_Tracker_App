export const AppReducer = ((state, action) => {
    switch (action.type) {
        case "ADD_TRANSACTION": {
            return [action.payload, ...state]
        }
        case "DELETE_TRANSACTION": {
            return [...state].filter(transObj=>
                transObj.id !== action.payload)
        }
        default:
            return state;
    }   
})