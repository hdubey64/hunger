import ItemCard from "src/components/ItemCard";
import burger from "src/Assets/Images/PopulerItems/Cheese_Burger.png";
import sandwich from "src/Assets/Images/PopulerItems/Crispy_Sandwitch.png";
import dancake from "src/Assets/Images/PopulerItems/DanCake.png";
import soup from "src/Assets/Images/PopulerItems/Thai _Soup.png";
import toffe from "src/Assets/Images/PopulerItems/Toffe's_cake.png";
import "./style.css";
const itemData = [
   {
      img: {
         png: burger,
      },
      name: "Cheese Burger",
      restaurentName: "Burger Arena",
      price: "$3.88",
   },
   {
      img: {
         png: toffe,
      },
      name: "Toffe's cake",
      restaurentName: "Top Sticks",
      price: "$3.88",
   },

   {
      img: {
         png: dancake,
      },
      name: "Dancake",
      restaurentName: "Cake World",
      price: "$1.99",
   },
   {
      img: {
         png: sandwich,
      },
      name: "Crispy Sandwitch",
      restaurentName: "FastFood Dine",
      price: "$3.00",
   },
   {
      img: {
         png: soup,
      },
      name: "Thai Soup",
      restaurentName: "Foody Man",
      price: "$2.79",
   },
];

const PopularItemSection = () => {
   return (
      <div className="container">
         <div className="headTag text-center">
            <h1>Popular Items</h1>
         </div>
         <div className="items">
            {itemData.map((item) => (
               <ItemCard
                  key={item.img}
                  img={item.img.png}
                  name={item.name}
                  restaurentName={item.restaurentName}
                  price={item.price}
               />
            ))}
         </div>
      </div>
   );
};

export default PopularItemSection;
