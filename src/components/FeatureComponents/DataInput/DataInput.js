"use client"

import styles from './DataInput.module.css'

const DataInput = ({state, handleEdit}) => {

    return(
        <section className={styles.dataCtr}>
            <fieldset className={styles.fieldset}>
                <legend>Tipo de Anúncio</legend>
                <input type='radio' name='tipoAnuncio' value='classico' id='classico' onChange={handleEdit}/>
                <label htmlFor="classico">Clássico</label>
                <input type='radio' name='tipoAnuncio' value='premium' id='premium' onChange={handleEdit}/>
                <label htmlFor="classico">Premium</label>
            </fieldset>
            <div className={styles.valueInput}>
                <label htmlFor='precoVenda'>Preço de Venda</label>
                <input type='number' id='precoVenda' placeholder='Preço da Venda' value={state.precoVenda} name="precoVenda" onChange={handleEdit}/>
                <label htmlFor='precoCusto'>Preço de Custo</label>
                <input type='number' id='precoCusto' placeholder='Custo do Produto' value={state.custo} name="custo" onChange={handleEdit}/>
                <label htmlFor='imposto'>Imposto</label>
                <input type='text' id='imposto' placeholder='Digite no formato: 10%' value={state.imposto} name="imposto" onChange={handleEdit}/>
                <label htmlFor='peso'>Peso do Produto (em Kg)</label>
                <input type='number' id='peso' placeholder='Peso em Quilos' value={state.peso} name="peso" onChange={handleEdit}/>
            </div>
            
        </section>
    )
}

export default DataInput;