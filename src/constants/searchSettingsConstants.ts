import natural from "@assets/images/nature.svg";
import cultural from "@assets/images/culture.svg";
import historic from "@assets/images/history.svg";
import religion from "@assets/images/religion.svg";
import architecture from "@assets/images/architecture.svg";
import industrial_facilities from "@assets/images/industrial.svg";
import other from "@assets/images/other.svg";
import amusements from "@assets/images/entertainment.svg";
import sport from "@assets/images/sport.svg";
import adult from "@assets/images/18+.svg";
import shops from "@assets/images/shop.svg";
import foods from "@assets/images/food.svg";
import banks from "@assets/images/bank.svg";
import accomodations from "@assets/images/hotels.svg";

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
