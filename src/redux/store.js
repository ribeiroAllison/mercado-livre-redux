import { configureStore } from '@reduxjs/toolkit';
import dataInputReducer from '@/redux/DataInput/dataInputSlice';

export default configureStore({
    reducer: {
        dataInput: dataInputReducer
    }
})