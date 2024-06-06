import React, { useContext, useEffect, useState } from 'react';
import { Table, Modal } from 'antd';
import Context from '../store/context'
import AppModalChart from './AppModalChart'

export default function AppTable(){
    const crypto = useContext(Context);
    const [data, setData] = useState([]);
    const [modalShow, setModalShow] = useState(false)
    const [getRow, setGetRow] = useState('')
    useEffect(() => {
        if (crypto) {
            const formattedData = crypto.crypto.map((coin, index) => ({
                key: index,
                name: coin.id,
                websiteUrl: coin.websiteUrl,
                price: coin.price.toFixed(2),
                icon: coin.icon,
                priceChange1h: coin.priceChange1h,
                priceChange1d: coin.priceChange1d,
                priceChange1w: coin.priceChange1w,
                rank: coin.rank,
                volume: coin.volume,
                totalSupply: coin.totalSupply,
                availableSupply: coin.availableSupply,
                priceChange1d: coin.priceChange1d,
                priceChange1h: coin.priceChange1h,
                priceChange1w: coin.priceChange1w,
                marketCap: coin.marketCap

            }));
            setData(formattedData);
        }
    }, [crypto]);

    function onCoinClick(record){      
      setModalShow(true)
      setGetRow(record)
    }

    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          showSorterTooltip: {
            target: 'full-header',
          },
          render: (text, record) => (<a href={text} title={record.name} > {text} </a>),      
                  
          render: (text, record) => (
            <>
              <span> {text} </span>  <img src={record.icon} alt={`${record.name} icon`} style={{ width: 20, height: 20, marginLeft: 8, verticalAlign: 'middle' }} />
            </>
        ),
        },        
        {
          title: 'Price',
          dataIndex: 'price',
          sorter: (a, b) => a.price - b.price,     
        },
        {
            title: 'websiteUrl',
            dataIndex: 'websiteUrl',           
            render: (text, record) => <a href={text} title={record.name}>{text}</a>
        },
      ];
    
    const onChange = (pagination, filters, sorter, extra) => {
       // console.log('params', pagination, filters, sorter, extra);
    };
    return(
        <>
            <Table
                columns={columns}
                dataSource={data}
                onChange={onChange}
                showSorterTooltip={{
                  target: 'sorter-icon'
                }}
                onRow={(record) => ({
                  onClick: () => onCoinClick(record),
                })}
                
            />
            {modalShow && 
              <Modal footer={null}
                  open={modalShow}                 
                  onCancel={() => setModalShow(false)} >
                  
                  <AppModalChart getRow={getRow} modalShow={modalShow} />
              </Modal>
            }
        </>
    )
}