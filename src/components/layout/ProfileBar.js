import React from 'react'
import 'antd/dist/antd.css'
import '../../css/ProfileBar.css'
import { Layout, Avatar, Menu, Col, Row } from 'antd'
import MenuItem from 'antd/lib/menu/MenuItem'
import Home from '../pages/Home'
import About from '../pages/About'
import Skills from '../pages/Skills'
import Education from '../pages/Education'
import Experience from '../pages/Experience'
import Contact from '../pages/Contact'
import { Route } from 'react-router-dom'
import Slide from 'react-reveal'

export const ProfileBar = () => {
  const imgProfileStyle = {
    padding: '10px',
    backgroundColor: 'rgb(204,194,193)'
  }

  const { Content, Footer, Sider } = Layout

  return (
    <div>
      <Layout style={{ height: '100vh' }}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken)
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type)
          }}
        >
          <div style={imgProfileStyle}>
            <Avatar size={180} img src={require('../../assets/img/IMG_2182.jpgcrop.jpg')} shape="circle" />
            <div style={{ fontSize: '20px', textAlign: 'center', margin: '0' }}>
              <a href="/" style={{ color: 'rgb(114,68,67)' }}>
                Nattida Pasutham
              </a>
            </div>
            <p style={{ fontSize: '15px', textAlign: 'center', margin: '0' }}>Software Engineer</p>
          </div>
          <div className="nav" style={{ scrollBehavior: 'smooth' }}>
            <Menu backgroundColor="rgb(236,231,225)" mode="inline" defaultSelectedKeys={['1']}>
              <MenuItem key="1">
                <a href="#home" style={{ scrollBehavior: 'smooth' }}>
                  Home
                </a>
              </MenuItem>
              <MenuItem key="2">
                <a href="#about" style={{ scrollBehavior: 'smooth' }}>
                  {' '}
                  About
                </a>
              </MenuItem>
              <MenuItem key="3">
                <a href="#skills" style={{ scrollBehavior: 'smooth' }}>
                  Skills{' '}
                </a>
              </MenuItem>
              <MenuItem key="4">
                <a href="#education" style={{ scrollBehavior: 'smooth' }}>
                  Education
                </a>
              </MenuItem>
              <MenuItem key="5">
                <a href="#experience" style={{ scrollBehavior: 'smooth' }}>
                  Experience
                </a>
              </MenuItem>
              <MenuItem key="6">
                <a href="#contact" style={{ scrollBehavior: 'smooth' }}>
                  Contact
                </a>
              </MenuItem>
            </Menu>
          </div>
        </Sider>
        <Layout>
          <div style={{ margin: 24 }}>
            <Content style={{ padding: 0 }}>
              <div className="site-layout-background" style={{ padding: 24, minHeight: 720, scrollBehavior: 'smooth' }}>
                <Route>
                  <Slide bottom className="reveal-page1">
                    <Home />
                  </Slide>

                  <Slide bottom className="reveal-page2">
                    <About />
                  </Slide>
                  <Slide bottom className="reveal-page2">
                    <Skills />
                  </Slide>
                  <Slide bottom className="reveal-page2">
                    <Education />
                  </Slide>
                  <Slide bottom className="reveal-page2">
                    <Experience />
                  </Slide>
                  <Slide bottom className="reveal-page2">
                    <Contact />
                  </Slide>
                </Route>
              </div>
            </Content>
          </div>
          <Footer style={{ paddingTop: 0, paddingRight: '24px' }}>
            <Row align="center" no-gutter style={{ paddingBottom: 0 }}>
              <Col>
                <p>©2020 Created by NtdPst</p>
              </Col>
            </Row>
          </Footer>
        </Layout>
      </Layout>
    </div>
  )
}
export default ProfileBar
