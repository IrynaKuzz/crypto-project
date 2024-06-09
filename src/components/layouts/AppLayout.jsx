import { useState, useContext } from 'react';
import AppHeader from './AppHeader'
import AppBody from './AppBody'
import Context from '../../store/context'

export default function AppLayout(){
    const {assets, crypto, addNewAsset} = useContext(Context)    
    const [newValueForm, setNewValueForm] = useState('')
    const [valueFromChild, setValueFromChild] = useState('');
    const [onClickFormButton, setOnClickFormButton] = useState(false)
    
    function handleChildData(data){            
        setNewValueForm(data)
        setOnClickFormButton(data)
        setValueFromChild(data)       
    }
    return(        
        <>
            <div> 
                <AppHeader
                    crypto={crypto} 
                    assets={assets} 
                    onData={handleChildData}
                    onClickFormButton={handleChildData}
                    addNewAsset={addNewAsset}
                    valueFromChild={valueFromChild}
                />
                <div width="100%"> 
                    <AppBody 
                        crypto={crypto} 
                        assets={assets} 
                        newValueForm={newValueForm} 
                        onClickFormButton={handleChildData}
                        valueFromChild={valueFromChild}
                    />
                </div>
            </div>
        </>
    )
}