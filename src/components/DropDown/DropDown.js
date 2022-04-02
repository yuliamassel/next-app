import { useState } from "react";
import styles from "../../styles/auth.module.css";
import * as BsIcons from "react-icons/md";

const DropDown = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);
  const options = ["Economy", "Politics", "Country", "Healty", "Beauty"];

  return (
    <div className={styles["dropdown"]}>
      <div className={`d-flex flex-row justify-content-between mx-4 my-3 ${styles["txt-wa"]}`}>
        {selected ? selected: "Article Category"}
      <BsIcons.MdArrowDropDown
        size={30}
        className={` ${styles["dropdown-btn"]}`}
        onClick={(e) => setIsActive(!isActive)}
      />
      </div>
      {isActive && (
        <div className={styles["dropdown-content"]}>
          {options.map((option) => (
            // eslint-disable-next-line react/jsx-key
            <div
              onClick={(e) => {
                setSelected(option)
                setIsActive(false)
              }} 
              className={` ${styles["dropdown-item"]}`}
            >
              {option}
            </div>
      ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
