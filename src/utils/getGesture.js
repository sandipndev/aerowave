function getGesture(landmarks) {
  let thumbIsOpen = false;
  let firstFingerIsOpen = false;
  let secondFingerIsOpen = false;
  let thirdFingerIsOpen = false;
  let pinkyIsOpen = false;

  if (landmarks[3].x < landmarks[2].x && landmarks[4].x < landmarks[2].x)
    thumbIsOpen = true;
  if (landmarks[7].y < landmarks[6].y && landmarks[8].y < landmarks[6].y)
    firstFingerIsOpen = true;
  if (landmarks[11].y < landmarks[10].y && landmarks[12].y < landmarks[10].y)
    secondFingerIsOpen = true;
  if (landmarks[15].y < landmarks[14].y && landmarks[16].y < landmarks[14].y)
    thirdFingerIsOpen = true;
  if (landmarks[19].y < landmarks[18].y && landmarks[19].y < landmarks[18].y)
    pinkyIsOpen = true;

  if (
    !thumbIsOpen &&
    !firstFingerIsOpen &&
    !secondFingerIsOpen &&
    !thirdFingerIsOpen &&
    !pinkyIsOpen
  )
    return "GRAB";
  else if (
    Math.sqrt(
      Math.pow(landmarks[4].x - landmarks[8].x, 2) +
        Math.sqrt(Math.pow(landmarks[4].y - landmarks[8].y, 2))
    ) < 0.25
  )
    return "CLICK";
  else return "HOVER";
}

export default getGesture;
