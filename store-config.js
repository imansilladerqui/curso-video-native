import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import reducer from './src/store/reducers/store';
import storage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['selectedMovie'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export {store, persistor};
