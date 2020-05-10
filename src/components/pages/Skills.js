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
    <div>
      <h1>Skills</h1>
      <div>
        <Card title="Computer" style={{margin:'30px'}} headStyle={{ backgroundColor: '#EFCBC3' }}>
          <Card.Grid style={gridStyle}>Microsoft office
          <br/> <img src={require('../../img/micro-off.JPG')} style={{height:'auto', width:'250px',marginTop:'20px'}}/>
          </Card.Grid>
          <Card.Grid style={gridStyle}>Adobe photoshop
          <br/> <img src={require('../../img/adobe-ps.JPG')} style={{height:'auto', width:'150px',marginTop:'20px'}}/>
          </Card.Grid>
          <Card.Grid style={gridStyle}>SVN
          <br/> <img src={require('../../img/SVN.jpg')} style={{height:'auto', width:'150px',marginTop:'20px'}}/>
          </Card.Grid>
          <Card.Grid style={gridStyle}>Matlab
          <br/> <img src={require('../../img/Matlab.jpg')} style={{height:'auto', width:'150px',marginTop:'20px'}}/>
          </Card.Grid>
          <Card.Grid style={gridStyle}>HTML&CSS&JavaScript
          <br/> <img src={require('../../img/hcj.jpg')} style={{height:'auto', width:'250px',marginTop:'20px'}}/>
          </Card.Grid>
          <Card.Grid style={gridStyle}>Bootstrap
          <br/> <img src={require('../../img/boot.jpg')} style={{height:'auto', width:'150px',marginTop:'20px'}}/>
          </Card.Grid>
          <Card.Grid style={gridStyle}>React&Reactstrap
          <br/> <img src={require('../../img/React.png')} style={{height:'auto', width:'100px',marginTop:'20px'}}/>
          <img src={require('../../img/reactstrap.JPG')} style={{height:'auto', width:'100px',marginTop:'20px'}}/>
          </Card.Grid>
          <Card.Grid style={gridStyle}>Ant design
          <br/> <img src={require('../../img/antd.png')} style={{height:'auto', width:'150px',marginTop:'20px'}}/>
          </Card.Grid>
        </Card>
      </div>
      <div>
        <Card title="Languages" style={{margin:'30px'}} headStyle={{ backgroundColor: '#EFCBC3' }}>
          <Card.Grid style={gridStyle2} >English(Intermediate)</Card.Grid>
          <Card.Grid style={gridStyle2}>Thai(Native)</Card.Grid>
          <Card.Grid style={gridStyle2}>Japanese(Basic)</Card.Grid>
          <Card.Grid style={gridStyle}>Korean(Basic)
          <br/> <img src={require('../../img/Cer-ko.JPG')} style={{height:'auto', width:'200px',marginTop:'20px'}} /> 
          </Card.Grid>
        </Card>
        </div>

    </div>
  )
}

export default Skills
