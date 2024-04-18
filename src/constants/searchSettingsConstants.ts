import natural from "@assets/images/searchIcons/nature.svg";
import cultural from "@assets/images/searchIcons/culture.svg";
import historic from "@assets/images/searchIcons/history.svg";
import religion from "@assets/images/searchIcons/religion.svg";
import architecture from "@assets/images/searchIcons/architecture.svg";
import industrial_facilities from "@assets/images/searchIcons/industrial.svg";
import other from "@assets/images/searchIcons/other.svg";
import amusements from "@assets/images/searchIcons/entertainment.svg";
import sport from "@assets/images/searchIcons/sport.svg";
import adult from "@assets/images/searchIcons/18+.svg";
import shops from "@assets/images/searchIcons/shop.svg";
import foods from "@assets/images/searchIcons/food.svg";
import banks from "@assets/images/searchIcons/bank.svg";
import accomodations from "@assets/images/searchIcons/hotels.svg";

const PLACES = [
  { label: "Природа", imgSrc: natural, kind: "natural" },
  { label: "Культура", imgSrc: cultural, kind: "cultural" },
  { label: "История", imgSrc: historic, kind: "historic" },
  { label: "Религия", imgSrc: religion, kind: "religion" },
  {
    label: "Архитектура",
    imgSrc: architecture,
    kind: "architecture",
  },
  {
    label: "Индустриальные объекты",
    imgSrc: industrial_facilities,
    kind: "industrial_facilities",
  },
  {
    label: "Развлечения",
    imgSrc: amusements,
    kind: "amusements",
  },
  { label: "Спорт", imgSrc: sport, kind: "sport" },
  { label: "Для взрослых", imgSrc: adult, kind: "adult" },
  { label: "Магазины", imgSrc: shops, kind: "shops" },
  { label: "Еда", imgSrc: foods, kind: "foods" },
  { label: "Банки", imgSrc: banks, kind: "banks" },
  { label: "Проживание", imgSrc: accomodations, kind: "accomodations" },
  { label: "Разное", imgSrc: other, kind: "other" },
];

export { PLACES };
