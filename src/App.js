import './App.css';
import Slider from "./components/slider/slider";
import SliderArray from "./components/slider/slidesData";

function App() {
  return (
      <Slider slides={SliderArray}/>
  );
}

export default App;
