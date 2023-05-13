import { createSlice } from "@reduxjs/toolkit"




export const loaderSlice = createSlice({
    name: "alert",
    initialState: { loading: false },
    reducers: {
        showloader: (state) => {
            state.loading = true;
        },
        hideLoader: (state) => {
            state.loader = false;
        }
    }
})


export const { showloader, hideLoader } = loaderSlice.actions