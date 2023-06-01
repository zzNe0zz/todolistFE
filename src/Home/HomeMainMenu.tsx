import React from 'react'
import {Col,Row,Avatar} from "antd"
import {HomeOutlined,UserOutlined,SettingOutlined,AreaChartOutlined} from "@ant-design/icons"
import { useNavigate } from 'react-router-dom'
function HomeMainMenu() {
    const nav = useNavigate()
  return (
    <Row className='homeMenu'>
                <Row style={{}}>

                     <Col span={24}  >
                          
                            <Avatar size={64} src="https://static-images.vnncdn.net/files/publish/2022/9/3/bien-vo-cuc-thai-binh-346.jpeg" />
                    </Col> 
                </Row>
                   <Row >

                          <Col span={24} style={{margin:"10px 0px",cursor:"pointer"}} ><HomeOutlined className='iconleft' style={{width:"40px",height:"39px",fontSize:"30px",}}/></Col>

                          <Col span={24} style={{margin:"10px 0px",cursor:"pointer"}} onClick={()=>{nav("/h/profile")}}><UserOutlined  style={{width:"40px",height:"39px",fontSize:"30px"}}/></Col>
                          <Col span={24} style={{margin:"10px 0px",cursor:"pointer"}}><AreaChartOutlined  style={{width:"40px",height:"39px",fontSize:"30px"}}/></Col>
                   </Row>
                  <Row  >
                  
                    <Col span={24}  style={{margin:"10px 0px",cursor:"pointer"}}><SettingOutlined  style={{width:"40px",height:"39px",fontSize:"30px"}}/></Col>

                  </Row>
           
            
    </Row>
  )
}

export default HomeMainMenu