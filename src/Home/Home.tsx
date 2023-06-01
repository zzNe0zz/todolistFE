import React from 'react'
import { useNavigate ,Outlet} from 'react-router-dom'
import {Col,Row,Avatar} from "antd"
import HomeMainMenu from './HomeMainMenu'
import "./home.css"
function Home() {
  const nav = useNavigate()
  return (
    <div className='home'>
        <Row className='homeMain'>
            <Col span={2}>
              <HomeMainMenu></HomeMainMenu>
            </Col>
            <Col span={22}>
              <Outlet></Outlet>
            </Col>
        </Row>
    </div>
  )
}

export default Home