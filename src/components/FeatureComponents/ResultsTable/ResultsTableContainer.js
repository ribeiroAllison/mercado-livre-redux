"use client";

import ResultsTable from "./ResultsTable";
import { useDispatch, useSelector } from 'react-redux';
import {
    getImposto,
    getComissao,
    getFrete,
    getLiquido,
    getMargemVenda,
    getMargemCusto,
    selectDataTable
} from '@/redux/DataTable/dataTableSlice';

import {
    calculateComissao,
    calculateFrete,
    calculateImposto,
    calculateLiquido,
    margemCusto,
    margemVenda
} from './utils'

import { selectDataInput } from "@/redux/DataInput/dataInputSlice";
import { useEffect } from "react";


const ResultsTableContainer = () => {
    const inputState = useSelector(selectDataInput);
    const tableState = useSelector(selectDataTable);

    const dispatch = useDispatch();

    const updateData = () => {
        dispatch(getImposto(calculateImposto(inputState.imposto, inputState.precoVenda)));
        dispatch(getComissao(calculateComissao(inputState.tipoAnuncio, inputState.precoVenda)));
        dispatch(getFrete(calculateFrete(inputState.precoVenda, inputState.peso)));
        dispatch(getLiquido(calculateLiquido(inputState.precoVenda, inputState.custo, tableState.imposto, tableState.comissao, tableState.frete)));
        dispatch(getMargemCusto(margemCusto(inputState.custo, tableState.liquido)));
        dispatch(getMargemVenda(margemVenda(inputState.precoVenda, tableState.liquido)));
    };

    useEffect(() => {
        updateData();
    }, [inputState, tableState])

    return(
        <ResultsTable tableState={tableState} inputState={inputState}/>
    )
};

export default ResultsTableContainer;
