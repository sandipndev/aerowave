import TouchMeNotBase from "./components/TouchMeNotBase";
import View from "./components/View";

function App() {
  return (
    <>
      <TouchMeNotBase />
      <div className="absolute">
        <View />
      </div>
    </>
  );
}

export default App;
