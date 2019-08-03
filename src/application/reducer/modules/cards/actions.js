import { 
    CHECK_VALUES,
    RESET_CARDS,
} from './types';

function generateRandomInteger(min, max) {
    return Math.floor(min + Math.random()*(max + 1 - min))
  }

export const checkCardsValuesAction = (setSubmitting) => dispatch => {
    let winValues = [];

    let index = 0;
    for (index; index < 5;index += 1) {
        let subIndex = 0;
        for (subIndex; subIndex < 5;) {
            const randomValue = `${index}.` + generateRandomInteger(0, 20);
            if(winValues.includes(randomValue)) {
            } else {
                winValues.push(randomValue);
                subIndex += 1;
            }
        }
        
    }

    dispatch({
        type: CHECK_VALUES,
        payload: winValues,
    });
    setSubmitting(false);
};

export const resetCardsValuesAction = () => dispatch => {
    dispatch({
        type: RESET_CARDS,
    });
};