import React from "react";

// Importing images directly
import box1Image from "./assets/box1_image.jpg";
import box2Image from "./assets/box2_image.jpg";
import box3Image from "./assets/box3_image.jpg";
import box4Image from "./assets/box4_image.jpg";
import box5Image from "./assets/box5_image.jpg";
import box6Image from "./assets/box6_image.jpg";
import box7Image from "./assets/box7_image.jpg";
import box8Image from "./assets/box8_image.jpg";

const shopItems = [
  { title: "Clothes", image: box1Image },
  { title: "Health & Personal Care", image: box2Image },
  { title: "Furniture", image: box3Image },
  { title: "Electronics", image: box4Image },
  { title: "Beauty pics", image: box5Image },
  { title: "Pet Care", image: box6Image },
  { title: "New Arrival in Toys", image: box7Image },
  { title: "Discover Fashion Trends", image: box8Image },
];

const ShopSection = () => {
  return (
    <div className="shop-section">
      {shopItems.map((item, index) => (
        <div className="box" key={index}>
          <div className="shop-content">
            <h2>{item.title}</h2>
            <div
              className="box-img"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>
            <p>See more</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopSection;
