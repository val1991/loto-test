import React from 'react';

import { connect } from 'react-redux';

import { checkCardsValuesAction, resetCardsValuesAction } from '../../reducer/modules/cards/actions';

import CardBlocksForm from './CardBlocksForm';

const CardsBlock = (props) => {
    const { initialCards, winCards } = props;
    const handlSubmit = (values, setSubmitting) => {
        const { checkCardsValuesAction } = props;
        checkCardsValuesAction()
        setSubmitting(false);
    }

    const handleResetForm = () => {
        const { resetCardsValuesAction } = props;
        resetCardsValuesAction();
    }

    return (
        <div>
            <CardBlocksForm
                handlSubmit={handlSubmit}
                handleResetForm={handleResetForm}
                initialCards={initialCards}
                winCards={winCards}
            />
        </div>
    );
}

function mapStateProps(state) {
    return {
        initialCards: state.cards.initialCards,
        winCards: state.cards.winCards
    };
}
export default connect(
    mapStateProps,
    { checkCardsValuesAction, resetCardsValuesAction },
)(CardsBlock);

