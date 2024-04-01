import styles from "./SearchInfoBar.module.css";
import SearchSettings from "@components/SearchSettings/SearchSettings";

import searchIconInput from "@assets/images/searchIconInput.svg";
import searchBtnOff from "@assets/images/searchBtnOff.svg";
import searchBtnOn from "@assets/images/searchBtnOn.svg";

interface SearchInfoBarProps {
  isOpen: boolean;
}

const SearchInfoBar: React.FC<SearchInfoBarProps> = ({ isOpen }) => {
  return (
    <>
      <div className={styles.searchInfoBarContainer}>
        <div className={styles.searchInfoBarInputs}>
          <div className={styles.searchInput}>
            <img src={searchIconInput} alt="Поиск" />
            <input placeholder="Место, адрес..." />
          </div>
          Искать:
          <SearchSettings />В радиусе:
          <div className={styles.searchInfoBarRadius}>
            <input className={styles.radiusInput} placeholder="1" />
            км
          </div>
        </div>
        <button className={styles.searchButton}>
          <img src={searchBtnOff} alt="Начать поиск" />
        </button>
      </div>
    </>
  );
};

export default SearchInfoBar;
