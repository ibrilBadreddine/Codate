import { useStateContext } from "@/core/context/useStateContext";
import { DATE_FORMATS } from "@/core/data";
import { AnimatePresence, motion } from "framer-motion";

export const Listing = () => {
  const { selectedCategory, selectedFormat, setFormat } = useStateContext();

  return (
    <div className="listing-container">
      <motion.div layout className="listing-box">
        {DATE_FORMATS.map(
          (date, i) =>
            (((selectedCategory === date.type || selectedCategory === "all") &&
              !selectedFormat?.format) ||
              date.format === selectedFormat?.format) && (
              <AnimatePresence key={i}>
                <motion.div layout>
                  <button
                    onClick={() => setFormat(date)}
                    className={
                      date.format === selectedFormat?.format
                        ? "format-box active-format"
                        : "format-box"
                    }
                  >
                    <div className="icon">
                      <span className="material-symbols-outlined">
                        calendar_today
                      </span>
                    </div>
                    <div className="info">
                      <p>{date.preview}</p>
                      <span>{date.format}</span>
                    </div>
                  </button>
                </motion.div>
              </AnimatePresence>
            )
        )}
      </motion.div>
      <div
        className={
          selectedFormat ? "format-details active-details" : "format-details"
        }
      >
        <div className="info details">
          <h3>
            <span className="material-symbols-outlined">page_info</span>
            Details
          </h3>
          <article>
            <p>{selectedFormat?.description}</p>
          </article>
        </div>
        <div className="info usage">
          <h3>
            <span className="material-symbols-outlined">
              energy_savings_leaf
            </span>
            Usage
          </h3>
          <ul>
            {selectedFormat?.examples.map((example, i) => (
              <li key={i}>{example}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Listing;
