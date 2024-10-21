import PageTitle from "../PageTitle/index"
import Cinema from "../Cinema/index"
import Header from "../Header/index"
import Footer from "../Footer/index"

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
      <Header image="https://images.unsplash.com/photo-1727783842077-10ffa2df9832?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        <h1>My Cinema</h1>
      </Header>
      <PageTitle title={pageTitle} />

      <Cinema name={cinema1Name} movies= {moviesCinema1} />

      <Cinema name={cinema2Name} movies={moviesCinema2} />

      <Footer image="https://images.unsplash.com/photo-1729148074715-78de89a6bed2?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        <p>My Cinema - 2021</p>
      </Footer>  
    </div>
  );
};


export default App;
