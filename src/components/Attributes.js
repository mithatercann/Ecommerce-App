import React, { Component } from "react";
import AttributeItems from "./AttributeItems";
class Attributes extends Component {
  //This event is from AttributeItems componenet comes from AttributeBtn.
  handleClick = (attribute) => {
    this.props.handleAttributeEvent(attribute);
  };
  render() {
    // This get product prop and map the product attributes.
    const { attributes } = this.props;
    return attributes.map((attribute, idx) => (
      <div>
        <h3 className="product-detail__attributes--name">
          {attribute.name.toUpperCase()} :
        </h3>
        <div key={idx} className="product-detail__attributes--btns">
          <AttributeItems
            handleAttributeEvent={(attribute) => {
              this.handleClick(attribute);
            }}
            attributeName={attribute.name}
            attributeItems={attribute.items}
          />
        </div>
      </div>
    ));
  }
}

export default Attributes;
