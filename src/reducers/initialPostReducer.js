const postInitialValue = [
    {id: 1, title: 'Game of thrones', postDes: 's8 could have been better'},
    {id:2, title: 'About forest', postDes: 'Save trees, save livess'}
]

export const initialPostReducer = (state=postInitialValue, action) => {
    switch(action.type){
        default: {
            return [...state]
        }
    }
}

