import React, {Component} from 'react';

function Header({title}) {
  return <h1>{title}</h1>
}

function InventoryItem({name, price}) {
  return (
      <div>
        <strong>{name}</strong>
          <hr />
          <p>{price}</p>
      </div>
  )
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {itemOne: {name: 'Crisps', price: 1.99}, itemTwo: {name: 'Bread', price: 3.99}}
  }

  render() {
    return (
        <div>
            <Header title="BuyStuff" />
          <InventoryItem name={this.state.itemOne.name} price={this.state.itemOne.price} />
          <InventoryItem name={this.state.itemTwo.name} price={this.state.itemTwo.price} />
        </div>
    )
  }
}

export default App;
