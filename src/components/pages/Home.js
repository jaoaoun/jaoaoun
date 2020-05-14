import React from 'react'
import 'antd/dist/antd.css'
import '../../css/Home.css'
import pdf from '../../assets/Waiting for revise.pdf'
import { Carousel, Button, Card, Col, Row } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'

export const Home = () => {
  return (
    <div section="home" id="home" style={{ marginBottom: '50px' }}>
      <div style={{ marginBottom: '35px' }}>
        <h1 style={{ fontSize: '15px' }}>Home</h1>
      </div>
      <div>
        <Carousel dotPosition="right">
          <div>
            <p style={{ fontSize: '40px', textAlign: 'left', paddingLeft: '20px', height: '10px' }}>Hello</p>
            <p style={{ fontSize: '35px', textAlign: 'left', paddingLeft: '20px', height: '10px' }}>
              Welcome to My Profile!!
            </p>
            <p
              style={{
                fontSize: '18px',
                textAlign: 'left',
                paddingLeft: '20px',
                height: '10px',
                paddingBottom: '80px',
                color: 'brown'
              }}
            >
              My favorites : Milktea | Ice cream | Strawberry cheesecake frappe | Salmon sashimi | Music | Take a photo
            </p>
            <Row>
              <Col xs={8}>
                <Card style={{ height: '250px', width: '350px', margin: '25px', padding: '15px' }}>
                  <img
                    src={require('../../assets/img/GCPR3484.JPEG')}
                    alt="logo"
                    align="center"
                    style={{ height: '200px', width: '300px' }}
                  />
                </Card>
              </Col>
              <Col xs={8}>
                <Card style={{ height: '250px', width: '350px', margin: '25px', padding: '15px' }}>
                  <img
                    src={require('../../assets/img/au2_n.jpg')}
                    alt="logo"
                    align="center"
                    style={{ height: '200px', width: '300px' }}
                  />
                </Card>
              </Col>
              <Col xs={8}>
                <Card style={{ height: '250px', width: '350px', margin: '25px', padding: '15px' }}>
                  <img
                    src={require('../../assets/img/ch_n.jpg')}
                    alt="logo"
                    align="center"
                    style={{ height: '200px', width: '300px' }}
                  />
                </Card>
              </Col>
            </Row>

            <Button style={{ bottom: '300px' }} shape="round" size="large">
              <DownloadOutlined />
              <a href={pdf} target="_blank" rel="noopener noreferrer">
                Resume(.pdf)
              </a>
            </Button>
          </div>
          <div>
            <p style={{ fontSize: '40px', textAlign: 'left', paddingLeft: '20px', height: '30px' }}>こんにちは</p>
            <p style={{ fontSize: '35px', textAlign: 'left', paddingLeft: '20px', height: '30px' }}>
              私のプロフィールへようこそ!!
            </p>
            <p
              style={{
                fontSize: '18px',
                textAlign: 'left',
                paddingLeft: '20px',
                height: '10px',
                paddingBottom: '80px',
                color: 'brown'
              }}
            >
              私のお気に入り : | ミルクティ | アイスクリーム | いちごチーズケーキフラッペ | 鮭の刺身 | 音楽を聴く |
              写真を撮る
            </p>
            <Row>
              <Col xs={8}>
                <Card style={{ height: '250px', width: '350px', margin: '25px', padding: '15px' }}>
                  <img
                    src={require('../../assets/img/ice.jpg')}
                    alt="logo"
                    align="center"
                    style={{ height: '200px', width: '300px' }}
                  />
                </Card>
              </Col>
              <Col xs={8}>
                <Card style={{ height: '250px', width: '350px', margin: '25px', padding: '15px' }}>
                  <img
                    src={require('../../assets/img/home2.jpg')}
                    alt="logo"
                    align="center"
                    style={{ height: '200px', width: '300px' }}
                  />
                </Card>
              </Col>
              <Col xs={8}>
                <Card style={{ height: '250px', width: '350px', margin: '25px', padding: '15px' }}>
                  <img
                    src={require('../../assets/img/sal2_n.jpg')}
                    alt="logo"
                    align="center"
                    style={{ height: '200px', width: '300px' }}
                  />
                </Card>
              </Col>
            </Row>
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default Home
