import styles from "./FavouriteInfoBar.module.css";
import SearchInput from "@components/SearchInput/SearchInput";

const FavouriteInfoBar: React.FC = () => {
  return (
    <div className={styles.favouriteInfoBarContainer}>
      <SearchInput />
      <div>Избранное:</div>
    </div>
  );
};

export default FavouriteInfoBar;
