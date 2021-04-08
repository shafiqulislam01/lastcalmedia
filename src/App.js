import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import backgrounds from "./backgrounds";

// console.log(Backgrounds[0]);

function App() {
  const [imgState, setimgState] = useState();

  const onChangeSet = (e) => {
    const selectedId = e.target.value;
    const selectedimgState = backgrounds.filter((d) => d.id == selectedId)[0];
    setimgState(selectedimgState);
  };
  return (
    <div className="App-header">
      <img src={logo} alt="logo" />
      <select
        name="select-bg"
        id="select-bg"
        onChange={(e) => {
          onChangeSet(e);
        }}
      >
        {backgrounds.map((d) => {
          return (
            <option key={d.id} value={d.id}>
              {d.name}
            </option>
          );
        })}
      </select>
      <img src={imgState?.image} width="100%" height="400px" alt="logo" />
      <video autoPlay loop muted src={imgState?.vd} type="video/mp4"></video>
    </div>
  );
}

export default App;
