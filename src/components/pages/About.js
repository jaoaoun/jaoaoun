import React from 'react'
import 'antd/dist/antd.css'
import '../../css/About.css'
import { Card, Typography, Col, Row } from 'antd'

export const About = () => {
  const { Text } = Typography
  return (
    <div section="about" id="about" style={{ marginBottom: '50px' }}>
      <div style={{ marginBottom: '35px' }}>
        <h1 style={{ fontSize: '15px' }}>About</h1>
      </div>
      <div>
        <Row>
          <Col>
            <img
              src={require('../../assets/img/about1.jpg')}
              alt="logo"
              align="center"
              style={{ height: '420px', width: '500px', marginLeft: '25px', marginRight: '15px', marginTop: '15px' }}
            />
          </Col>
          <Col>
            <Card
              title="About Me"
              style={{ height: 'auto', width: '650px', marginTop: '15px' }}
              headStyle={{ backgroundColor: '#CB9894' }}
              bodyStyle={{ backgroundColor: '#EFCBC3' }}
            >
              <div>
                <Text style={{ fontSize: '20px' }}>
                  <p>Name: Nattida Pasutham</p>
                  <p>Birthday: 19/01/1997</p>
                  <p>Location: Bangkok,TH</p>
                </Text>
              </div>
              <div>
                <Text style={{ fontSize: '20px' }}>
                  <Text style={{ marginLeft: '30px' }}>
                    Hi! I'm graduate from information engineering of KMITL.
                    <br />
                  </Text>
                  I'm interested in web development / fronend development.
                  <br />
                  I have attention and patience in working. I have ability to work <br />
                  under pressure conditions. I have good human relationship and teamwork. Apart from coding and ability
                  for work I also love to listening to music, eat, drawing, travel and take a photo.
                </Text>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default About
