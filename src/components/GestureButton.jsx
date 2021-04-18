import { useRef, useEffect, useState } from "react";
import { connect } from "react-redux";

function GestureButton(props) {
  const cursorRef = useRef(null);
  const [prevInterval, setCurrInterval] = useState(null);

  useEffect(() => {
    if (!props.finger_locx) return;
    cursorRef.current.style.display = "flex";
    cursorRef.current.style.left = (window.innerWidth - props.finger_locx[8].x * window.innerWidth) + "px";
    cursorRef.current.style.top = props.finger_locx[8].y * window.innerHeight + "px";

    const i = setTimeout(() => {
        cursorRef.current.style.display = "none";
    }, 500);

    const getPrevInterval = () => prevInterval;
    if (getPrevInterval()) clearTimeout(getPrevInterval());
    setCurrInterval(i);

    // eslint-disable-next-line
  }, [props.finger_locx, setCurrInterval]);

  let bg = "bg-white";
  if (props.gesture && props.gesture[0] === "C") bg = "bg-green-500";
  else if (props.gesture && props.gesture[0] === "G") bg = "bg-blue-500";

  return (
  <div 
    className={`absolute w-12 h-12 text-2xl rounded-full z-50 hidden items-center justify-center font-bold ${bg}`}
    ref={cursorRef}>
      {props.gesture && props.gesture[0]}
  </div>);
}

const mapStateToProps = (state) => ({
  gesture: state.hand.gesture,
  finger_locx: state.hand.finger_locx,
});

export default connect(mapStateToProps)(GestureButton);