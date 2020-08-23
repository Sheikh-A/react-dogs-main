import React, { useState, useEffect } from "react";
import PetCard from "./PetCard";
import axios from "axios";

export default function PetGrid() {
  const [pets, setPets] = useState([]);
  const [breed, setBreed] = useState("mix"); //use on useEffect

  useEffect(() => {
    axios
      .get(`https://dog.ceo/api/breed/${breed}/images/random/12`)
      .then((response) => {
        setPets(response.data.message);
      })
      .catch((error) => {
        console.log("no dogs", error);
      });
  }, [breed]);
  return (
    <div className="container">
      <button onClick={() => setBreed("husky")}>Husky</button>
      <button onClick={() => setBreed("mix")}>Mix</button>
      <button onClick={() => setBreed("pug")}>Pug</button>
      <div className="entry">
        {pets.map((pet, index) => {
          return <PetCard key={index} imgUrl={pet} breed={breed} />;
        })}
      </div>
    </div>
  );
}
