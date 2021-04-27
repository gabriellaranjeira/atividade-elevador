import React from 'react';
import { connect } from 'react-redux';
import { lift } from '../../Actions/';
import './Button.scss';

const Button = ({ value, lift, name, floor }) => {

  return (
    <div className="button-container">
      <div className="button-wrapper">
        <div className="button-inner">
          <button
            onClick={(name == floor) ? console.log("mesmo andar") : (e) => lift(e)}
            className={(name == floor) ? "floorBtn" : "NFloorBtn"}
            name={name}
          >
            {
              value
            }
          </button>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => ({
  floor: state.liftReducer.floor
})
export default connect(mapStateToProps, { lift })(Button);