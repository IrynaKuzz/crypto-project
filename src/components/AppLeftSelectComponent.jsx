import React, {useState} from 'react';
import { Select, Modal } from 'antd';
import CoinInfoModalWindow from './CoinInfoModalWindow'

export default function AppLeftSelectComponent({crypto, assets}){
    const [coinObj, setCoinObj] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
           
    const handleChange = (value) => {        
        const coinObj = crypto.find(c=> c.id === value)
        setCoinObj(coinObj)
        setIsModalOpen(true);       
    };  
    return(
        <>
            <Select
                defaultValue="select coins"
                style={{ width: 200 }}
                onChange={handleChange}
                options={crypto.map((coin)=>({
                    value: coin.id,
                    label: (
                        <div title={coin.name}>
                            <img src={coin.icon} alt={coin.name}  style={{ width: 20, marginRight: 8, verticalAlign: 'sub' }} />
                            {coin.name}
                        </div>                      
                    )                
                    
                }))             
                }
            />
            <Modal footer={null}
                open={isModalOpen} 
                onOk={() => setIsModalOpen(false)} 
                onCancel={() => setIsModalOpen(false)} >
                
                <CoinInfoModalWindow coin={coinObj} />
            </Modal>
            
        </>
    )

}