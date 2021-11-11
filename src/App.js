import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isAndroid,
} from "react-device-detect";

function App() {
  const forwardTo = (site) => {
    window.location.href = site;
  };

  return (
    <div className="App">
      <header className="App-header">
        <a href="com.onlineup://somthing/anotherthing?paramar=1">deeplink</a>

        <button
          onClick={() => {
            forwardTo("https://onlineup-2cd8d.web.app");
          }}
        >
          {isBrowser ? "isBrowser" : isAndroid ? "isAndroid" : "isIOS"}
        </button>
      </header>
    </div>
  );
}

export default App;
