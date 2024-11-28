import { useEffect, useState } from 'react'

import './App.css'

interface Joke {
  texte: string,
  categories: string
}

function App() {
  const[joke, setJokes] = useState<Joke>();

  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Any?type=single")
      .then((response) => {
        if (!response.ok)
          throw new Error(
            `fetch error : ${response.status} : ${response.statusText}`
          );
        return response.json();
      })
      .then((data) => {
        const newJoke = {texte: data.joke, categories: data.category};
        setJokes(newJoke);
      })
      .catch((err) => {
        console.error("HomePage::error: ", err);
      });
  }, []);

  return (
    <div>
        <h1>Joke</h1>
        {joke && (
          <div>
            <p>{joke.texte}</p>
            <p>Categories: {joke.categories}</p>
          </div>
        )}
    </div>
  )
}

export default App
