import styles from './DataInput.module.css'

const DataInput = () => {

    return(
        <section className={styles.dataCtr}>
            <fieldset className={styles.fieldset}>
                <legend>Tipo de Anúncio</legend>
                <input type='radio' name='tipoAnuncio' value='classico' id='classico'/>
                <label htmlFor="classico">Clássico</label>
                <input type='radio' name='tipoAnuncio' value='premium' id='premium'/>
                <label htmlFor="classico">Premium</label>
            </fieldset>
            <div className={styles.valueInput}>
                <label htmlFor='precoVenda'>Preço de Venda</label>
                <input type='number' id='precoVenda' placeholder='Preço da Venda'  />
                <label htmlFor='precoCusto'>Preço de Custo</label>
                <input type='number' id='precoCusto' placeholder='Custo do Produto'/>
                <label htmlFor='imposto'>Imposto</label>
                <input type='number' id='imposto' placeholder='Digite no formato: 10%'/>
                <label htmlFor='peso'>Peso do Produto (em Kg)</label>
                <input type='number' id='peso' placeholder='Peso em Quilos'/>
            </div>
            
        </section>
    )
}

export default DataInput;