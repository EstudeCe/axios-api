import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/EstudeCe")
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error))
      .finally(console.log("dentro do finally"));
  }, []);

  return (
    <div className="App">
      {loading ? (
        <h1>Carregando informações...</h1>
      ) : (
        <>
          <h1>título do projeto</h1>
          <img src={user.avatar_url} />
          <div className="card">
            <p>{user.login}</p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </>
      )}
    </div>
  );
}

export default App;
