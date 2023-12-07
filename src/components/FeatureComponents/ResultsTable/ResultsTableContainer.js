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

import { selectDataInput } from "@/redux/DataInput/dataInputSlice";
import { useEffect } from "react";

const ResultsTableContainer = () => {
    const inputState = useSelector(selectDataInput);
    const tableState = useSelector(selectDataTable);

    const dispatch = useDispatch();

    const calculateImposto = () => {
        const treatedPercentage = Number(inputState.imposto.replace(/\D/g, '')) / 100;
        return (Number(inputState.precoVenda) * treatedPercentage).toFixed(2);
    };

    const calculateComissao = () => {
        let comissao;
        if(inputState.tipoAnuncio === 'classico'){
            comissao = Number(inputState.precoVenda) * 0.13;
        } else{
            comissao = Number(inputState.precoVenda) * 0.18;
        }
        return comissao;
    };

    const calculateFrete = () => {
        const preco = inputState.precoVenda;
        const maxPrice = 79;
        const fixed = 6;
        const tabelaFrete = {
            300: 18.95,
            500: 19.45,
            1000: 21.45,
            2000: 22.45,
            3000: 22.95,
            4000: 23.45,
            5000: 23.95,
            9000: 40.95,
            13000: 63.95,
            17000: 71.45,
            23000: 83.45,
            30000: 95.95,
            40000: 106.45,
            50000: 113.45,
            60000: 121.45,
            70000: 137.45,
            80000: 152.45,
            90000: 169.95,
            100000: 193.95,
            125000: 216.95,
            150000: 230.45,
            150010: 242.45,
        };

        if (preco < maxPrice) {
            return fixed;
        } else {
            for (let key of Object.keys(tabelaFrete)) {
                if (Number(inputState.peso) * 1000 <= Number(key)) {
                    return tabelaFrete[key];
                }
            }
        }
    };

    const calculateLiquido = () => {
        const venda = inputState.precoVenda;
        const custo = inputState.custo;
        const imposto = tableState.imposto;
        const comissao = tableState.comissao;
        const frete =tableState.frete;
        const liquido = venda - custo - imposto - comissao - frete;

        return liquido;
    };

    const margemVenda = () => {
        const liquido = tableState.liquido;
        const venda = inputState.precoVenda
        return  liquido / venda;
    };

    const margemCusto = () => {
        const liquido = tableState.liquido;
        const custo = inputState.custo;
        return liquido / custo;
    };

    const updateData = () => {
        dispatch(getImposto(calculateImposto()));
        dispatch(getComissao(calculateComissao()));
        dispatch(getFrete(calculateFrete()));
        dispatch(getLiquido(calculateLiquido()));
        dispatch(getMargemCusto(margemCusto()));
        dispatch(getMargemVenda(margemVenda()));
    };

    useEffect(() => {
        updateData();
    }, [inputState, tableState])

    return(
        <ResultsTable tableState={tableState} inputState={inputState}/>
    )
};

export default ResultsTableContainer;