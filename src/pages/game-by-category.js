import { useState } from "react";
import styles from "../styles/GameByCategory.module.css";

const categories = [
  {
    name: "Medicina Interna",
    subcategories: [
      { name: "Gastroenterologia 1" },
      { name: "Nefrologi 1" },
      { name: "Dermatologia 1" },
    ],
  },
  {
    name: "Medicina Interna 2",
    subcategories: [
      { name: "Gastroenterologia 2" },
      { name: "Nefrologia 2" },
      { name: "Dermatologia 2" },
    ],
  },
  {
    name: "Medicina Interna 3",
    subcategories: [
      { name: "Gastroenterologia 3" },
      { name: "Nefrologia 3" },
      { name: "Dermatologia 3" },
    ],
  },
];

const GameByCategory = () => {
  return (
    <section className={styles.gameByCategory}>
      <div className={styles.categories}>
        {categories.map((item) => (
          <Category key={item.name} item={item} />
        ))}
      </div>
    </section>
  );
};

const Category = ({ item }) => {
  const [areSubcategoriesVisibles, setAreSubcategoriesVisibles] =
    useState(false);

  const toggleSubcategoriesVisibility = () =>
    setAreSubcategoriesVisibles(!areSubcategoriesVisibles);

  return (
    <div className={styles.category} onClick={toggleSubcategoriesVisibility}>
      <span>{item.name}</span>
      {areSubcategoriesVisibles && (
        <div className="subcategories">
          {item.subcategories.map((item) => (
            <div key={item.name} className="subcategory">
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GameByCategory;
