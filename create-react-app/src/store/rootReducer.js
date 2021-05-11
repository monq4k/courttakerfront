import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//reducers

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = persistReducer(
    persistConfig,
    combineReducers({
        //add court main reducer
        courts: '',
    })
);

export default rootReducer;
