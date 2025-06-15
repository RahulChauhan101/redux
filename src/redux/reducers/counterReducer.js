


const initialState = {
  count: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "MULTIPLY":
        return { ...state, count:state.count * action.payload};  
    case "DIVISION":
        return { ...state, count:state.count / action.payload}; 
       case "SET_COUNT":
      return { ...state, count: action.payload };     
    default:
      return state;
  }
};

export default counterReducer;


