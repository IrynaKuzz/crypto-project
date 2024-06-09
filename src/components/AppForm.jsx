import React, { useEffect, useState } from 'react';
import { Form, Input, Button, DatePicker, InputNumber } from 'antd';

function AppFormComponent({valueFromChild, valueFromButtomChild, 
    onFormSubmit, addNewAsset, crypto, clearForm, setClearForm}){    
    const [amount, setAmount] = useState(null)      
    const [form] = Form.useForm();
    const [date, setDate] = useState(null);
    const [myPrice, setMyPrice] = useState(null)    
    const [total, setTotal] = useState(null)
    const [price, setPrice] = useState('');
       
    useEffect(() => {
        if(valueFromChild){        
            setPrice(valueFromChild.price)
        }
        if(clearForm){
            setPrice('')
            setClearForm(false)
        }
        if (amount && myPrice) {
            setTotal(myPrice * amount);
        }
    }, [valueFromChild, amount, myPrice]);
    
    useEffect(() => { 
        form.setFieldsValue({
            amount: amount,
            price: price,
            myPrice: myPrice,
            total: total,
            date: date
        });
    }, [amount, price, total, date, form]); 
        
    const onFinish = (valueFromChild) => {
        console.log('Success:', valueFromChild);
    };
    
    const onFinishFailed = (errorInfo) => {
       console.log('Failed:', errorInfo);
    };
    const dateFormat = 'DD-MM-YYYY'; //format of the date
        
    function handlAmount(value){
        setAmount(value)        
    }
    function handleDateChange(dateValue){
        setDate(dateValue)
    }
    function handleChangePrice(e){
        setMyPrice(e)
        //console.log('price', price.target.value)
    }
    
    function AddCoin(){
        if(myPrice && total && date){
            valueFromButtomChild(true)
            const newObject = form.getFieldsValue()
            const coin = crypto.find(c=> c.price === newObject.price)
            const fullObject = {...coin, ...newObject};
            onFormSubmit(newObject)
            addNewAsset(fullObject)
        }
    }    
      
    return(
        <>
            <div>                            
                    <Form
                        labelCol={{
                            span: 6,
                        }}
                        wrapperCol={{
                            span: 18,
                        }}
                        name="form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        form={form}
                    >                    
                    
                    <Form.Item                        
                        validateFirst
                        label="amount"
                        name="amount"                        
                        rules={[
                            {
                            type: 'number',
                            min: 0.1,    
                            required: true,
                            message: 'Please input your amount!',
                            },
                        ]}
                    >
                        <InputNumber style={{ width: '100%' }} value={amount} onChange={handlAmount}/>
                    </Form.Item>
                    <Form.Item
                        label="Today price"
                        name="price"
                    >
                        <Input placeholder={price} disabled/>
                    </Form.Item>
                    <Form.Item
                        label="Your price"
                        name="myPrice"
                        initialValue={myPrice}
                        rules={[
                            {
                            type: 'number',
                            min: 0.0000001,
                            required: true,
                            message: 'Please input your price!',
                            },
                        ]}
                    >
                        <InputNumber onChange={handleChangePrice} placeholder={price} style={{ width: '100%' }} />
                    </Form.Item>    
                    <Form.Item 
                        label="Date"
                        name="date"
                        rules={[{ required: true, message: 'Please select a date!' }]}
                    >
                        <DatePicker style={{ width: '100%'}} format={dateFormat} onChange={handleDateChange}/>
                    </Form.Item>
                    
                    <Form.Item                       
                        label="total"
                        name="total"                        
                        initialValue={total}
                    >
                        <Input placeholder={total} disabled />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" onClick={AddCoin} >
                            Add coins 
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    )
}

export default AppFormComponent;