import React from 'react';

import './styles.scss';

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
        winCards,
    } = props;

    const renderPoints = () => {
        let count = 0;
        for (const item in values) {
            
            for (const i in values[item]) {
                if(winCards.includes(values[item][i])) {
                    count += 1;
                }
            }

        }
        return count;
    }
    return (
        <div>
            <div className="cards-block">
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
                            className='cards-block__card'
                            classNameError='cards-block__card__error'
                        >
                        {card.map((cardItem, subItem) => {
                            return (
                                <Field
                                    key={subItem}
                                    component={CheckBoxField}
                                    name={`checkboxGroup${index + 1}`}
                                    innerNumber={subItem + 1}
                                    id={`${index}.${subItem + 1}`}
                                    disabled={winCards.length !== 0}
                                    winCards={winCards}
                                />
                            )
                        })} 
                        </CheckboxGroup>
                    )
                })}
            </div>
            <ButtonComponent
                innerText={`${props.winCards.length === 0 ? "Submit" : "Try again"}`}
                onClick={handleSubmit}
                disabled={!isValid || isSubmitting}
            />
            {winCards.length !== 0 && <div> You get {renderPoints()} points</div>}
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
    handleSubmit: async (values, { props, setSubmitting, resetForm }) => {
        if(props.winCards.length !== 0) {
            resetForm();
            props.handleResetForm()
        } else {
            await props.handlSubmit(values, setSubmitting);
        }
    },
})(CardBlocksForm);
