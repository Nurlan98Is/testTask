import { useState, useEffect } from "react";
import styles from "./Products.module.css";
import { LikeIcon } from "../components/LikeIcon";
import { DeleteIcon } from "../components/DeleteIcon";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  removeProducts,
  toggleProducts,
} from "../features/ProductsSlice";
import type { RootState } from "../store/store";
import type { AppDispatch } from "../store/store";
import { Link } from "react-router";
import { useNavigate } from "react-router";

export const Products = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [showFavorites, setShowFavorites] = useState(false);
  const navigate = useNavigate();

  // функция перехода на страницу создания блюда
  const handleCreateMeal = () => {
    navigate("/products/create");
  };

  // useEffect который вызывает функцию fetchProducts которая в свою очередь делает запрос на сервер и передает данные в стор
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  // получения любимых блюд из стора
  const favoriteMeal = useSelector(
    (state: RootState) => state.products.favoriteProducts
  );

  // получение всех блюд из стора
  const products = useSelector(
    (state: RootState) => state.products.allproducts
  );

  // отображение всех блюд или любимых блюд
  const displayedProducts = showFavorites ? favoriteMeal : products;

  return (
    <div className={styles.products_Container}>
      {/*кнопка перехода на страницу создания блюда*/}
      <button className={styles.btn_create_meal} onClick={handleCreateMeal}>
        Create Meal
      </button>

      {/*  Кнопка переключения */}
      <button
        onClick={() => setShowFavorites(!showFavorites)}
        className={styles.btnFilter}
      >
        {showFavorites ? "All Meal" : "Favorites"}
      </button>

      {/*  Рендерим отфильтрованные блюда */}
      {displayedProducts.map((item) => {
        const isFavorite = favoriteMeal.some(
          (fav) => fav.idMeal === item.idMeal
        );

        return (
          <Link to={`/products/${item.idMeal}`} className={styles.link_card}>
            <div className={styles.card_container} key={item.idMeal}>
              <img src={item.strMealThumb} alt="" className={styles.img} />
              <p className={styles.meal_name}>{item.strMeal}</p>

              <div className={styles.btn_card_container}>
                <LikeIcon
                  width={"30px"}
                  height={"30px"}
                  isLiked={isFavorite}
                  onClick={(e) => {
                    e.preventDefault(),
                      e.stopPropagation(),
                      dispatch(toggleProducts(item.idMeal));
                  }}
                />

                <DeleteIcon
                  width={"40px"}
                  height={"40px"}
                  onClick={(e) => {
                    e.preventDefault(),
                      e.stopPropagation(),
                      dispatch(removeProducts(item.idMeal));
                  }}
                />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
