import React from 'react'
import { Collapse, Typography, Divider } from 'antd'
import { CaretRightOutlined } from '@ant-design/icons'

export const Experience = () => {
  const { Panel } = Collapse
  const { Text } = Typography

  return (
    <div style={{ marginBottom: '70px' }}>
      <div style={{ marginBottom: '35px' }}>
        <h1 style={{ fontSize: '15px' }}>Experience</h1>
      </div>
      <div>
        <Collapse
          defaultActiveKey={['1']}
          expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
          className="site-collapse-custom-collapse"
          style={{ width: '85%', marginLeft: '10%', marginTop: '40px', backgroundColor: '#f7f1f2' }}
        >
          <Panel header="Aprill 2020 - May 2020 | Practice" key="1" className="site-collapse-custom-panel">
            <h2 style={{ marginBottom: '0px' }}>Practice frontend development</h2>
            <Text>
              • Make your own resume website using by React&Antd
              <br />
              <div align="center">
                <img
                  src={require('../../assets/img/webresume.JPG')}
                  alt="img-exp"
                  style={{ height: '300px', width: 'auto', marginTop: '5px', objectFit: 'cover' }}
                />
              </div>
              <br />• Collaboration with college junior in the project SmartParking : design web using by React &
              Reactstrap
            </Text>
          </Panel>
          <Panel header="July 2019 - March 2020 | Work" key="2" className="site-collapse-custom-panel">
            <h2 style={{ marginBottom: '0px' }}>Software Engineering</h2>
            <h1>Toyota Tsusho DENSO Electronics (Thailand) Co., Ltd.</h1>
            <Text>
              • Develop embedded software / application software for automotive engine ECU using Model-Based Design.
              <br />
              • Conduct requirements, design, simulation, verification and problem analysis.
              <br />• Collaborate with Engine ECU Designer (Japanese Engineer)
              <br />
              <Divider style={{ marginTop: '15px', marginBottom: '15px' }} />
              Activity <br />
              • Staff in Embedded Workshop (CANlaboration) at KMITL
              <br />
              <div align="center">
                <img
                  src={require('../../assets/img/CAN.JPG')}
                  alt="img-exp"
                  style={{ height: 'auto', width: '250px', marginTop: '5px', objectFit: 'cover' }}
                />
              </div>
            </Text>
          </Panel>
          <Panel header="August 2018 - May 2019 | Project" key="3" className="site-collapse-custom-panel">
            <h2>Iot system for Current Detecting in transmission Line (Arduino, Firebase and Web application)</h2>
            <Text>
              • This project presents an example of development of the IoT system for electric cable checking. The cable
              checking issue is easier than the old method by equipping the electric sensor around the electrical cable
              which is checked. Then, we will get the data through our application to calculate various things such as
              unit, electric power and real-time graph. We can also use the unit value to calculate our electricity bill
              and ready to print out.
              <br />
              <div align="center">
                <img
                  src={require('../../assets/img/project.jpg')}
                  alt="img-exp"
                  style={{ height: 'auto', width: '500px', marginTop: '5px', objectFit: 'cover' }}
                />
              </div>
            </Text>
          </Panel>
          <Panel header="June 2018 - July 2019 | Industial Training " key="4" className="site-collapse-custom-panel">
            <h2 style={{ marginBottom: '0px' }}>Network Engineering (Installation Team) </h2>
            <h1>Dimension Data (Thailand) Limited.</h1>
            <Text>
              • Onsite install. Support engineer. Prepare configuration for switch, Inventory checking. Check door
              access and LAN. Config BAT Phone, Add Phone. Prepare IP Phone.
            </Text>
          </Panel>
          <Panel header="Year 2017" key="4" className="site-collapse-custom-panel">
            <h1 style={{ marginBottom: '0px' }}>Student of the Faculty of engineering</h1>
            <Text>• Coordinator of Electronics Club KMITL</Text>
          </Panel>
          <Panel header="Year 2016" key="5" className="site-collapse-custom-panel">
            <h1 style={{ marginBottom: '0px' }}>Student of the Faculty of engineering </h1>
            <Text>• Pre-Lab59 (Electronics Club KMITL) be Head of meeting</Text>
          </Panel>
        </Collapse>
      </div>
    </div>
  )
}

export default Experience
