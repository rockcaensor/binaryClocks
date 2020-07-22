import { connect } from "react-redux";
import { updateTimeAC } from "./../../redux/ClocksReducer";
import Clocks from "./Clocks";

let mapStateToProps = state => {
  return { ClocksPage: state.ClocksPage };
};

let mapDispatchToProps = dispatch => {
  return {
    updateTime: () => {
      dispatch(updateTimeAC());
    }
  };
};

let ClocksContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Clocks);

export default ClocksContainer;
