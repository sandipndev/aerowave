import { connect } from "react-redux";

function View(props) {
  return (
    <div className="text-6xl text-black font-bold">
        {props.gesture}
    </div>
  );
}

const mapStateToProps = (state) => ({
  gesture: state.hand.gesture
});

export default connect(mapStateToProps)(View);