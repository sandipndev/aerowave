import { useRef, useEffect } from "react";
import { connect } from "react-redux";

function GestureButton(props) {
  const cursorRef = useRef(null);

  useEffect(() => {
    if (!props.finger_locx) return;
    cursorRef.current.style.display = "flex";
    cursorRef.current.style.left = (window.innerWidth - props.finger_locx[8].x * window.innerWidth) + "px";
    cursorRef.current.style.top = props.finger_locx[8].y * window.innerHeight + "px";
  }, [props.finger_locx]);

  return (
  <div 
    className="absolute w-10 h-10 rounded-full bg-white z-50 hidden items-center justify-center font-bold" 
    ref={cursorRef}>
      {props.gesture && props.gesture[0]}
  </div>);
}

const mapStateToProps = (state) => ({
  gesture: state.hand.gesture,
  finger_locx: state.hand.finger_locx,
});

export default connect(mapStateToProps)(GestureButton);