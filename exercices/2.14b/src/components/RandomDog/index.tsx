import { useEffect, useState } from "react"


const RandomDog = () => {
    const [dog, setDog] = useState<string>("");

    useEffect(() => {
        fetchDog();
        const interval = setInterval(() => {
          fetchDog();
        }, 5000);
        return () => clearInterval(interval);
      }, []);

      const fetchDog = async () => {
        try {
          const response = await fetch("https://dog.ceo/api/breeds/image/random");
    
          if (!response.ok)
            throw new Error(
              `fetch error : ${response.status} : ${response.statusText}`
            );
    
          const dog = await response.json();
          setDog(dog.message);
        } catch (err) {
          console.error("HomePage::error: ", err);
        }
      }
    return (
        <div>
            <img src={dog} alt="dog" />
        </div>
    )
}

export default RandomDog;