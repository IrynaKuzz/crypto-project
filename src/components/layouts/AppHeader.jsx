import React, { useState } from 'react';
import { Button,Row, Col } from "antd" ;
import AppDrawer from '../AppDrawer'
import AppLeftSelectComponent from '../AppLeftSelectComponent'

function AppHeader({assets, crypto, onData, onClickFormButton, addNewAsset}){
    const [open, setOpen] = useState(false); // move Drawer
    const [clearSelect, setClearSelect] = useState(false)
    const [valueFromChild, setValueFromChild] = useState('');
    const [newValueForm, setNewValueForm] = useState('')
    const [onSubmit, setOnSubmit] = useState(false)
    

    const headerStyle={
        height: '50px'
    }
    const leftColStyle ={
        margin: '8px auto',        
        left: '10px',
        textAlign: 'left',
        display: 'block'
    }
    const rightColStyle = {
        margin: '8px auto',
        right: '10px',
        textAlign: 'right',
        display: 'block'
    }
    function showDrawer(){
        setClearSelect(false)
        setOpen(true)
    }
    function onClose(){
        setClearSelect(true)
        setOpen(false)        
    }
    function handleChildData(data){              
        setNewValueForm(data)
        setOnSubmit(true)
        setValueFromChild(data)        
    }
    return(
        <>
            <Row name="headerRow" style={headerStyle}>
                <Col span={12} style={leftColStyle}>
                    <AppLeftSelectComponent crypto={crypto} assets={assets} />
                </Col>
                <Col span={12} style={rightColStyle}>
                    <Button type="primary" onClick={showDrawer} > open Drawer</Button>
                </Col>
            </Row>
            <AppDrawer 
                open={open} 
                onClose={onClose} 
                clearSelect={clearSelect} 
                onData={handleChildData}
                onSubmit={onSubmit}
                onClickFormButton={onClickFormButton}
                addNewAsset={addNewAsset}
                crypto={crypto}
            />
        </>
    )
}
export default AppHeader