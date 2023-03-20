import { createContext, useReducer } from 'react';
import placeholderdata from '../../placeholderdata';

const initialState = {
    debtorNumber: '',
    preferencesList: [],
    currentDebtor: {},
    currentDebtorNotes: []
};

export const actions = Object.freeze({
    GET_DEBTORS: 'GET_DEBTORS',
    SELECT_DEBTOR: 'SELECT_DEBTOR',
    SET_DEBTOR_NUMBER: 'SET_DEBTOR_NUMBER',
    SELECT_DEBTOR_NOTES: 'SELECT_DEBTOR_NOTES'
});

const reducer = (state, action) => {
    switch (action.type) {
        case actions.GET_DEBTORS:
            return {
                ...state,
                preferencesList: placeholderdata.debtors.items
            }
        case actions.SELECT_DEBTOR:
            const debtor = state.preferencesList.filter(debtor => debtor.debtorNumber === action.debtorNumber)[0];
            return {
                ...state,
                currentDebtor: debtor
            };
        case actions.SET_DEBTOR_NUMBER:
            return {
                ...state,
                debtorNumber: action.debtorNumber
            };
        case actions.SELECT_DEBTOR_NOTES:
            return {
                ...state,
                currentDebtorNotes: placeholderdata.debtorNotes['0028396']
            };
        default:
            return state;
    }
}

export const DebtorContext = createContext();

export const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <DebtorContext.Provider value={{ state, dispatch }}>
            {children}
        </DebtorContext.Provider>
    )
};