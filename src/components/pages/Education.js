import React from 'react'
import { Timeline, Card } from 'antd'
import '../../css/Education.css'
export const Education = () => {
  return (
    <div style={{marginBottom:'70px'}}>
      <div style={{marginBottom:'35px'}}>
        <h1 style={{fontSize:'15px'}}>Education</h1>
      </div>
      <div >
        <div style={{ marginTop: '20px' }}>
          <Card style={{ width: '900px', border: '0' ,textAlign:'center'}}>
            <img src={require('../../img/education.png')} alt="img-edu" style={{width:'150px'}} />
          </Card>
          <Card style={{ width: '900px', border: '0' }}>
            <Timeline mode="left">
              <Timeline.Item label="2015-2019">
                Bachelor's of Engineering (Information Engineering)
                <br />
                Thefaculty of engineering
                <br />
                King Mongkut's Institude of Technology Ladkrabang
                <br />
                Bangkok, Thailand
                <br />
                GPA: 3.37 (Second Honors Degree)<br/>
                <img src={require('../../img/kmi.jpg')} alt="img-edu" style={{width:'200px', marginTop:'15px'}} />
                <img src={require('../../img/ite-logo.png')} alt="img-edu" style={{width:'200px', marginTop:'15px'}} />
              </Timeline.Item>
              <Timeline.Item label="2012-2015">
                Chonradsadornumrung school
                <br />
                GPA: 3.83 <br/>
                <img src={require('../../img/cru.png')} alt="img-edu" style={{width:'125px', marginTop:'15px'}} />
              </Timeline.Item>
            </Timeline>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Education
