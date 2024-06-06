import React, {useContext, useEffect, useState } from 'react';
import { Select, Form, Input } from 'antd';
import Context from '../store/context'

export default function AppSelect({clearSelect, onValueChange}){
    const [selectValue, setSelectValue] = useState([]) // defind the value name
    const [selectIcon, setSelectIcon] = useState([])// defind the value icon   
    const {crypto} = useContext(Context) // Array from context.jsx
    const [onSelect, setOnSelect] = useState(false) 
    
    const options = crypto.map((coin) => ({ 
        value: coin.name,
        icon: coin.icon
    }));
    const handleChange = (value) => {
        // console.log(`selected ${value}`);     
    }
    function handleSelect(value){
        debugger       
        const selectdata = crypto.find(c=>c.name === value)
        setSelectValue(selectdata.name)
        setSelectIcon(selectdata.icon)
        if (typeof onValueChange === 'function') {
            onValueChange(selectdata);
        }
        setOnSelect(true)
    }
    useEffect(()=>{
        if(clearSelect){setOnSelect(false)} // to clear select 
    }, [clearSelect])
    
    return(
        <>
            <Form>
                <Form.Item label="coin" name="coin">
                    <Select
                        style={{ width: '100%' }}
                        allowClear
                        onChange={handleChange}
                        options={options}
                        onSelect={handleSelect}
                    />                
                </Form.Item>
            </Form>    
           
            {onSelect &&
                <div>
                    <Form
                            labelCol={{
                                span: 6,
                            }}
                            wrapperCol={{
                                span: 18,
                            }}
                            
                            initialValues={{
                                remember: true,
                            }}                            
                        >
                        <Form.Item
                            label="coin's name"
                            name="coin_name" 
                        >
                            <Input 
                                placeholder={selectValue} 
                                addonBefore={<img src={selectIcon} alt="Icon" style={{ width: '20px', height: '20px' }} />}
                                disabled
                            />
                        </Form.Item>
                    </Form>                   
                </div>            
            }
        </>
    )
}