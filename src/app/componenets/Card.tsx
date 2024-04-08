import React from "react";
import { Card } from "@mui/material";

import styles from "./Cardcss.module.css";

// Define a type for the product prop
type Product = {
  image: string;
  name: string;
  price: number;
  offer: number;
};

// Use the defined type for the product prop
const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <Card className={styles.card}>
      <img src={product.image} alt="" />

      <div className={styles.data}>
        <h3 className={styles.product_name}>{product.name}</h3>

        <div className={styles.price}>
          <div className={styles.display_price}>
            &#8377; {(product.price * (100 - product.offer)) / 100}
          </div>

          <s className={styles.original_price}>&#8377; {product.price}</s>
        </div>

        <div className={styles.offer}>{product.offer}% off</div>
      </div>
    </Card>
  );
};

export default ProductCard;
