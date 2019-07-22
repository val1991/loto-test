import { 
    CHECK_VALUES,
    RESET_CARDS,
  } from './types';

  const emptyArray = [
    new Array(20).fill(""),
    new Array(20).fill(""),
    new Array(20).fill(""),
    new Array(20).fill(""),
    new Array(20).fill("")
  ]
  
  let initialState = {
      initialCards: [...emptyArray],
      winCards: []
    };
    
    export default (state = initialState, action) => {
      switch (action.type) {
        case CHECK_VALUES:
          return {
            ...state,
            winCards: action.payload,
          }
        case RESET_CARDS:
        default:
          return state;
      }
    };