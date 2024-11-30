import { useState } from 'react'



interface Movie {
  id: number;
  title: string;
  director: string;
  description: string;
}


const Movie = (props: Movie) => {
    const [mouseOn, setMouseOn] = useState(false);
    const handleMouseEnter = () => {
        setMouseOn(!mouseOn);
    };


    return(
        <button onClick={handleMouseEnter}>
        <strong>{props.title}</strong> - {props.director}
        {mouseOn ? <p>{props.description}</p> : null}
        </button>
    )
};

export default Movie;
