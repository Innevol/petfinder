import React from "react";
import render from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
    render() {
        <div>
            <Pet name="Sunny" animal="Bird" breed="Sun Conure" />
            <Pet name="Mango" animal="Bird" breed="Sun Conure" />
            <Pet name="Luna" animal="Dog" breed="Mixed" />
        </div>
    }
}

render(<App />, document.getElementById("root"));