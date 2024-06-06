import React, {useState} from 'react';
import { Drawer } from 'antd';
import AppSelect from './AppSelect'
import AppFormComponent from './AppForm'
import AppResultComponent from './AppResult';

export default function AppDrawer({open, onClose, clearSelect, onData, onFormSubmit, 
    addNewAsset, crypto}){
    const [valueFromChild, setValueFromChild] = useState('');
    const [newValueForm, setNewValueForm] = useState('')
    const [onSubmit, setOnSubmit] = useState(false) //onClick on the buttom  in AppFormComponent
    const [clearForm, setClearForm] = useState(false)
    
    const handleClear = () => {
        setClearForm(true)
    };   
    const handleValueChange = (value) => {
        setValueFromChild(value);
    };
    function getValueFromChild(value){                
        setOnSubmit(value)        
        setNewValueForm('')       
    }    
    function onFormSubmit(value){
        setOnSubmit(true)
        setNewValueForm(value)        
        onData(value)
    }
    return(
        <>
            <Drawer
                title="Basic Drawer"
                onClose={onClose} 
                open={open}
            >
                {!onSubmit &&
                <>
                    <AppSelect 
                        clearSelect={clearSelect} 
                        onValueChange={handleValueChange} 
                    />
                    <AppFormComponent 
                        valueFromChild={valueFromChild} 
                        valueFromButtomChild={getValueFromChild}
                        onFormSubmit={onFormSubmit}
                        addNewAsset={addNewAsset}
                        crypto={crypto}
                        clearSelect={clearSelect} 
                        clearForm={clearForm}
                        setClearForm={setClearForm}
                    />
                </>
                }
                {onSubmit &&
                    <AppResultComponent 
                        valueFromChild={valueFromChild} 
                        valueFromButtomChild={getValueFromChild} 
                        newFormData={newValueForm}
                        onClear={handleClear}
                    />
                }
            </Drawer>        
        </>
    )
}