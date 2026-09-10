import { Link } from "react-router-dom";

function FoodCard({ food, addToCart }) {
  return (
    <div className="food-card">
      <Link to={`/menu/${food.id}`} className="food-details-link">
        <div className="food-emoji">{food.emoji}</div>

        <p className="food-category">{food.category}</p>

        <h3>{food.name}</h3>
      </Link>

      <div className="food-bottom">
        <strong>₹{food.price}</strong>

        <button onClick={() => addToCart(food)}>
          Add +
        </button>
      </div>
    </div>
  );
}

export default FoodCard;