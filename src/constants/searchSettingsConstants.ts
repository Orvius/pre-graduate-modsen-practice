import natureIcon from "@assets/images/nature.svg";
import cultureIcon from "@assets/images/culture.svg";
import historyIcon from "@assets/images/history.svg";
import religionIcon from "@assets/images/religion.svg";
import architectureIcon from "@assets/images/architecture.svg";
import industrialIcon from "@assets/images/industrial.svg";
import otherIcon from "@assets/images/other.svg";
import entertainmentIcon from "@assets/images/entertainment.svg";
import sportIcon from "@assets/images/sport.svg";
import adultIcon from "@assets/images/18+.svg";
import shopIcon from "@assets/images/shop.svg";
import foodIcon from "@assets/images/food.svg";
import coffeeIcon from "@assets/images/coffee.svg";
import bankIcon from "@assets/images/bank.svg";
import hotelIcon from "@assets/images/hotels.svg";

const PLACES = [
  { label: "Природа", imgSrc: natureIcon, placeName: "nature" },
  { label: "Культура", imgSrc: cultureIcon, placeName: "culture" },
  { label: "История", imgSrc: historyIcon, placeName: "history" },
  { label: "Религия", imgSrc: religionIcon, placeName: "religion" },
  {
    label: "Архитектура",
    imgSrc: architectureIcon,
    placeName: "architecture",
  },
  {
    label: "Индустриальные объекты",
    imgSrc: industrialIcon,
    placeName: "industrial",
  },
  {
    label: "Развлечения",
    imgSrc: entertainmentIcon,
    placeName: "entertainment",
  },
  { label: "Спорт", imgSrc: sportIcon, placeName: "sport" },
  { label: "Для совершеннолетних", imgSrc: adultIcon, placeName: "adult" },
  { label: "Магазины", imgSrc: shopIcon, placeName: "shop" },
  { label: "Еда", imgSrc: foodIcon, placeName: "food" },
  { label: "Кафе", imgSrc: coffeeIcon, placeName: "cafes" },
  { label: "Банки", imgSrc: bankIcon, placeName: "banks" },
  { label: "Отели", imgSrc: hotelIcon, placeName: "hotel" },
  { label: "Разное", imgSrc: otherIcon, placeName: "other" },
];

export { PLACES };
