import React from 'react';
import { Col, Row } from "antd";
import AppSideComponent from './AppSideComponent';
import AppContent from '../AppContent';

function AppBody({crypto, assets, newValueForm, onClickFormButton}){
    return(
        <>
            <Row gutter={24}>
                <Col className="gutter-row" xs={24} sm={24} md={12} lg={12} xl={6}>                   
                    <AppSideComponent
                        crypto={crypto} 
                        assets={assets} 
                        newValueForm={newValueForm}
                        onClickFormButton={onClickFormButton} 
                    />                    
                </Col>
                <Col className="gutter-row" xs={24} sm={24} md={12} lg={12} xl={18}>                    
                    <AppContent crypto={crypto} assets={assets} />                    
                </Col>    
            </Row>
        </>
    )
}
export default AppBody