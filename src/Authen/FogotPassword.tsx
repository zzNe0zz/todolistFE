import React from 'react'
import { Col, Row,Button,Input ,Typography } from 'antd';
import ImgForgot from "../Image/rightsideForgot.png"
import { UserOutlined ,MailOutlined} from '@ant-design/icons';
import "./authen.css"
import { useState } from 'react';
function FogotPassword() {
    const { Title,Text } = Typography;
  return (
    <div className='login'>
        <Row style={{maxWidth:"800px",maxHeight:"500px",margin:"auto",backgroundColor:"white",}} >
            <Col md={12} sm={24} span={12} xs={24} style={{padding:"20px 30px",}}>
                  <Row >
                        <Row style={{textAlign:"center"}}>
                                <Col span={20}>
                                <Title level={2} style={{fontFamily:"Montserrat",}}>Enter Username</Title>
                                </Col>      
                                 <Col span={20}>                           
                                     <Text type="secondary" style={{fontFamily:"Montserrat",marginBottom:"10px",fontWeight:"bolder"}}>This is the last step in recovering your password.</Text>
                                </Col>                  
                        </Row>
                       
                        
                  </Row>
                  <Row>
                        <Col span={20} style={{marginBottom:"10px"}}>
                            <Input
                            placeholder=" Username"
                           
                            prefix={<UserOutlined />}
                             />
                        </Col>
                       
                        <Col span={20} style={{marginBottom:"10px"}}>
                            <Input
                            placeholder=" Email "
                           
                            prefix={<MailOutlined />}
                             />
                        </Col>
                       
                  </Row>
                  <Row>
                    <Col span={20}>
                            <Button value="large"  type="primary" style={{width:"100%"}}>Submit</Button>
                    </Col>
                  </Row>
                
            </Col>
            <Col md={12} sm={0} span={12} xs={0}>
                <img src={ImgForgot} alt=""  id='logoAuthen'/>
            </Col>
         </Row>

    </div>
  )
}

export default FogotPassword