import { useEffect, useRef } from "react";

import { Hands, HAND_CONNECTIONS } from "@mediapipe/hands/hands";

import { Camera } from "@mediapipe/camera_utils/camera_utils";
import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils/drawing_utils";
import "@mediapipe/control_utils/control_utils";

function TouchMeNotBase() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const hands = new Hands({locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`});

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
    <div>
      <canvas className="transform scale-x-minus-1" ref={canvasRef}/>
    </div>
  );
}

export default TouchMeNotBase;