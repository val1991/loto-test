import { combineReducers } from 'redux';

import cardsReducer from './modules/cards';

export default () => combineReducers({
    cards: cardsReducer,
});