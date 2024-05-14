import { useStateContext } from "@/core/context/useStateContext";
import { CATEGORIES } from "@/core/data";

export const Filter = () => {
  const { selectedCategory, setCategory, setFormat } = useStateContext();

  const handleCategory = (categoryId: string) => {
    // Set category
    setCategory(categoryId);
    // Close preview
    setFormat(null);
  };
  return (
    <div className="filter-container">
      <div className="categories-container">
        {CATEGORIES.map((category) => (
          <button
            onClick={() => handleCategory(category.id)}
            className={
              category.id === selectedCategory
                ? "category-box active-category"
                : "category-box"
            }
            key={category.id}
          >
            <span className="material-symbols-outlined">done</span>
            <p>{category.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filter;
