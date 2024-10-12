import React from "react";
import Styles from "./card.module.css";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";

const card = ({ product }) => {
  return (
    <div className={Styles.boxCard}>
      <div className={Styles.imgDiv}>
        <Image
          src={product.image}
          alt={product.title}
          className={Styles.productImg}
          // width={500}
          // height={600}
          // layout="responsive"
          layout="fill"
          objectFit="contain"
          priority
          // sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div>
        <h3 className={Styles.title}>{product.title}</h3>
        <div className={Styles.boxInfo}>
          <p>$ {product.price}</p>
          <p>Ratings: {product.rating.rate}</p>
          <CiHeart />
        </div>
      </div>
    </div>
  );
};

export default card;
