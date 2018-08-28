import React from "react";
import { render } from "react-dom";
import pf from "petfinder-client";
import Pet from "./Pet";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

console.log(process.env.API_KEY, process.env.API_SECRET);

class App extends React.Component {
  componentDidMount() {
    const prom = petfinder.breed.list({ animal: "dog" });

    prom.then(console.log, console.error);
  }
  render() {
    return (
      <div>
        <h1>Adopt Me!</h1>
        <Pet name="Sunny" animal="Bird" breed="Sun Conure" />
        <Pet name="Mango" animal="Bird" breed="Sun Conure" />
        <Pet name="Luna" animal="Dog" breed="Mixed" />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
