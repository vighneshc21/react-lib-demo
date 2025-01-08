// src/App.jsx

import { MyComponent, Banner } from "wowlib";

const App = () => {
  return (
    <div>
      <h1>Using MyComponent from WowLib</h1>
      <MyComponent text="Hello, World!" />
      <Banner text="Hello, World!" />
    </div>
  );
};

export default App;
