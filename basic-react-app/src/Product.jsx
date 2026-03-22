function Product({img, title, price=10000, features, features2}){
  let isDiscount = price > 90000;
  let design = {backgroundColor: isDiscount ? "lightgreen" : ""};

  return(
    <div className="Product" style={design}>
      <img src={img} alt="product" height="200px" width="200px" />
      <h2>{title}</h2>
      <p id="para">price: {price}</p>
      {isDiscount ? <p id="discount">Discount of 5% <p id="post_discount"> Discounted price: {price *= 0.95}</p></p>: ""}
      <p className ="feature">{features}</p>
      <p className ="feature">{features2?.a}</p>
    </div>
  );
}

export default Product;