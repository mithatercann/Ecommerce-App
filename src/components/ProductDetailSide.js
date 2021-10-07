import React, { Component } from "react";
import AddToCartBtn from "./Buttons/AddToCartBtn";
import getCurrency from "../utils/getCurrency";
import { connect } from "react-redux";
import Attributes from "./Attributes";
import createAttribute from "../utils/createAttribute";
class ProductDetailSide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  // Creating product attribute to send it to add to cart button.
  // This event is from Attributes component.
  handleEvent = (attribute) => {
    const { data } = this.state;
    const newData = createAttribute(data, attribute);
    this.setState({
      data: newData,
    });
  };
  render() {
    const { product, currency } = this.props;
    const { data } = this.state;
    return (
      <aside className="product-detail__inner">
        <h2>{product.brand}</h2>
        <p>{product.name}</p>
        <div className="product-detail__attributes">
          <Attributes
            handleAttributeEvent={(attribute) => this.handleEvent(attribute)}
            attributes={product.attributes}
          />
        </div>
        <div className="product-detail__inner--price">
          <h3>PRICE : </h3>
          <span>{getCurrency(product, currency)}</span>
        </div>
        <AddToCartBtn
          attributes={data}
          product={product}
          passive={!product.inStock}
        />
        <dl dangerouslySetInnerHTML={{ __html: product.description }} />
      </aside>
    );
  }
}
const mapStateToProps = (state) => ({
  currency: state.currency.data,
});
export default connect(mapStateToProps)(ProductDetailSide);
