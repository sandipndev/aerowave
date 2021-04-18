import { useEffect, useRef } from "react";
import { connect } from "react-redux";

import { Hands, HAND_CONNECTIONS } from "@mediapipe/hands/hands";

import { Camera } from "@mediapipe/camera_utils/camera_utils";
import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils/drawing_utils";
import "@mediapipe/control_utils/control_utils";

import { setGesture, setFingerLocx } from "../redux/gesture/gesture.actions";
import getGesture from "../utils/getGesture";

function TouchMeNotBase(props) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const hands = new Hands({ locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}` });

    hands.setOptions({
      maxNumHands: 1,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5
    });

    const cnvs = canvasRef.current;
    const ctx = cnvs.getContext("2d");

    const onResults = (res) => {
      ctx.save();
      ctx.clearRect(0, 0, cnvs.width, cnvs.height);
      ctx.drawImage(res.image, 0, 0, cnvs.width, cnvs.height);

      if (res.multiHandLandmarks) {
        for (const landmarks of res.multiHandLandmarks) {
          const gx = getGesture(landmarks)
          if (props.gesture !== gx) props.setGesture(gx);
          
          props.setFingerLocx(landmarks);

          drawConnectors(ctx, landmarks, HAND_CONNECTIONS, { color: '#00FF00', lineWidth: 5 });
          drawLandmarks(ctx, landmarks, { color: '#FF0000', lineWidth: 2 });
        }
      }

      ctx.restore();
    };

    hands.onResults(onResults);

    const vidEl = document.createElement("video");

    const camera = new Camera(vidEl, {
      onFrame: async () => {
        await hands.send({ image: vidEl });
      },
      width: 1280,
      height: 720
    });

    camera.start();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const setCanvasSize = () => {
      canvasRef.current.height = window.innerHeight;
      canvasRef.current.width = window.innerWidth;
    }

    setCanvasSize();
    window.addEventListener("resize", () => setCanvasSize());
  }, []);

  return (
    <div className="absolute top-0 filter filter-grayscale-80">
      <canvas className="transform scale-x-minus-1" ref={canvasRef} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  gesture: state.hand.gesture
});

const mapDispatchToProps = (dispatch) => ({
  setGesture: (gesture) => dispatch(setGesture(gesture)),
  setFingerLocx: (gesture) => dispatch(setFingerLocx(gesture)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TouchMeNotBase);