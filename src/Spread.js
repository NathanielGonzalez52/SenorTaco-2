import React, {useState} from 'react'
import "./Spread.css";
import FoodDisplay from './FoodDisplay';
import Food from "./Food.js";
export default function Spread() {

  return (
    <div>
      <h1>Not Sure What to Get?</h1>
      <h2>Feast Your Eyes on Our Delicious Menu</h2>
        {Food.map((foodItem, index) => {
          return (
            <FoodDisplay
              key={index}
              id={index}
              name={foodItem.name}
              img={foodItem.imgURL}
              description={foodItem.description}
          />
        )
      })
      }
    </div>
  )
};
