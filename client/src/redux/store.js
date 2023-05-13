import { configureStore } from "@reduxjs/toolkit";
import { loaderSlice } from "./feature/loaderSlice";
import { userSlice } from "./feature/userSlice";

export default configureStore({
    reducer: {
        alert: loaderSlice.reducer,
        user: userSlice.reducer
    }
})