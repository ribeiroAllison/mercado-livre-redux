"use client"

import styles from './ResultsTable.module.css';

const ResultsTable = ({inputState, tableState}) => {

    const transformToCurrency = (value) =>{
        return Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL'}).format(value);
    }

    const transformToPercentage = (value) => {
        const formatted = new Intl.NumberFormat('pt-BR', {style: 'percent', minimumFractionDigits: 2}).format(value);
        return formatted.replace(/\u200E/g, '')
    }   
    return(
        <div className={styles.table}>
                
                <table border="1" className={styles.results}>
                    <thead>
                        <tr>
                            <th>Natureza</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Preço de Venda</td>
                            <td>{transformToCurrency(inputState.precoVenda)}</td>
                        </tr>
                        <tr>
                            <td>Imposto sobre Venda </td>
                            <td>{transformToCurrency(tableState.imposto)}</td>
                        </tr>
                        <tr>
                            <td>Comissão </td>
                            <td>{transformToCurrency(tableState.comissao)}</td>
                        </tr>
                        <tr>
                            <td>Frete </td>
                            <td>{transformToCurrency(tableState.frete)}</td>
                        </tr>
                        <tr>
                            <td>Custo</td> 
                            <td>{transformToCurrency(inputState.custo)}</td>
                        </tr>
                        <tr>
                            <td>Líquido</td> 
                            <td>{transformToCurrency(tableState.liquido)}</td>
                        </tr>
                        <tr>
                            <td>Margem sobre Venda</td>
                            <td>{transformToPercentage(tableState.margemVenda)}</td>
                        </tr>
                        <tr>
                            <td>Margem sobre Custo</td>
                            <td>{transformToPercentage(tableState.margemCusto)}</td>
                        </tr>
                    </tbody>
                    
                    
                </table>
                
            </div>
    )
}

export default ResultsTable;