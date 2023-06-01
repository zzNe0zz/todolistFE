import React from 'react'
import { Col, Row,Button,Input ,Typography } from 'antd';
import ImgSigup from "../Image/rightsideSigup.png"
import { UserOutlined,MailOutlined } from '@ant-design/icons';
import "./authen.css"
import { useState } from 'react';
function Sigup() {
    const { Title,Text } = Typography;
    const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    
    <div>
         <div className='login'>
        <Row style={{maxWidth:"800px",maxHeight:"500px",margin:"auto",backgroundColor:"white",}} >
            <Col md={12} sm={24} span={12} xs={24} style={{padding:"20px 30px",}}>
                  <Row style={{}}>
                        <Row style={{textAlign:"center"}}>
                               
                                    <Title level={1} style={{fontFamily:"Montserrat",fontSize:"30px",fontWeight:"700px",margin:"0px"}}>Creat your account</Title>
                                    
                                                   
                        </Row>
                  </Row>
      
                  <Row>
                          <Col span={20} style={{marginBottom:"10px"}}>
                             <Input placeholder="Username" prefix={<UserOutlined />} />
                          </Col>
                          <Col span={20} style={{marginBottom:"10px"}}>
                             <Input placeholder="Email" prefix={<MailOutlined />} />
                          </Col>
                        <Col span={20}>
                            <Input.Password
                            style={{marginBottom:"10px"}}
                            placeholder=" Password"
                            visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
                            prefix={<UserOutlined />}
                             />
                        </Col>
                          
                        <Col span={20}>
                            <Input.Password
                            style={{marginBottom:"10px"}}
                            placeholder=" Confirm Password"
                            visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
                            prefix={<UserOutlined />}
                             />
                        </Col>
                        
                  </Row>
                  <Row>
                    <Col span={20}>
                            <Button value="large"  type="primary" style={{width:"100%"}}>Login</Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={20} style={{textAlign:"center"}}>
                            <Text type="secondary" >You have account<Button type="link" style={{padding:"0px",outline:"none"}}>Login now</Button></Text>
                    </Col>
                  </Row>
            </Col>
            <Col md={12} sm={0} span={12} xs={0}>
                <img src={ImgSigup} alt=""  id='logoAuthen'/>
            </Col>
         </Row>

    </div>
    </div>
  )
}

export default Sigup