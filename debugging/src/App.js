import "./App.css";
// import Test1 from "./pages/Test1";
// import Test2 from "./pages/Test2";
// import Test3 from "./pages/Test3";
import Test4 from "./pages/Test4.js";

function App() {
  let names = ["John", "Jacob", "Jingleheimer", "Schmidt"];
  return (
    <div className="App">
      <header className="App-header">
        {/* <Test1 /> */}
        {/* <Test2 names={names}/> */}
        {/* <Test3 /> */}
        <Test4 />
      </header>
    </div>
  );
}

export default App;
