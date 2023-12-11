import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>
        The best pizza.
        <Link to="cart">go to cart</Link>
        <br />
        Straight out of the oven, straight to you.
      </h1>
    </div>
  );
}

export default Home;
