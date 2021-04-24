import './App.css';
import Slider from "./components/slider/slider";
import SliderArray from "./components/slider/slides/slides";

function App() {
  return (
      <Slider slides={SliderArray}/>
  );
}

export default App;
