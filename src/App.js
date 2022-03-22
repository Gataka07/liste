import './App.css';
import { nanoid } from "nanoid"
import SimpleList from './compoments/SimpleList/SimpleList';

// function App() {

//   const pokemonNames = [
//     { id: nanoid(), name: "Salameche", type: "Feu", level: 12 },
//     { id: nanoid(), name: "Carapuce", type: "Eau", level: 14 },
//     { id: nanoid(), name:"Bulbizarre", type: "Plante", level: 5 }
//   ]

//   return (
//     <div className="App">
//       <SimpleList pokemons={pokemonNames}></SimpleList>
//     </div>
//   );
// }



function App() {
  const produitName = [
    { id: nanoid(), name : "carotte", price : "10", promo : true },
    { id: nanoid(), name : "carotte", price : "10", promo : false},
    { id: nanoid(), name : "carotte", price : "10", promo : true}
  ]
  return (
    <div className="App">
      <SimpleList produit={produitName}></SimpleList>
    </div>
  );

}

export default App;
 