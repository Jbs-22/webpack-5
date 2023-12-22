import "../styles/app.css";
import Hook from "./Hook";
import Recipes from "./Recipe";

const App = () => {
  return (
    <div className="container">
      <h1>Hello Webpack5</h1>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Hello React!</h1>
        </section>
        <Recipes />
        <Hook />
      </main>
    </div>
  );
};

export default App;
