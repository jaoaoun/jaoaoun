import React from 'react'
import { Row, Col } from 'antd'

export const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <div>
        <Row>
          <Col flex="100px">
            <div style={{ marginLeft: '150px', marginTop: '100px' }}>
              <img src={require('../../img/mail.jpg')} alt="img-contact" style={{ height: '150px', width: 'auto' }} />
            </div>
          </Col>
          <Col>
            <div style={{ marginLeft: '50px', marginTop: '100px' }}>
              <p style={{ fontSize: '20px', marginBottom: '10px' }}>ntd_pst@hotmail.com</p>
              <p style={{ fontSize: '20px', marginBottom: '10px' }}>ntdpst21@gmail.com</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col flex="100px">
            <div style={{ marginLeft: '170px', marginTop: '100px' }}>
              <img
                src={require('../../img/linkin.png')}
                alt="img-contact"
                style={{ height: '150px', width: 'auto' }}
              ></img>
            </div>
          </Col>
          <Col>
            <div style={{ marginLeft: '50px', marginTop: '150px' }}>
              <a
                style={{ fontSize: '20px', marginBottom: '10px' }}
                href="https://www.linkedin.com/in/nattida-pasutham-204a5b186/"
                target="_blank"
              >
                Nattida Pasutham
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col flex="100px">
            <div style={{ marginLeft: '170px', marginTop: '100px' }}>
              <img
                src={require('../../img/github.png')}
                alt="img-contact"
                style={{ height: '150px', width: 'auto' }}
              ></img>
            </div>
          </Col>
          <Col>
            <div style={{ marginLeft: '50px', marginTop: '150px' }}>
              <a
                style={{ fontSize: '20px', marginBottom: '10px' }}
                href="https://github.com/jaoaoun"
                target="_blank"
              >
                Nattida Pasutham
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Contact
