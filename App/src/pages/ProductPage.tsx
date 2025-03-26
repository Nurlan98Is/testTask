import { useParams } from "react-router";
import { useState, useEffect } from "react";
import styles from "./ProductPage.module.css";
import { ProductDetails } from "../interface";
import backIcon from "../assets/backIcon.png";
import { useNavigate } from "react-router";

export const ProductPage = () => {
  const [meal, setMeal] = useState<ProductDetails[]>([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((res) => setMeal(res.meals));
  }, [id]);

  return (
    <div>
      <button
        className={styles.btn_backPage}
        onClick={() => navigate("/products")}
      >
        <img
          src={backIcon}
          alt="back_btn"
          style={{ width: "50px", height: "50px" }}
        />
      </button>
      {meal.map((item) => {
        return (
          <div className={styles.product_container}>
            <img
              src={item.strMealThumb}
              alt="meal"
              className={styles.img_meal}
            />
            <p className={styles.name_meal}>
              <strong>Name:</strong>
              {item.strMeal}
            </p>
            <p className={styles.country_meal}>
              <strong>Country:</strong> {item.strArea}
            </p>
            <p className={styles.category_meal}>
              {" "}
              <strong>Category:</strong> {item.strCategory}
            </p>
            <p className={styles.ingridients_meal}>
              <strong>Ingridients:</strong>
              <span style={{ display: "flex", flexDirection: "column" }}>
                {item.strIngredient1}
                {item.strIngredient2} {item.strIngredient3}
                {item.strIngredient4} {item.strIngredient5}
                {item.strIngredient6} {item.strIngredient7}
                {item.strIngredient8} {item.strIngredient9}
                {item.strIngredient10} {item.strIngredient1}
                {item.strIngredient11} {item.strIngredient12}
                {item.strIngredient13} {item.strIngredient14}
                {item.strIngredient15} {item.strIngredient16}
                {item.strIngredient17} {item.strIngredient18}
              </span>
            </p>
            <p className={styles.instruction}>
              <strong>Instruction:</strong> {item.strInstructions}
            </p>
          </div>
        );
      })}
    </div>
  );
};
