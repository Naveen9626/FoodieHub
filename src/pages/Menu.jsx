import { useState } from "react";
import foods from "../data/foods";
import FoodCard from "../components/FoodCard";

function Menu({ addToCart }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", "Burger", "Pizza", "Biryani", "Sides", "Drinks", "Pasta"];

  const filteredFoods = foods.filter((food) => {
  const foodName = String(food.name || "").toLowerCase();
  const foodCategory = String(food.category || "").toLowerCase();
  const searchText = search.toLowerCase();

  const matchesSearch = foodName.includes(searchText);

  const matchesCategory =
    category.toLowerCase() === "all" ||
    foodCategory === category.toLowerCase();

  return matchesSearch && matchesCategory;
});

  return (
    <section className="menu-section">

      <div className="menu-heading">
        <p>OUR MENU</p>
        <h2>Popular Dishes 🍽️</h2>
      </div>

      <div className="menu-controls">

        <input
          type="text"
          placeholder="Search food..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="categories">
          {categories.map((item) => (
            <button
              key={item}
              className={category === item ? "active-category" : ""}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

      </div>

      <div className="food-grid">
        {filteredFoods.length > 0 ? (
          filteredFoods.map((food) => (
            <FoodCard
              key={food.id}
              food={food}
              addToCart={addToCart}
            />
          ))
        ) : (
          <p>No food found 😔</p>
        )}
      </div>

    </section>
  );
}

export default Menu;