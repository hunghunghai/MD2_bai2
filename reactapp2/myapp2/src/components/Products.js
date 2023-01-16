import React, { PureComponent } from 'react'
import ListProduct from './ListProduct'

export class Products extends PureComponent {
  render() {
    return (
        <section className="products_section">
        <div className="heading_container">
          <h2>New Products In Store</h2>
          <p>Featured Product Just Arrived</p>
        </div>
        <div className="container layout_padding">
          <div className="product_container">
            
              <div className="product_box">
                <div className="product_img-box">
                  <img src="images/p12.png" alt="" />
                  <span> Sale </span>
                </div>
                <div className="product_detail-box">
                  <span> $150.00 </span>
                  <p>Passage of Lorem Ipsum, you</p>
                </div>
              </div>
            <ListProduct/>
          </div>
        </div>
      </section>
    )
  }
}

export default Products