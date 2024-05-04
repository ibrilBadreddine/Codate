import { DATE_FORMATS } from "@/core/data";
import { AnimatePresence, motion } from "framer-motion";

interface ListingProps {
  currentCategory: string;
}

export const Listing: React.FC<ListingProps> = ({ currentCategory }) => {
  return (
    <motion.div layout className="listing-container">
      {DATE_FORMATS.map(
        (date) =>
          (currentCategory === date.type || currentCategory === "all") && (
            <AnimatePresence>
              <motion.div layout>
                <button className="format-box">
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
  );
};

export default Listing;
