import { DATE_FORMATS } from "@/core/data";
import type { DateFormat } from "@/core/types";
import { AnimatePresence, motion } from "framer-motion";

interface ListingProps {
  currentCategory: string;
  setFormat: (date: DateFormat | null) => void;
}

export const Listing: React.FC<ListingProps> = ({ currentCategory, setFormat }) => {
  return (
    <motion.div layout className="listing-container">
      {DATE_FORMATS.map(
        (date, i) =>
          (currentCategory === date.type || currentCategory === "all") && (
            <AnimatePresence key={i}>
              <motion.div layout>
                <button onClick={() => setFormat(date)} className="format-box">
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
