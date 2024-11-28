import { useEffect, useState } from "react"


const RandomDog = () => {
    const [dog, setDog] = useState<string>("");

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
          .then((response) => {
            if (!response.ok)
              throw new Error(
                `fetch error : ${response.status} : ${response.statusText}`
              );
            return response.json();
          })
          .then((data) => {
            setDog(data.message);
          })
          .catch((err) => {
            console.error("HomePage::error: ", err);
          });
      }, []);

    return (
        <div>
            <img src={dog} alt="dog" />
        </div>
    )
}

export default RandomDog;