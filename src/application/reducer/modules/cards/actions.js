import { 
    CHECK_VALUES,
    RESET_CARDS,
} from './types';

function generateRandomInteger(min, max) {
    return Math.floor(min + Math.random()*(max + 1 - min))
  }

export const checkCardsValuesAction = () => dispatch => {
    console.log('checkCardsValuesAction')
    let winValues = [];

    let index = 0;
    for (index; index < 5; index++) {
        winValues.push(generateRandomInteger(0, 20))
        
    }

    dispatch({
        type: CHECK_VALUES,
        payload: winValues,
    });
};

export const resetCardsValuesAction = () => dispatch => {
    dispatch({
        type: RESET_CARDS,
    });
};