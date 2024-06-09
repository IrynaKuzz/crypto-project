import React from 'react';
import { Typography, Layout } from 'antd';
import AppChart from './AppChart'
import AppTable from './AppTable';

const { Content } = Layout;
const PortfolioStyle={
    textAlign: 'left',
    paddingLeft: '10px' 
}
export default function AppContent({crypto, assets}){
    
    return(
        <>
            <Layout.Content> 
                <Typography.Title level={4} style={PortfolioStyle}>
                    
                    Total: {assets.map(asset=>{
                        const coin = crypto.find((coin)=>coin.id === asset.id)
                        return asset.amount * coin.price
                    }).reduce((accumulator, currentValue) => {
                        return accumulator + currentValue;
                    }, 0).toFixed(2)} $
                    
                </Typography.Title>
                <AppChart crypto={crypto} assets={assets} />
                <AppTable crypto={crypto} /> 
            </Layout.Content>   
        </>
    )
}    