import {configureStore} from '@reduxjs/toolkit'
import MovieTicketReducer from './MovieTicketReducer'

export const store=configureStore({
    reducer:{ 
        MovieTicketReducer:MovieTicketReducer
    }
})