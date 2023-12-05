import DataInput from "./DataInput"
import { useDispatch, useSelector } from 'react-redux';
import { 
        editCusto, 
        editImposto, 
        editPeso, 
        editPrecoVenda, 
        editTipoAnuncio,
        selectDataInput } from "@/redux/DataInput/dataInputSlice";



const DataInputContainer = () =>{
    const dispatch = useDispatch();
    const dataInputState = useSelector(selectDataInput)

    const handleEdit = (e) => {
        const {name, value} = e.target;
        switch (name) {
            case "custo": 
                dispatch(editCusto(value));
                break;
            
            case "imposto":
                dispatch(editImposto(value));
                break;
            
            case "peso":
                dispatch(editPeso(value));
                break;
            
            case "precoVenda":
                dispatch(editPrecoVenda(value));
                break;
            
            case "tipoAnuncio":
                dispatch(editTipoAnuncio(value));
                break;
        }
    }

    return(
        <DataInput state={dataInputState} handleEdit={handleEdit}/>
    )
}

export default DataInputContainer;