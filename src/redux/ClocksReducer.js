const UPDATE_TIME = "UPDATE_TIME";

let initialState = { time: new Date() };

const ClocksReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TIME:
      return { ...state, time: new Date() };
    default:
      return state;
  }
};

export const updateTimeAC = () => ({
  type: UPDATE_TIME
});

export default ClocksReducer;
