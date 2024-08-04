import "./App.css";

const App = () => {
  const recipes = [
    { name: "Beef Tacos", ingredients: "milk,meat", purchased: true },
    { name: "Chicken Fajitas", ingredients: "milk,chicken", purchased: false },
    { name: "Thumbprint Cookies", ingredients: "milk,jam", purchased: true },
  ];
  return (
    <>
      <h1>Recipe-Ingredients List</h1>
      <ul>
        {recipes.map((recipe, index) => (
          <li
            key={index}
            className={
              recipe.purchased ? "completed-recipe" : "not-completed-recipe"
            }
          >
            <p>Name: {recipe.name}</p>
            <p>Ingredients: {recipe.ingredients}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
