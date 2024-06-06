import React, {useEffect} from 'react';
//import Context from '../../store/context'
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Layout, Statistic, List, Typography, Tag } from 'antd';

const siderStyle = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#ffffff',
    height: '100%'
};
const cardStyle={
    margin: '1rem'
}

function AppSideComponent({assets}){
    return(
        <>
            <Layout.Sider width="100%" style={siderStyle}> 
                <Typography.Title level={4}> My purchases</ Typography.Title >
                {assets.map((asset)=>{
                   
                    if (!asset.id) {
                        console.warn("Asset missing id:", asset);
                        return null;
                    }
                return(
                <Card key={asset.id} style={cardStyle}>
                    <Statistic
                        title={(asset.id).charAt(0).toUpperCase() + (asset.id).slice(1)}
                        value={asset.totalAmount}
                        precision={2}
                        valueStyle={{ color: asset.grow ? '#3f8600' : '#cf1322' }}
                        prefix={ asset.grow ? <ArrowUpOutlined /> : < ArrowDownOutlined/>}
                        suffix="$"
                    />
                    <List 
                        size='large'
                        dataSource={[
                        {title: 'Total Profit', value: asset.totalProfit, isShow: true },
                        {title: 'Asset Amount', value: asset.amount },
                        {title: 'Difference', value: asset.growPercent }
                    ]}
                        renderItem={(item) => (
                        <List.Item>
                            <span >{item.title}</span>
                            <span>{item.isShow && <Tag color={asset.grow ? 'green':'red'}>{asset.growPercent}%</Tag> } </span>
                            <Typography.Text 
                                type={asset.grow ? 'success' : 'danger'} >{item.value} $
                            </Typography.Text> 
                    </List.Item>
                    )}
                    /> 
                </Card>
                )
                })}
                </Layout.Sider>
        </>
    )
}
export default AppSideComponent