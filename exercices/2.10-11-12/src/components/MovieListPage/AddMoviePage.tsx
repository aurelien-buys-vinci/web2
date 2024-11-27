import { SyntheticEvent, useState } from "react";
import { CinemaContext } from "../../types";
import { useNavigate, useOutletContext } from "react-router-dom";



const addMoviePage = () => {
    const { addMovie }: CinemaContext = useOutletContext();
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [dureation, setDureation] = useState(0);
    const [imageUrl, setImageUrl] = useState("");
    const [description, setDescription] = useState("");
    const [budget, setBudget] = useState<number | undefined>(undefined);

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
        
        addMovie(newMovie);
        navigate("/movies");
    };

    return (
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
       
    )
}

export default addMoviePage;
