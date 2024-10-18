import PageTitle from "../PageTitle/index"
import Cinema from "../Cinema/index"

const App = () => {
  const pageTitle = "Informations sur les films dans les cinémas";

  const cinema1Name = "UGC DeBrouckère";

  const moviesCinema1 = [
  {
    id: 1,
    title: "HAIKYU-THE DUMPSTER BATTLE",
    director: "Susumu Mitsunaka",
  },
  {
    id: 2,
    title: "GOODBYE JULIA",
    director: "Mohamed Kordofani",
  },
  {
    id: 3,
    title: "INCEPTION",
    director: "Christopher Nolan",
  },
  {
    id: 4,
    title: "PARASITE",
    director: "Bong Joon-ho",
  },
];

const cinema2Name = "UGC Toison d'Or";

const moviesCinema2 = [
  {
    id: 1,
    title: "THE WATCHERS",
    director: "Ishana Night Shyamalan",
  },
  {
    id: 2,
    title: "BAD BOYS: RIDE OR DIE",
    director: "Adil El Arbi, Bilall Fallah",
  },
  {
    id: 3,
    title: "TENET",
    director: "Christopher Nolan",
  },
  {
    id: 4,
    title: "THE IRISHMAN",
    director: "Martin Scorsese",
  },
]; 

  
  return (
    <div>
      <PageTitle title={pageTitle} />

      <Cinema name={cinema1Name} movies= {moviesCinema1} />

      <Cinema name={cinema2Name} movies={moviesCinema2} />
    </div>
  );
};


export default App;
