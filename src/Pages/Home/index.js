import React from 'react';
import Button from '../../Components/Button';
import Container from '../../Components/Container';
import floors from '../../Data/floors';
import Elevator from '../../Components/Elevator';
import './Home.scss';

const App = () => {

  return (
    <div className="flex">
      <div className="main-space">
        <div className="btn-holder">
          {
            floors.map((lift, idx) => (
              <Button key={idx} name={lift.name} value={lift.name} />
            ))
          }
        </div>
        <div className="ctn-holder">
          {
            floors.map((container, idx) => (
              <Container key={idx} />
            ))
          }
          <Elevator />
        </div>
      </div>
    </div>
  )
}

export default App;