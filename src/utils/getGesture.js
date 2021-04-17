function dist(a, b) {
  return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
}

function getGesture(landmarks) {
  if (
    dist(landmarks[5], landmarks[8]) +
      dist(landmarks[9], landmarks[12]) +
      dist(landmarks[13], landmarks[16]) +
      dist(landmarks[17], landmarks[20]) +
      Math.min(
        dist(landmarks[4], landmarks[5]),
        dist(landmarks[4], landmarks[9]),
        dist(landmarks[4], landmarks[13]),
        dist(landmarks[4], landmarks[17])
      ) <
    0.2
  )
    return "GRAB";
  return "HOVER";
}

export default getGesture;
