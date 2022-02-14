import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState = {
    RestaurantUser : null
};

const restauratSlice = createSlice({
    name : "restaurantuser",
    initialState,

    reducers: {
        addRestaurantUser: (state, action) => {
            state.RestaurantUser = action.payload;
        }
    }
})

export const { addRestaurantUser } = restauratSlice.actions;

export default restauratSlice.reducer;