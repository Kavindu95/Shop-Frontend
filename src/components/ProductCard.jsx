import React from "react";
import { Avatar, Card } from "antd";
const { Meta } = Card;

const ProductCard = (props) => {
  const { productImage, name, price } = props;

  return (
    <Card
      style={{ width: 300 }}
      cover={
        <img
          alt="example"
          src={`http://localhost:5000/uploads/${productImage}`}
          height="300px"
        />
      }
    >
      <Meta
        avatar={
          <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
        }
        title={name}
        description={price}
      />
    </Card>
  );
};

export default ProductCard;
