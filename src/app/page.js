// "use client";
import React from "react";
import Styles from "@/app/products/products.module.css";
import Card from "@/components/card/card";
import ProductsGrid from "@/components/productsGrid/productsGrid";
// import Filter from "@/components/filter/filter";
// import { useSearchParams } from "next/navigation";

export async function fetchProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
    throw new Error("Failed to fetch the Products");
  }
  const products = await response.json();

  return products;
}

async function page() {
  const products = await fetchProducts();

  return (
    <div>
      <div className={Styles.heroHeading}>
        <h1>Discover our products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>
      <ProductsGrid products={products} />
    </div>
  );
}

export default page;
