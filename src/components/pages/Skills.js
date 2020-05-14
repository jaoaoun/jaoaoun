import React from 'react'
import 'antd/dist/antd.css'
import { Card } from 'antd'

export const Skills = () => {
  const gridStyle = {
    width: '25%',
    textAlign: 'center',
    height: '230px'
  }
  const gridStyle2 = {
    width: '25%',
    textAlign: 'center',
    height: '230px'
  }

  return (
    <div section="skills" id="skills" style={{ marginBottom: '70px' }}>
      <div style={{ marginBottom: '35px' }}>
        <h1 style={{ fontSize: '15px' }}>Skills</h1>
      </div>
      <div>
        <Card title="Computer" style={{ margin: '30px' }} headStyle={{ backgroundColor: '#EFCBC3' }}>
          <Card.Grid style={gridStyle}>
            Microsoft office
            <br />{' '}
            <img
              src={require('../../assets/img/micro-off.JPG')}
              alt="img-skills"
              style={{ height: 'auto', width: '250px', marginTop: '20px', objectFit: 'cover' }}
            />
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            Adobe photoshop
            <br />{' '}
            <img
              src={require('../../assets/img/adobe-ps.JPG')}
              alt="img-skills"
              style={{ height: 'auto', width: '150px', marginTop: '20px', objectFit: 'cover' }}
            />
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            SVN
            <br />{' '}
            <img
              src={require('../../assets/img/SVN.jpg')}
              alt="img-skills"
              style={{ height: 'auto', width: '150px', marginTop: '20px', objectFit: 'cover' }}
            />
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            Matlab
            <br />{' '}
            <img
              src={require('../../assets/img/Matlab.jpg')}
              alt="img-skills"
              style={{ height: 'auto', width: '150px', marginTop: '20px', objectFit: 'cover' }}
            />
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            HTML&CSS&JavaScript
            <br />{' '}
            <img
              src={require('../../assets/img/hcj.jpg')}
              alt="img-skills"
              style={{ height: 'auto', width: '250px', marginTop: '20px', objectFit: 'cover' }}
            />
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            Bootstrap
            <br />{' '}
            <img
              src={require('../../assets/img/boot.jpg')}
              alt="img-skills"
              style={{ height: 'auto', width: '150px', marginTop: '20px', objectFit: 'cover' }}
            />
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            React&Reactstrap
            <br />{' '}
            <img
              src={require('../../assets/img/React.png')}
              alt="img-skills"
              style={{ height: 'auto', width: '100px', marginTop: '20px', objectFit: 'cover' }}
            />
            <img
              src={require('../../assets/img/reactstrap.JPG')}
              alt="img-skills"
              style={{ height: 'auto', width: '100px', marginTop: '20px', objectFit: 'cover' }}
            />
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            Ant design
            <br />{' '}
            <img
              src={require('../../assets/img/antd.png')}
              alt="img-skills"
              style={{ height: 'auto', width: '150px', marginTop: '20px', objectFit: 'cover' }}
            />
          </Card.Grid>
        </Card>
      </div>
      <div>
        <Card title="Languages" style={{ margin: '30px' }} headStyle={{ backgroundColor: '#EFCBC3' }}>
          <Card.Grid style={gridStyle2}>English(Intermediate)</Card.Grid>
          <Card.Grid style={gridStyle2}>Thai(Native)</Card.Grid>
          <Card.Grid style={gridStyle2}>Japanese(Basic)</Card.Grid>
          <Card.Grid style={gridStyle}>
            Korean(Basic)
            <br />{' '}
            <img
              src={require('../../assets/img/Cer-ko.JPG')}
              alt="img-skills"
              style={{ height: 'auto', width: '200px', marginTop: '20px', objectFit: 'cover' }}
            />
          </Card.Grid>
        </Card>
      </div>
    </div>
  )
}

export default Skills
