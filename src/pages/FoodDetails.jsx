import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import foods from "../data/foods";

function FoodDetails({ addToCart }) {
  const { id } = useParams();

  const food = foods.find((item) => item.id === Number(id));

  if (!food) {
    return <h2>Food not found 😔</h2>;
  }

  return (
    <section className="food-details">
      <div className="details-image">
        <span>{food.emoji}</span>
      </div>

      <div className="details-content">
        <p>{food.category}</p>

        <h1>{food.name}</h1>

        <h2>₹{food.price}</h2>

        <p>
          Delicious and freshly prepared {food.name}.
          Made with quality ingredients and served with love ❤️
        </p>

        <button onClick={() => addToCart(food)}>
          Add to Cart 🛒
        </button>

        <Link to="/menu">
          ← Back to Menu
        </Link>
      </div>
    </section>
  );
}

export default FoodDetails;