import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { GoogleLogin } from "@react-oauth/google";

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log({ credentialResponse: credentialResponse });
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
      <p className="read-the-docs">Click on the button to login</p>
    </>
  );
}

export default App;
