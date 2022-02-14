import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState = {
    Check__User : null
};

const checkSlice = createSlice({
    name : "check__user",
    initialState,

    reducers: {
        checkUser: (state, action) => {
            state.Check__User = action.payload;
        }
    }
})

export const { checkUser } = checkSlice.actions;

export default checkSlice.reducer;