import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: 1, vendor: "VISA", cardholder: "", cardnumber: "3244645646573249", month: 12, year: 23, ccv: 144},
    {id: 2, vendor: "MASTERCARD", cardholder: "", cardnumber: "4534564646557346", month: 4, year: 25, ccv: 111},
]

const cardsSlice = createSlice({
    name: "cards",
    initialState,
    reducers: {
        cardAdded(state, action) {
            state.push(action.payload)
        },
        removeCard(state, action) {
            const { id } = action.payload; 
            console.log(id)
            return state = state.filter(card => card.id !== id)
        }
    }
})

export const { cardAdded, removeCard } = cardsSlice.actions

export default cardsSlice.reducer