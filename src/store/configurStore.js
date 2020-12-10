import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'

import {postReducer} from '../reducers/postReducers'
import {initialPostReducer} from '../reducers/initialPostReducer'
const configureStore = () => {
    const store = createStore(
        combineReducers({
            post: postReducer, 
            initialPost:initialPostReducer
        }), applyMiddleware(thunk)
    )

    return store
}

export default configureStore