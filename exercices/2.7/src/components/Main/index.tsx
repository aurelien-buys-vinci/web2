import { SyntheticEvent, useState } from "react";
import Movies from "./Movies/index";

const defaultMovies = [
    {
        title: "The Shawshank Redemption",
        director: "Frank Darabont",
        dureation: 142,
        description: "Two imprisoned"
    },
    {
        title: "The Godfather",
        director: "Francis Ford Coppola",
        dureation: 175,
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
    },
    {
        title: "The Dark Knight",
        director: "Christopher Nolan",
        dureation: 152,
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
    },
    {
        title: "Interstellar",
        director: "Christopher Nolan",
        dureation: 169,
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        budget: 165
    },
    {
        title: "The Prestige",
        director: "Christopher Nolan",
        dureation: 130,
        description: "After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other."
    }
];

const Main = () => {
    const [movies, setMovies] = useState(defaultMovies);
    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [dureation, setDureation] = useState(0);
    const [imageUrl, setImageUrl] = useState("");
    const [description, setDescription] = useState("");
    const [budget, setBudget] = useState<number | undefined>(undefined);
    
    
    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        const newMovie = {
            title: title,
            director: director,
            dureation: dureation,
            imageUrl: imageUrl,
            description: description,
            budget: budget,
        };
        
        setMovies([...movies, newMovie]);
        console.log(movies);
    };

    const handleTitleChange = (e: SyntheticEvent) => {
        const titleTarget = e.target as HTMLInputElement;
        setTitle(titleTarget.value);
    };

    const handleDirectorChange = (e: SyntheticEvent) => {
        const directorTarget = e.target as HTMLInputElement;
        setDirector(directorTarget.value);
    };

    const handleDureationChange = (e: SyntheticEvent) => {
        const dureationTarget = e.target as HTMLInputElement;
        setDureation(parseInt(dureationTarget.value));
    };

    const handleImageUrlChange = (e: SyntheticEvent) => {
        const imageUrlTarget = e.target as HTMLInputElement;
        setImageUrl(imageUrlTarget.value);
    };

    const handleDescriptionChange = (e: SyntheticEvent) => {
        const descriptionTarget = e.target as HTMLInputElement;
        setDescription(descriptionTarget.value);
    };

    const handleBudgetChange = (e: SyntheticEvent) => {
        const budgetTarget = e.target as HTMLInputElement;
        setBudget(budgetTarget.value ? parseInt(budgetTarget.value) : undefined);
    };


    return (
        <div>
            <div>
                <h1>Movies</h1>
                <Movies movies={movies} />
            </div>
            <div>
                <h1>Add a movie</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={handleTitleChange} />
                    </div>
                    <div>
                        <label htmlFor="director">Director</label>
                        <input type="text" id="director" onChange={handleDirectorChange} />
                    </div>
                    <div>
                        <label htmlFor="dureation">Dureation</label>
                        <input type="number" id="dureation" onChange={handleDureationChange} />
                    </div>
                    <div>
                        <label htmlFor="imageUrl">Image URL</label>
                        <input type="text" id="imageUrl" onChange={handleImageUrlChange} />
                    </div>
                    <div>
                        <label htmlFor="description">Description</label>
                        <input type="text" id="description" onChange={handleDescriptionChange} />
                    </div>
                    <div>
                        <label htmlFor="budget">Budget</label>
                        <input type="number" id="budget" onChange={handleBudgetChange} />
                    </div>
                    <button type="submit">Add movie</button>
                </form>
            </div>
        </div>
        
    );
};

export default Main;
