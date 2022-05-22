import React, { Component } from "react";
import "./App.css";
import productData from "./products.js";
import { ProductListing } from "./components/ProductListing";
import { Tags } from "./components/Tags";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTag: null
    };
    this.handleTags = this.handleTags.bind(this);
  }

  handleTags(tagName) {
    return () => {
        if (tagName === this.state.selectedTag) {
            this.setState({selectedTag: null})
        } else {
            this.setState({ selectedTag: tagName });
        }
    };
  }

  render() {
    const { products, ingredients } = productData;
    const { selectedTag } = this.state;

    return (
        <div className="container">
          <h1>Products</h1>
          <Tags
              tags={ingredients}
              selectedTag={selectedTag}
              handleTags={this.handleTags}
          />
          <ProductListing products={products} selectedTag={selectedTag} />
        </div>
    );
  }
}

export default App;
