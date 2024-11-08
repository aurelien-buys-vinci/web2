import { useState } from 'react'

interface Couleur {
    id: number;
    couleur: string;
    couleurAvant?: Couleur;
    couleurApres?: Couleur;
}

const couleurs: Couleur[] = [
    { id: 0, couleur: "red" },
    { id: 1, couleur: "green" },
    { id: 2, couleur: "blue" },
    { id: 3, couleur: "yellow" },
    { id: 4, couleur: "violet" }
];

// Initialize circular references after defining the array
couleurs[0].couleurAvant = couleurs[4];
couleurs[0].couleurApres = couleurs[1];

couleurs[1].couleurAvant = couleurs[0];
couleurs[1].couleurApres = couleurs[2];

couleurs[2].couleurAvant = couleurs[1];
couleurs[2].couleurApres = couleurs[3];

couleurs[3].couleurAvant = couleurs[2];
couleurs[3].couleurApres = couleurs[4];

couleurs[4].couleurAvant = couleurs[3];
couleurs[4].couleurApres = couleurs[0];
const couleursFr = ["rouge", "vert", "bleu", "jaune", "violet"];

const Boite = () => {
    const [couleur, setCouleur] = useState(couleurs[0]);

    const handleClick = () => {
        if (couleur.couleurApres) {
            setCouleur(couleur.couleurApres);
        }
    };

    return (
        <div style={{ backgroundColor: couleur.couleur }} >
            <button onClick={handleClick}>
                {couleur.couleurApres ? couleursFr[couleur.couleurApres.id] : ''}
            </button>
            <p>{couleursFr[couleur.id]}</p>
        </div>
    );
};

export default Boite;