import React from 'react'
import { Col, Row,Button,Input ,Typography } from 'antd';
import LogoFB from "../Image/facebook.png"
import LogoGG from "../Image/google.png"
import ImgLogin from "../Image/img-Authen.png"
import { UserOutlined } from '@ant-design/icons';
import "./authen.css"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {setCookie} from "../Service/cookies"
function Login() {
  const nav = useNavigate()
    const { Title,Text } = Typography;
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [username,setUsername] = useState<String>()
    const [password,setPassword] = useState<String>()

   async function Sigin(){
    let data = {
      username:username,
      password:password,
    }
    console.log(data);
      try {
          let res = await axios.post("http://localhost:4002/user/login",data)
          console.log(res);
          setCookie("user",res.data.token,7)
          nav("/h")
      } catch (error) {
        console.log(error);
      }
    }
  return (
    <div className='login'>
        <Row style={{maxWidth:"800px",maxHeight:"500px",margin:"auto",backgroundColor:"white",}} >
            <Col md={12} sm={24} span={12} xs={24} style={{padding:"20px 30px",}}>
                  <Row style={{borderBottom:"1px solid black",paddingBottom:"30px",position:"relative"}}>
                        <Row style={{textAlign:"center"}}>
                                <Col span={20}>
                                <Title level={2} style={{fontFamily:"Montserrat",}}>Login to your Account</Title>
                                </Col>      
                                 <Col span={20}>                           
                                     <Text type="secondary" style={{fontFamily:"Montserrat",marginBottom:"10px",fontWeight:"bolder"}}>Welcome back! Select method to log in:</Text>
                                </Col>                  
                        </Row>
                        <Row className='bntLogo'>
                            <Col span={10} >  
                            <Button size="large" style={{padding:"0px",margin:"0px"}}><img src={LogoGG} alt="" /> </Button>                 
                            </Col>
                            <Col span={10} >
                            <Button size="large" style={{padding:"0px",margin:"0px"}} ><img src={LogoFB} alt="" /> </Button>
                            </Col>
                        </Row>
                        <Col span={5} style={{position:"absolute",bottom:"-10px",left:"45%",backgroundColor:"white",padding:"0px 10px",}}>
                             <Text type="secondary" >or</Text>
                        </Col>
                  </Row>
                  <br />
                  <br />

                  <Row>
                          <Col span={20} style={{marginBottom:"10px"}}>
                             <Input placeholder="Username" prefix={<UserOutlined />} onChange={(e)=>{setUsername(e.target.value);}} />
                          </Col>
                      
                        <Col span={20}>
                            <Input.Password
                            placeholder=" Password"
                            visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
                            prefix={<UserOutlined />}
                            onChange={(e)=>{setPassword(e.target.value);}}
                             />
                        </Col>
                        <Col span={20} style={{textAlign:"right",marginTop:"6px"}}>
                                <Button type="link">
                                    Forgot Password?
                                </Button>
                        </Col>
                  </Row>
                  <Row>
                    <Col span={20}>
                            <Button value="large"  type="primary" style={{width:"100%"}} onClick={Sigin}>Login</Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={20} style={{textAlign:"center"}}>
                            <Text type="secondary" >Don’t have account?<Button type="link" style={{padding:"0px",outline:"none"}}>Create an account</Button></Text>
                    </Col>
                  </Row>
            </Col>
            <Col md={12} sm={0} span={12} xs={0}>
                <img src={ImgLogin} alt=""  id='logoAuthen'/>
            </Col>
         </Row>

    </div>
  )
}

export default Login