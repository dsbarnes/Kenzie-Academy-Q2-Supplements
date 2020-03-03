import React, { Component } from "react";
// import { storeProducts } from '../data'
import { ProductConsumer } from "../context";
import Product from "./Product";
import Title from "./Title";
export default class ProductList extends Component {
  // state = {
  //     products: storeProducts
  // }

  render() {
    return (
      <React.Fragment>
        {/* <Product /> */}
        <div className="py-5">
          <div className="container">
            <Title name="Our" title="Products"></Title>

            <div className="row">
              <ProductConsumer>
                {data => {
                  // console.log(data)
                  return data.products.map(product => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
