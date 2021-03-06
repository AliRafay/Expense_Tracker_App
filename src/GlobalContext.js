import React, { useReducer } from 'react'
import { createContext } from 'react'
import {AppReducer} from './AppReducer'

const InitialTransactions = []
    // { id: 1, desc: 'books', amount: 40 },
    // { id: 2, desc: 'bill', amount: -60 },
    // { id: 3, desc: 'salary', amount: 300 },

export const TransContext = createContext(InitialTransactions);

export const GlobalProvider = ({children})=>{
    let [state, dispatch] = useReducer(AppReducer,InitialTransactions);

    function addTransaction(transObj){
        dispatch({
            type:"ADD_TRANSACTION",
            payload:{
                amount:transObj.amount,
                desc:transObj.desc,
                id:transObj.id
            },
        })
    }

    function delTransaction(id) {
        dispatch({
            type:"DELETE_TRANSACTION",
            payload:id
        })
    }
    return (
        <TransContext.Provider value={{
            transactions:state,
            addTransaction,
            delTransaction
        }}>
            {children}
        </TransContext.Provider>
    )
}