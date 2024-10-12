"use client";
import React, { useState } from "react";
import Styles from "./filter.module.css";

const filter = ({ onFilterChange }) => {
  const [category, setCategory] = useState([]);

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    let categorySelect = [...category];
    if (checked) {
      categorySelect.push(value);
    } else {
      categorySelect = categorySelect.filter((cat) => cat !== value);
    }
    setCategory(categorySelect);
    onFilterChange(categorySelect);
  };

  const clearFilter = () => {
    setCategory([]);
    onFilterChange([]);
  };

  return (
    <div className={Styles.filterContainer}>
      <h2 className={Styles.heading}>Filters</h2>
      <div>
        <label>
          <input
            type="checkbox"
            value="electronics"
            checked={category.includes("electronics")}
            onChange={handleCategoryChange}
          />
          Electronics
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            value="jewelery"
            checked={category.includes("jewelery")}
            onChange={handleCategoryChange}
          />
          Jewelery
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            value="men's clothing"
            checked={category.includes("men's clothing")}
            onChange={handleCategoryChange}
          />
          Men's Clothing
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            value="women's clothing"
            checked={category.includes("women's clothing")}
            onChange={handleCategoryChange}
          />
          Women's Clothing
        </label>
      </div>
      <div>
        <button onClick={clearFilter} className={Styles.ClearFilterBtn}>
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default filter;
