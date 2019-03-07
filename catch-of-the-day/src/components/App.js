import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  addFish = fish => {
    //1. Take a copy of the existing state
    const fishes = { ...this.state.fishes };
    //2. Add our new fishes to that fishes object
    fishes[`fish${Date.now()}`] = fish;
    //3. Set the new fish object to state
    this.setState({
      fishes: fishes
    });
    console.log("adding a fishhhhh");
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="FRESH SEAFOOD MARKET" />
        </div>

        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    );
  }
}

export default App;
