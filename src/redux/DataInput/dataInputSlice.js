import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tipoAnuncio: "",
    precoVenda: "",
    custo: "",
    imposto: "",
    peso: 0
};

const dataInputSlice = createSlice({
    name: 'dataInput',
    initialState: initialState,
    reducers: {
        editTipoAnuncio: (state, action) => {
            state.tipoAnuncio = action.payload;
        },
        editPrecoVenda: (state, action) => {
            state.precoVenda = action.payload;
        },
        editCusto: (state, action) => {
            state.custo = action.payload;
        },
        editImposto: (state, action) => {
            state.imposto = action.payload;
        },
        editPeso: (state, action) => {
            state.peso = action.payload;
        }
            
    }
})

export const selectDataInput = (state) => state.dataInput;
export const { editTipoAnuncio, editPrecoVenda, editCusto, editImposto, editPeso } = dataInputSlice.actions;
export default dataInputSlice.reducer;
