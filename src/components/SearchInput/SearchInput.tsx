import { useState } from "react";

import styles from "./SearchInput.module.css";
import { SearchIcon } from "@constants/images";

const SearchInput: React.FC = () => {
  const [query, setQuery] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <div className={styles.searchInput}>
      <SearchIcon className={styles.searchInputImg}/>
      <input
        placeholder="Место, адрес..."
        value={query}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchInput;
