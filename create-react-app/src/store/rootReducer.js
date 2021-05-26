import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//reducers
import courtListReducer from './courts/reducer';
import loginReducer from './login/reducer';
import loadingReducer from './spinner/reducer';
import userReducer from './user/reducer';

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = persistReducer(
    persistConfig,
    combineReducers({
        courts: courtListReducer,
        login: loginReducer,
        loading: loadingReducer,
        user: userReducer,
    })
);

export default rootReducer;
