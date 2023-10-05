import "./App.css";
import Body from "./Body";
import Header from "./Header";
import appStore from "./appStore";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={appStore}>
      <div className="App">
        <Header />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
