import {createStore, applyMiddleWare, combineReducers } from 'redux';
import { DrawerReduser } from './drawerreduces';

const reducer = combineReducers({
    drawerReducer: DrawerReduser,
})
 const store = createStore(reducer)

 export default store