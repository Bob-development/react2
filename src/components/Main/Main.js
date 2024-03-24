import { PetCard } from "../PetCard/PetCard";
import { petsData } from "../../utils/PetsData";

import './Main.css';

export function Main() {
  return (
    <div className="Main">
      {
        petsData.map((pet, i) => {
          return <PetCard key={i} src={pet.src} title={pet.title}/>
        })
      }
    </div>
  );
}

