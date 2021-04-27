const initialState = {
    floor: '0',
    avaliable: 'green'
  }
  
  const liftReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LIFT':
        return {
          ...state,
          floor: action.name,
          color: 'red'
        }
      case 'AVALIABLE':
        return {
            ...state,
            color: action.color
        }
      default:
        return state;
    }
  }
  
  export default liftReducer;