import { CATEGORIES } from "@/core/data";

interface FilterProps {
  currentCategory: string,
  setCategory: (categoryId: string) => void,
  setFormat: (date: null) => void;
}

export const Filter: React.FC<FilterProps> = ({currentCategory, setCategory, setFormat}) => {

  const handleCategory = (categoryId: string) => {
    // Set category
    setCategory(categoryId);
    // Close preview
    setFormat(null);
  }

  return (
    <div className="filter-container">
      <div className="categories-container">
        {CATEGORIES.map((category) => (
          <button
            onClick={() => handleCategory(category.id)}
            className={
              category.id === currentCategory
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
}

export default Filter;
