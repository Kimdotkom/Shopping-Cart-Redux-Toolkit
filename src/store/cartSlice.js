import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    data: [],
    totalPrice: 0,
    status: 'Idle'
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action) {
            state.data.push(action.payload)
            state.totalPrice = state.totalPrice + action.payload.price
        },
        remove(state, action) {
            state.data = state.data.filter(item=> item.id !== action.payload.id)
            state.totalPrice = state.totalPrice - action.payload.price * action.payload.qty
        },
        addQty(state, action) {
            state.data.map(el => {
                return el.id === action.payload.id ?
                {...el, qty: (el.qty +=  1) && (state.totalPrice = state.totalPrice + action.payload.price )}
                :
                el
            })
            
        },
        minusQty(state, action) {
            state.data.map(el => {
                return el.id === action.payload.id ?
                {...el, qty: el.qty > 1 ? (el.qty -=  1) && (state.totalPrice = state.totalPrice - action.payload.price)
                : el.qty}
                :
                el
            })
            
        }
    }
})


export const {add, remove, addQty, minusQty} = cartSlice.actions
export default cartSlice.reducer 