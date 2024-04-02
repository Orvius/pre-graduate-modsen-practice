import styles from "./SearchInput.module.css";
import { searchIconInput } from '@constants/images';

const SearchInput: React.FC = () => {
  return (
    <div className={styles.searchInput}>
      <img src={searchIconInput} alt="Поиск" />
      <input placeholder="Место, адрес..." />
    </div>
  );
};

export default SearchInput;
