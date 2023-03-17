import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: '',
    isFeatured: false
};

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        searchKeyword: (state, action) => {
            state.search = action.payload;
        },
        setFeatured: (state, action) => {
            state.isFeatured = action.payload;
        }
    }
});

export default filterSlice.reducer;
export const { searchKeyword, setFeatured } = filterSlice.actions;