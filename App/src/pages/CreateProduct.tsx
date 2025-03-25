import { useForm } from "react-hook-form";
import styles from "./CreateProduct.module.css";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { addProduct } from "../features/ProductsSlice";
import { ProductFormData } from "../interface";

export const CreateProducts = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormData>();

  const onSubmit = (data: ProductFormData) => {
    dispatch(addProduct(data));
    console.log("Создано блюдо:", data);
    alert("Продукт успешно создан!");
  };

  return (
    <div className={styles.create_product_container}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.create_form}>
        <h1>Create Product</h1>

        <label>Name meal:</label>
        <input
          type="text"
          {...register("strMeal", { required: "Enter the name of the dish!" })}
          className={errors.strMeal ? styles.input_error : styles.input}
        />
        {errors.strMeal && (
          <p className={styles.error}>{errors.strMeal.message}</p>
        )}

        <label>Country meal:</label>
        <input
          type="text"
          {...register("country", {
            required: "Enter the country of origin!",
          })}
          className={errors.country ? styles.input_error : styles.input}
        />
        {errors.country && (
          <p className={styles.error}>{errors.country.message}</p>
        )}

        <label>Category meal:</label>
        <input
          type="text"
          {...register("category", { required: "Enter the category!" })}
          className={errors.category ? styles.input_error : styles.input}
        />
        {errors.category && (
          <p className={styles.error}>{errors.category.message}</p>
        )}

        <label>Ingredients:</label>
        <input
          type="text"
          {...register("ingredients", { required: "Add ingredients!" })}
          className={errors.ingredients ? styles.input_error : styles.input}
        />
        {errors.ingredients && (
          <p className={styles.error}>{errors.ingredients.message}</p>
        )}

        <label>Instructions:</label>
        <textarea
          {...register("instructions", {
            required: "Enter the cooking instructions!",
          })}
          className={errors.instructions ? styles.input_error : styles.textarea}
        ></textarea>
        {errors.instructions && (
          <p className={styles.error}>{errors.instructions.message}</p>
        )}

        <button type="submit" className={styles.btn_form_submit}>
          Create
        </button>
      </form>
    </div>
  );
};
