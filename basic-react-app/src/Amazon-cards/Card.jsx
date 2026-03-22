import "./Card.css";

function Card({title, img, features, price}) {
  return(
    <div className="card">
      <h4 className="title">{title}</h4>
      <img src={img} alt="product" height="100" width="100"></img>
      <h6>{features.map((elem) => <li>{elem}</li>)}</h6>
      <div id="price">{price}</div>
    </div>
  );
}

export default Card;