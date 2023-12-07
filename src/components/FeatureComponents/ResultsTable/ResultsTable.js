import styles from './ResultsTable.module.css';

const ResultsTable = ({inputState, tableState}) => {
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
                            <td>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(inputState.precoVenda)}</td>
                        </tr>
                        <tr>
                            <td>Imposto sobre Venda </td>
                            <td>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(tableState.imposto)}</td>
                        </tr>
                        <tr>
                            <td>Comissão </td>
                            <td>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(tableState.comissao)}</td>
                        </tr>
                        <tr>
                            <td>Frete </td>
                            <td>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(tableState.frete)}</td>
                        </tr>
                        <tr>
                            <td>Custo</td> 
                            <td>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(inputState.custo)}</td>
                        </tr>
                        <tr>
                            <td>Líquido</td> 
                            <td>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(tableState.liquido)}</td>
                        </tr>
                        <tr>
                            <td>Margem sobre Venda</td>
                            <td>{
                            Number(tableState.margemVenda).toLocaleString(undefined, {style: 'percent', minimumFractionDigits: 2})
                            }</td>
                        </tr>
                        <tr>
                            <td>Margem sobre Custo</td>
                            <td>{Number(tableState.margemCusto).toLocaleString(undefined, {style: 'percent', minimumFractionDigits: 2})}</td>
                        </tr>
                    </tbody>
                    
                    
                </table>
                
            </div>
    )
}

export default ResultsTable;