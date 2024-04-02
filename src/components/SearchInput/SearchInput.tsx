import styles from "./SearchInput.module.css";
import searchIconInput from "@assets/images/searchIconInput.svg";

const SearchInput: React.FC = () => {
  return (
    <div className={styles.searchInput}>
      <img src={searchIconInput} alt="Поиск" />
      <input placeholder="Место, адрес..." />
    </div>
  );
};

export default SearchInput;
