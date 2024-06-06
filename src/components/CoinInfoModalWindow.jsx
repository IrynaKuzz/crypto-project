import React from 'react';
import { Flex, Typography, Divider, Tag } from 'antd';

export default function CoinInfoModalWindow({coin}){
    const imgStyle={
        width: '80px'        
    }
    return(              
        <>
           <Flex >
                <img src={coin.icon} alt={coin.name} style={imgStyle} />
                <Typography.Title level={2}>{coin.symbol} {coin.name}</Typography.Title>
            </Flex>
            <Divider />
                <Typography.Paragraph>
                <Typography.Text>1 hour:</Typography.Text>
                <Tag color={coin.priceChange1h >0 ? 'green' : 'red'}>{coin.priceChange1h}% </Tag>
                <Typography.Text>1 day:</Typography.Text>
                <Tag color={coin.priceChange1d >0 ? 'green' : 'red'}>{coin.priceChange1d}% </Tag>
                <Typography.Text>1 week:</Typography.Text>
                <Tag color={coin.priceChange1w >0 ? 'green' : 'red'}>{coin.priceChange1w}% </Tag>
                </Typography.Paragraph>
                { coin.price && <Typography.Paragraph>
                <Typography.Text> Price: {coin.price} $ </Typography.Text>
                </Typography.Paragraph>
                }
                {coin.priceBtc && <Typography.Paragraph>
                <Typography.Text> priceBtc: {coin.priceBtc} $ </Typography.Text>
                </Typography.Paragraph>}
                {coin.marketCap && <Typography.Paragraph>
                <Typography.Text> Market: {coin.marketCap} $ </Typography.Text>
                </Typography.Paragraph>}
                {coin.contractAddress && <Typography.Paragraph>
                <Typography.Text> Contract Address: {coin.contractAddress} </Typography.Text>
                </Typography.Paragraph>}
        
        </>
    )
}