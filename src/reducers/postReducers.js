const postInitialValue = [
    {id: 1, title: 'Game of thrones', postDes: 's8 could have been better'},
    {id:2, title: 'About forest', postDes: 'Save trees, save livess'}
]

export const postReducer = (state=postInitialValue, action) => {
    switch(action.type){
        case 'ADD_POST': {
            return state.concat(action.payload)
        }
        case 'FILTERED_POST': {
            return [ ...action.payload]
        }
        default: {
            return [...state]
        }
    }
}

