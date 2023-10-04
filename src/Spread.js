import React, {useState} from 'react'
import "./Spread.css";
import FoodDisplay from './FoodDisplay';
import Food from "./Food.js";
export default function Spread() {

  const [isHovered, setIsHovered] = useState(false);
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
      })}
    </div>
  );
};

{/* <div className = "image-container" onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
        <img className = "display" src="../images/burrito_cut.jpg" alt="burrito">
        </img>
          {isHovered && (
            <div className="descriptor">
              <h2>Burrito</h2>
              <p>Choice of delicious chicken, beef, or pork</p>
            </div>
            )}
      </div> */}