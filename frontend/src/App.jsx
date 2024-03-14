import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [jokes]);

  return (
    <>
      <div>
        <h1>Connection frontend to backend 🙂</h1>
        <h2>Total Jokes : {jokes.length}</h2>
      </div>
      {jokes.map((joke) => (
        <div key={joke.id}>
          <h2>{joke.title}</h2>
          <p>{joke.joke}</p>
        </div>
      ))}
    </>
  );
}

export default App;
