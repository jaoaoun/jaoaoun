import React from 'react'
import 'antd/dist/antd.css'
import '../../css/Home.css'
import { Carousel, Button } from 'antd'

export const Home = () => {
  return (
    <div>
      <div>
        <h1>Home</h1>
      </div>
      <div>
        <Carousel dotPosition="right">
          <div>
            <p style={{ fontSize: '40px', textAlign: 'left', paddingLeft: '20px', height: '30px' }}>Hello</p>
            <p style={{ fontSize: '35px', textAlign: 'left', paddingLeft: '20px', height: '30px' }}>Welcome to My Profile!!</p>
            <Button 
            style={{bottom:'-280px'}} 
            shape="round"
            size= "large"
            >Resume(.pdf)</Button>
          </div>
          <div>
            <p style={{ fontSize: '40px', textAlign: 'left', paddingLeft: '20px', height: '30px' }}>こんにちは</p>
            <p style={{ fontSize: '35px', textAlign: 'left', paddingLeft: '20px', height: '30px' }}>私のプロフィールへようこそ!!</p>
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default Home
