import Filter from "./Filter";
import Listing from "./Listing";
import Preview from "./Preview";

export const Formats = () => { 
  return (
    <section className='formats-container'>
      <Filter />
      <Listing />
      <Preview />
    </section>
  )
}

export default Formats;
