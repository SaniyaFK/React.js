import Card from "./Card.jsx";
import "./CardTab.css"

function CardTab({heading}) {
  return(
    <div>
      <h4 id="heading">"Blockbuster Deals on Computer Accessory | Shop Now"</h4>
      <div className="cardTab">
        <Card title="Logitech MX Master 35" img="/Amazon-pics/mx.png" features={["8000 DPI", "5 Programmable Buttons"]}
          price="₹12,495" />
        <Card title="Apple pencil (2nd gen)" img="/Amazon-pics/pencil.png" features={["Intuitive touch surface", "Designed for ipad Pro"]}
          price="₹11,900" />
        <Card title="Zebronic zeb transformer" img="/Amazon-pics/keyboard.png" features={["Intuitive touch surface", "Designed for ipad Pro"]}
          price="₹1,599" />
        <Card title="Portronics Toad 23 wireless mouse" img="/Amazon-pics/mouse.png" features={["Wireless mouse 2.4 GHz", "Optical Orientation"]}
          price="₹599" />
      </div>
    </div>
  
  );
}

export default CardTab;