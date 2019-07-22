import React from 'react';

import { withFormik, Field } from 'formik';
import * as yup from 'yup';


import CheckboxGroup from '../CheckboxGroup';
import CheckBoxField from '../CheckBoxField';
import ButtonComponent from '../ButtonComponent';

function validateCardsCount(value) {
    if(value.length > 5) {
        return false;
    } else {
        return true;
    }
}

const CardBlocksFormShema = yup.object().shape({
    checkboxGroup1: yup
        .array()
        .test(
            "checkboxGroup1",
            "Max 5",
            validateCardsCount
        ),
    checkboxGroup2: yup
        .array()
        .test(
            "checkboxGroup2",
            "Max 5",
            validateCardsCount
        ),
    checkboxGroup3: yup
        .array()
        .test(
            "checkboxGroup3",
            "Max 5",
            validateCardsCount
        ),
    checkboxGroup4: yup
        .array()
        .test(
            "checkboxGroup4",
            "Max 5",
            validateCardsCount
        ),
    checkboxGroup5: yup
        .array()
        .test(
            "checkboxGroup5",
            "Max 5",
            validateCardsCount
        ),
});


const CardBlocksForm = (props) => {
    const { 
        handleSubmit,
        isValid,
        isSubmitting,
        values,
        errors,
        touched,
        setFieldValue,
        setFieldTouched,
        initialCards,
        winCards
    } = props;
    console.log('winCards  ', winCards)
    return (
        <div>
            {initialCards.map((card, index) => {
                return (
                    <CheckboxGroup
                        key={index}
                        id={`checkboxGroup${index + 1}`}
                        value={values[`checkboxGroup${index + 1}`]}
                        error={errors[`checkboxGroup${index + 1}`]}
                        touched={touched[`checkboxGroup${index + 1}`]}
                        onChange={setFieldValue}
                        onBlur={setFieldTouched}
                    >
                       {card.map((cardItem, indexItem) => {
                           return (
                            <Field
                                key={indexItem}
                                component={CheckBoxField}
                                name={`checkboxGroup${index + 1}`}
                                id={`${index}.${indexItem}`}
                                disabled={winCards.length !== 0}
                            />
                           )
                       })} 
                    </CheckboxGroup>
                )
            })}
            <ButtonComponent
                innerText="Submit"
                onClick={handleSubmit}
                disabled={!isValid || isSubmitting}
            />
        </div>
    );
}

export default withFormik({
    mapPropsToValues: () => ({
        checkboxGroup1: [],
        checkboxGroup2: [],
        checkboxGroup3: [],
        checkboxGroup4: [],
        checkboxGroup5: [],
    }),
    isInitialValid: true,
    validationSchema: CardBlocksFormShema,
    handleSubmit: async (values, { props, setSubmitting }) => {
        await props.handlSubmit(values, setSubmitting);
    },
})(CardBlocksForm);
