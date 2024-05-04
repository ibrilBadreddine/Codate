import { useState } from "react";
import Filter from "./Filter";
import Listing from "./Listing";

export default function Formats() {
  const [selectedCategory, setCategory] = useState<string>("all");

  return (
    <section className='formats-container'>
      <Filter 
        currentCategory={selectedCategory}
        setCategory={(categoryId: string) => setCategory(categoryId)}
      />
      <Listing 
        currentCategory={selectedCategory}
      />
    </section>
  )
}
