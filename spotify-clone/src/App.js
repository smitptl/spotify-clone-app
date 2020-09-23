import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";

function App() {
  // run the code based on a condition

  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }
    console.log("i have token>>>", token);
  }, []);
  return (
    <div className="App">
      {token ? <h1>I am logged in</h1> : <Login />}
      <Login />
    </div>
  );
}

export default App;
