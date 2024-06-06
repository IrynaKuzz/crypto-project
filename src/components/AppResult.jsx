import React from 'react';
import { Button, Result } from 'antd';
import moment from 'moment';

export default function AppResultComponent({valueFromButtomChild, newFormData, 
    valueFromChild, onClear}){    
    
    function CloseResultForm(){         
        valueFromButtomChild(false);
        onClear()
    }
       
    const toolTitle = ` 
        name: ${valueFromChild.name}, \n
        amount: ${newFormData.amount}, \n
        price: ${newFormData.myPrice.toFixed(2)}, \n
        date: ${moment(newFormData.date.$d).format('DD-MM-YYYY')}, \n
        total: ${newFormData.total.toFixed(2)} $`;
        
    return(
        <>
            <Result
                status="success"
                title="The coin was added:"
                subTitle={toolTitle}
                extra={[                
                    <Button key="buy" onClick={CloseResultForm}>Clear</Button>,
                ]}
            />
        </>
    )
}