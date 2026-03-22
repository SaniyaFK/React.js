import Product from "./Product";

function ProductTab(){
  return(
    <div className="ProductTab">
      <Product img="/phone.png" title ="phone" price={30000} features={[<li>hi-tech</li>, <li>durable</li>, <li>fast</li>]} features2={{a:"hi-tech", b:"durable", c:"fast"}}/>
      <Product img="/laptop.png" title ="laptop" price={150000} features={["more-bending ", "wifi_access ", "fast processor"]} features2={{a:"more-bending", b: "wifi_access", c: "fast processor"}}/>
      <Product img="/TV.png" title ="TV" price={100000} features={["HD quality ", "sound classic ", "slick"]} features2={{a: "HD quality", b: "sound classic", c: "slick"}}/>
    </div>
  );
}

export default ProductTab;