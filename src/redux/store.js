import { configureStore } from '@reduxjs/toolkit';
import dataInputReducer from '@/redux/DataInput/dataInputSlice';
import dataTableReducer from '@/redux/DataTable/dataTableSlice';

export default configureStore({
    reducer: {
        dataInput: dataInputReducer,
        dataTable: dataTableReducer
    }
});