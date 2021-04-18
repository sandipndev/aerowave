import TouchMeNotBase from "./components/TouchMeNotBase";
import GestureButton from "./components/GestureButton";
import Notify from "./components/Notify";
import UI from "./components/UI";

function App() {
  return (
    <div className="bg-gray-800 w-screen h-screen">
      <TouchMeNotBase />
      <GestureButton />
      <Notify />
      <UI />
    </div>
  );
}

export default App;
