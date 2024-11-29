import { useEffect, useState } from "react";

const RandomDog = () => {
  const [dog, setDog] = useState<string>("");
  const [mouseOn, setMouseOn] = useState<boolean>(false);

  const handleMouseOn = () => {
    setMouseOn(!mouseOn);
  };

  useEffect(() => {
    if (!mouseOn) {
      fetchDog();
      const interval = setInterval(() => {
        fetchDog();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [mouseOn]);

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
  };
  return (
    <div>
      <img
        src={dog}
        alt="dog"
        height={300}
        onMouseEnter={handleMouseOn}
        onMouseLeave={handleMouseOn}
      />
    </div>
  );
};

export default RandomDog;
