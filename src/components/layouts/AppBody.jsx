import React from 'react';
import { Col, Row } from "antd";
import AppSideComponent from './AppSideComponent'
import AppContent from '../AppContent'

function AppBody({crypto, assets, newValueForm, onClickFormButton}){    
    
    return(
        <>
            <Row>
                <Col span={6}>
                    <AppSideComponent 
                        crypto={crypto} 
                        assets={assets} 
                        newValueForm={newValueForm}
                        onClickFormButton={onClickFormButton} 
                    />
                </Col>
                <Col span={18}>
                    <AppContent crypto={crypto} assets={assets} />
                </Col>
            </Row>
            
        </>
    )
}
export default AppBody