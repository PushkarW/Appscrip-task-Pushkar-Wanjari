"use client";
import React, { useState } from "react";
import Styles from "./productsGrid.module.css";
import Card from "@/components/card/card";
import Filter from "@/components/filter/filter";

const productsGrid = ({ products }) => {
  const [filterProducts, setFilterProducts] = useState(products);
  const [showFilter, setShowFilter] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    const text = e.target.value;
    setSearchText(text);

    const searchFiltered = products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchText.toLowerCase()) ||
        product.description.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilterProducts(searchFiltered);
  };

  const handleFilterChange = (category) => {
    if (category.length > 0) {
      const filtered = products.filter((product) =>
        category.includes(product.category)
      );
      setFilterProducts(filtered);
    } else {
      setFilterProducts(products);
    }
  };

  const handleSortChange = (sortOption) => {
    let sortedProducts = [...filterProducts];

    switch (sortOption) {
      case "Newest First":
        sortedProducts.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case "Popular":
        sortedProducts.sort((a, b) => b.rating.rate - a.rating.rate);
        break;

      case "Price: High to Low":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case "Price: Low to High":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      default:
        break;
    }
    setFilterProducts(sortedProducts);
  };

  const toggleFilter = () => {
    setShowFilter((prev) => !prev);
  };
  return (
    <div className={Styles.gridContainer}>
      <div className={Styles.filterBar}>
        <div className={Styles.itemCount}>
          <p>{filterProducts.length} Items</p>
        </div>
        <div className={Styles.filterToggle}>
          <button onClick={toggleFilter} className={Styles.filterBtn}>
            {showFilter ? "Hide Filter" : "Show Filter"}
          </button>
        </div>
        <div className={Styles.searchBox}>
          <input
            type="text"
            placeholder="Search Products..."
            value={searchText}
            onChange={handleSearch}
          />
        </div>
        <div className={Styles.sortDropdown}>
          <select onChange={(e) => handleSortChange(e.target.value)}>
            <option value="">Recommended</option>
            <option value="Newest First">Newest First</option>
            <option value="Popular">Popular</option>
            <option value="Price: High to Low">Price: High to Low</option>
            <option value="Price: Low to High">Price: Low to High</option>
          </select>
        </div>
      </div>
      <div className={Styles.cardGrid}>
        {showFilter && (
          <div className={Styles.filterCol}>
            <Filter onFilterChange={handleFilterChange} />
          </div>
        )}
      </div>
      <div className={Styles.productGrid}>
        {filterProducts.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default productsGrid;
