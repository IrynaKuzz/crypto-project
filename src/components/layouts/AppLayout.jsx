import { useState, useContext } from 'react';
import { Layout } from 'antd';
import AppHeader from './AppHeader'
import AppBody from './AppBody'
import Context from '../../store/context'
import moment from 'moment';

export default function AppLayout(){
    const {assets, crypto, addNewAsset} = useContext(Context)    
    const [newValueForm, setNewValueForm] = useState('')
    const [valueFromChild, setValueFromChild] = useState('');
    const [onClickFormButton, setOnClickFormButton] = useState(false)
    //const [coinName, setCoinName] = useState('')
    
    function handleChildData(data){            
        setNewValueForm(data)
        setOnClickFormButton(data)
        setValueFromChild(data)       
    }
    return(        
        <>
            <Layout>
                <AppHeader 
                    crypto={crypto} 
                    assets={assets} 
                    onData={handleChildData}
                    onClickFormButton={handleChildData}
                    addNewAsset={addNewAsset}
                    valueFromChild={valueFromChild}
                    
                /> 
            </Layout>
            <main>
                <AppBody 
                    crypto={crypto} 
                    assets={assets} 
                    newValueForm={newValueForm} 
                    onClickFormButton={handleChildData}
                    valueFromChild={valueFromChild}
                />                   
            </main>
        </>
    )
}