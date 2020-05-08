import React from 'react'
import 'antd/dist/antd.css'
import '../css/ProfileBar.css'
import { Layout, Avatar, Menu } from 'antd'
import MenuItem from 'antd/lib/menu/MenuItem'

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
            <Avatar size={180} img src={require('../img/IMG_2182.jpgcrop.jpg')} shape="circle" />
          </div>
          <Menu backgroundColor="rgb(236,231,225)" mode="inline" defaultSelectedKeys={['6']}>
            <MenuItem key="1" >Home</MenuItem>
            <MenuItem key="2">About</MenuItem>
            <MenuItem key="3">Skills</MenuItem>
            <MenuItem key="4">Education</MenuItem>
            <MenuItem key="5">Experience</MenuItem>
            <MenuItem key="6">Contact</MenuItem>
          </Menu>
        </Sider>
        <Layout>
          {/* <Header className="site-layout-sub-header-background" style={{ padding: 0 }} /> */}
          <div style={{margin: 24  }}>
          <Content style={{ padding: 0 }}>
            <div className="site-layout-background" style={{  padding: 24, minHeight: 720 }}>
              content
            </div>
          </Content>
          </div>
          <Footer style={{ textAlign: 'center' }}>©2020 Created by NtdPst</Footer>
        </Layout>
      </Layout>
    </div>
  )
}
export default ProfileBar
