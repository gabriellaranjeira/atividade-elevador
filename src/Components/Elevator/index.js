import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './Elevator.scss';
import { avaliable } from '../../Actions';

const Elevator = ({ floor, color, avaliable }) => {

  const flr = floor;


  useEffect(() => {
    const lift = document.querySelector('.lift');
    console.log(flr);
    switch (flr) {
      case 'T':
        lift.style.bottom = 80 + 'px';
        break
      case '1':
        lift.style.bottom = 150 + 'px';
        break
      case '2':
        lift.style.bottom = 220 + 'px';
        break
      case '3':
        lift.style.bottom = 290 + 'px';
        break
      default:
        lift.style.bottom = 80 + 'px';
    }

    setTimeout(() => {
        avaliable("green");
    }, 5000);
  }, [flr, avaliable])

  return (
    <div style={{backgroundColor:color}} className="lift">{floor}</div>
  )
}
const mapStateToProps = (state) => ({
  floor: state.liftReducer.floor,
  color: state.liftReducer.color
})
export default connect(mapStateToProps, {avaliable})(Elevator);