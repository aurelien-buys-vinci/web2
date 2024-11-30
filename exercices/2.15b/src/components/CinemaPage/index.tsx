import Movie from "./movie";

const cinema1 = {
  name: "Cinema Nova",
  movies: [
    {
      id: 1,
      title: "HAIKYU-THE DUMPSTER BATTLE",
      director: "Susumu Mitsunaka",
      description:
        "A high-energy sports anime movie focusing on the intense volleyball rivalry between Karasuno High and their fierce competitors.",
    },
    {
      id: 2,
      title: "GOODBYE JULIA",
      director: "Mohamed Kordofani",
      description:
        "A poignant drama that explores themes of love, loss, and the complex dynamics of human relationships in a deeply emotional narrative.",
    },
    {
      id: 3,
      title: "INCEPTION",
      director: "Christopher Nolan",
      description:
        "A mind-bending sci-fi thriller where a skilled thief, who enters people's dreams to steal secrets, is given a chance to have his criminal record erased if he can implant an idea into a target's subconscious.",
    },
    {
      id: 4,
      title: "PARASITE",
      director: "Bong Joon-ho",
      description:
        "An Oscar-winning dark comedy thriller that examines class disparities in South Korea through the lives of two families, one rich and one poor.",
    },
  ],
};

const cinema2 = {
  name: "Cinema Paradiso",
  movies: [
    {
      id: 5,
      title: "THE DARK KNIGHT",
      director: "Christopher Nolan",
      description:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    },
    {
      id: 6,
      title: "INTERSTELLAR",
      director: "Christopher Nolan",
      description:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    },
    {
      id: 7,
      title: "THE PRESTIGE",
      director: "Christopher Nolan",
      description:
        "After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.",
    },
  ],
};

interface CinemaProps {
  name: string;
  movies: Movie[];
}

const Cinema = (props: CinemaProps) => (
  <div>
    <h2>{props.name}</h2>
    <ul>
      {props.movies.map((movie) => (
        <li key={movie.id}>
          <Movie
            id={movie.id}
            title={movie.title}
            director={movie.director}
            description={movie.description}
          />
        </li>
      ))}
    </ul>
  </div>
);

const CinemaPage = () => (
  <div>
    <Cinema name={cinema1.name} movies={cinema1.movies} />
    <Cinema name={cinema2.name} movies={cinema2.movies} />
  </div>
);

export default CinemaPage;
