import { createContext, useReducer } from 'react';

const initialState = {
    debtorNumber: '',
    preferencesList: [],
    currentDebtor: {}
};

export const actions = Object.freeze({
    GET_DEBTORS: 'GET_DEBTORS',
    SELECT_DEBTOR: 'SELECT_DEBTOR',
    SET_DEBTOR_NUMBER: 'SET_DEBTOR_NUMBER'
});

const reducer = (state, action) => {
    switch (action.type) {
        case actions.GET_DEBTORS:
            return {
                ...state,
                preferencesList: action.payload
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