import { createSlice } from '@reduxjs/toolkit';

const initialState= {
    imposto: "",
    comissao: "",
    frete: "",
    liquido: "",
    margemVenda: "",
    margemCusto: ""
};

const dataTableSlice = createSlice({
    name:"dataTable",
    initialState: initialState,
    reducers: {
        getImposto: (state, action) => {
            state.imposto = action.payload;
        },
        getComissao: (state, action) => {
            state.comissao = action.payload;
        },
        getFrete: (state, action) => {
            state.frete = action.payload;
        },
        getLiquido: (state, action) => {
            state.liquido = action.payload;
        },
        getMargemVenda: (state, action) => {
            state.margemVenda = action.payload
        },
        getMargemCusto: (state, action) => {
            state.margemCusto = action.payload
        }
    }
});

export const selectDataTable = (state) => state.dataTable;
export const {getImposto, 
            getComissao, 
            getCusto, 
            getLiquido, 
            getMargemVenda, 
            getMargemCusto,
            getFrete} = dataTableSlice.actions;
export default dataTableSlice.reducer;