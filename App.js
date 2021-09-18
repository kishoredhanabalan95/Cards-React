import { useState } from "react";
import "./styles.css";

export default function App() {
  const brands = [
    {
      name: "Samsung",
      model: "Galaxy SIII",
    },
    {
      name: "Apple",
      model: "5s",
    },
    {
      name: "Google",
      model: "Pixel"
    },
    {
      name: "Sony",
      model: "X5",
    },
  ];
  return (
    <div className="App">
      {/* <LikeCounter name={"Samsung"} />
      <LikeCounter name={"Apple"} />
      <LikeCounter name={"Moto"} />
      <LikeCounter name={"Mi"} /> */}
      <Plans />
    </div>
  );
}

function LikeCounter(props) {
  const [like, setLike] = useState(0);
  return (
    <div>
      <h2>{props.name}</h2>
      <button onClick={() => setLike(like + 1)}>👍 {like}</button>
    </div>
  );
}

function Plans(){
  const plans = [
    { name: 'FREE', price: 0, features:[
      "Single User",
      "5GB Storage",
      "Unlimited Public Projects",
      "Community Access",
      "Unlimited Private Projects",
      "Dedicated Phone Support",
      "Free Subdomain",
      "Monthly Status Reports",
    ],
   },
    { name: 'PLUS', price: 9, features: [
      "5 Users",
      "50GB Storage",
      "Unlimited Public Projects",
      "Community Access",
      "Unlimited Private Projects",
      "Dedicated Phone Support",
      "Free Subdomain",
      "Monthly Status Reports",
    ],
  },
    { name: 'PRO', price: 49, features:[
      "Unlimited User",
      "150GB Storage",
      "Unlimited Public Projects",
      "Community Access",
      "Unlimited Private Projects",
      "Dedicated Phone Support",
      "Unlimited Free Subdomains",
      "Monthly Status Reports",
    ],
  },
  ];
  return (
    <div>
      {plans.map((plan) =>(
        <Card name={plan.name} price={plan.price} features={plan.features} />
      ))}
    </div>
  )
}

function Card(props){
  return (
  <div className="card">
    <p className="plan-name">{props.name}</p>
    <p className="price">${props.price}<span className="price-duration">/month</span></p>
    <ul className="features">
      {props.features.map((feature)=>(
        <li>{feature}</li>
        ))}
    </ul>
    <button className="buy">BUY</button>
  </div>
  );
}