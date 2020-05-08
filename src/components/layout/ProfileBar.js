import React from 'react'
import 'antd/dist/antd.css'
import '../../css/ProfileBar.css'
import { Layout, Avatar, Menu } from 'antd'
import MenuItem from 'antd/lib/menu/MenuItem'
// import { useHistory } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import { Link, Route } from 'react-router-dom'



export const ProfileBar = () => {
  const imgProfileStyle = {
    padding: '10px',
    backgroundColor: 'rgb(204,194,193)'
  }
  // const { push } = useHistory()
  const { Content, Footer, Sider } = Layout

  // const HomeClick = () => {
  //   push('/Home')
  // }


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
            <Avatar size={180} img src={require('../../img/IMG_2182.jpgcrop.jpg')} shape="circle" />
          <p style={{ fontSize:'20px', textAlign: 'center' , margin: '0'}} >Nattida Pasutham</p>
          <p style={{ fontSize:'15px', textAlign: 'center', margin: '0'}}>Software Engineer</p>
          </div>
          <Menu backgroundColor="rgb(236,231,225)" mode="inline" 
          // defaultSelectedKeys={['6']}
          >
            <MenuItem 
            key="1"
            // onClick={HomeClick}
            >
            <Link to="/Home" />
            <p>Home</p>
            </MenuItem>
            <MenuItem key="2">
            <Link to="/About" />
              About</MenuItem>
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
              {/* <React.Fragment>
                <Home/>
                <About/>
              </React.Fragment> */}
             
              <Route path="/Home" component={Home}/>
              <Route path="/About" component={About}/>
              
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
