import Ann2011Img from "../../../public/images/NewArrival/Ann2011.jpg";
import PBImg from "../../../public/images/NewArrival/PB.png";
import Atachment00sImg from "../../../public/images/NewArrival/Atachment00s.png";
import JPG90sImg from "../../../public/images/NewArrival/JPG90s.png";

//New Arrival
export interface NewArrivalProduct {
  id: number;
  src: string;
  alt: string;
}

export const NewArrivalProducts: NewArrivalProduct[] = [
  { id: 1, src: Ann2011Img, alt: "黑色皮革分層夾克" },
  { id: 2, src: PBImg, alt: "黑色騎士背心" },
  { id: 3, src: Atachment00sImg, alt: "豹紋皮革夾克" },
  { id: 4, src: JPG90sImg, alt: "玉虫紅風衣" },
];






//All Product

export interface AllProduct {
  id: number;
  name: string;
  alt: string;
  category: "Shirt" | "Jacket" | "Bottom" | "Coat" | "Accessories"; // 假設的分類
  price: number;
  Band: string;
  size: string;
  imgUrl: string[];
  releasedAt: string;
  quantity: number;
  shoulder?: number;
  pit?: number;
  length?: number;
  sleeve?: number;
  description?:string;
}

export const AllProducts: AllProduct[] = [
  {
    id: 1,
    name: "風衣外套",
    alt: "風衣外套",
    category: "Coat",
    price: 12500,
    Band: "Jean Paul Gaultier",
    size: "S",
    imgUrl: [
      "/images/Product/JPG-1.jpg",
      "/images/Product/JPG-2.jpg",
      "/images/Product/JPG-3.jpg",
      "/images/Product/JPG-4.jpg",
    ],
    releasedAt: "2025-05-15T10:00:00Z",
    quantity: 1,
    shoulder: 41,
    pit: 49,
    length: 110,
    sleeve: 62,
  },
  {
    id: 2,
    name: "西裝外套",
    alt: "西裝外套",
    category: "Coat",
    price: 9000,
    Band: "CdG HOMME PLUS",
    size: "M",
    imgUrl: [
      "/images/Product/CDG-HOMME-PLUS-1.jpg",
      "/images/Product/CDG-HOMME-PLUS-2.jpg",
      "/images/Product/CDG-HOMME-PLUS-3.jpg",
      "/images/Product/CDG-HOMME-PLUS-4.jpg",
    ],
    releasedAt: "2025-03-20T10:00:00",
    quantity: 1,
    shoulder: 44,
    pit: 47,
    length: 60,
    sleeve: 30,
  },
  {
    id: 3,
    name: "西裝外套",
    alt: "西裝外套",
    category: "Coat",
    price: 5000,
    Band: "SEYTO",
    size: "M",
    imgUrl: [
      "/images/Product/SEYTO-1.jpg",
      "/images/Product/SEYTO-2.jpg",
      "/images/Product/SEYTO-3.jpg",
      "/images/Product/SEYTO-4.jpg",
    ],
    releasedAt: "2024-12-01T10:00:00Z",
    quantity: 1,
    shoulder: 40,
    pit: 47,
    length: 60,
    sleeve: 30,
  },
  {
    id: 4,
    name: "長袖襯衫",
    alt: "長袖襯衫",
    category: "Shirt",
    price: 3000,
    Band: "SEYTO",
    size: "M",
    imgUrl: [
      "/images/Product/SEYTO-1-1.jpg",
      "/images/Product/SEYTO-1-2.jpg",
      "/images/Product/SEYTO-1-3.jpg",
      "/images/Product/SEYTO-1-4.jpg",
    ],
    releasedAt: "2025-01-25T10:00:00Z",
    quantity: 1,
    shoulder: 40,
    pit: 55,
    length: 60,
    sleeve: 30,
  },
  {
    id: 5,
    name: "長袖襯衫",
    alt: "長袖襯衫",
    category: "Shirt",
    price: 3000,
    Band: "Lad Musician",
    size: "M",
    imgUrl: [
      "/images/Product/LAD-shirt-1.jpg",
      "/images/Product/LAD-shirt-2.jpg",
      "/images/Product/LAD-shirt-3.jpg",
      "/images/Product/LAD-shirt-4.jpg",
    ],
    releasedAt: "2025-04-05T10:00:00Z",
    quantity: 1,
    shoulder: 42,
    pit: 48,
    length: 72,
    sleeve: 61,
  },
  {
    id: 6,
    name: "西裝外套",
    alt: "西裝外套",
    category: "Coat",
    price: 15000,
    Band: "Lad Musician",
    size: "M",
    imgUrl: [
      "/images/Product/Ann-1.jpg",
      "/images/Product/Ann-2.jpg",
      "/images/Product/Ann-3.jpg",
      "/images/Product/Ann-04.jpg",
    ],
    releasedAt: "2025-05-01T10:00:00Z",
    quantity: 1,
    shoulder: 46,
    pit: 53,
    length: 76,
    sleeve: 65,
  },
  {
    id: 7,
    name: "夾克外套",
    alt: "夾克外套",
    category: "Jacket",
    price: 5000,
    Band: "Marithé François Girbaud",
    size: "M",
    imgUrl: [
      "/images/Product/M+FG-jacket-1.jpg",
      "/images/Product/M+FG-jacket-2.jpg",
      "/images/Product/M+FG-jacket-3.jpg",
      "/images/Product/M+FG-jacket-4.jpg",
    ],
    releasedAt: "2024-09-01T10:00:00Z",
    quantity: 1,
    shoulder: 48,
    pit: 56,
    length: 65,
    sleeve: 60,
  },
  {
    id: 8,
    name: "夾克外套",
    alt: "夾克外套",
    category: "Jacket",
    price: 6000,
    Band: "Marithé François Girbaud",
    size: "M",
    imgUrl: [
      "/images/Product/M+FG-coat-1.jpg",
      "/images/Product/M+FG-coat-2.jpg",
      "/images/Product/M+FG-coat-3.jpg",
      "/images/Product/M+FG-coat-4.jpg",
    ],
    releasedAt: "2024-11-11T10:00:00Z",
    quantity: 1,
    shoulder: 40,
    pit: 46,
    length: 60,
    sleeve: 58,
  },
  {
    id: 9,
    name: "皮衣外套",
    alt: "皮衣外套",
    category: "Coat",
    price: 6000,
    Band: "ATTACHMENT",
    size: "M",
    imgUrl: [
      "/images/Product/AT-1.jpg",
      "/images/Product/AT-2.jpg",
      "/images/Product/AT-3.jpg",
      "/images/Product/AT-4.jpg",
    ],
    releasedAt: "2025-02-01T10:00:00Z",
    quantity: 1,
    shoulder: 44,
    pit: 52,
    length: 70,
    sleeve: 63,
  },
  {
    id: 10,
    name: "棒球外套",
    alt: "棒球外套",
    category: "Coat",
    price: 5000,
    Band: "HYEIN SEO",
    size: "M",
    imgUrl: [
      "/images/Product/HS-1.jpg",
      "/images/Product/HS-2.jpg",
      "/images/Product/HS-3.jpg",
      "/images/Product/HS-4.jpg",
    ],
    releasedAt: "2024-07-20T10:00:00Z",
    quantity: 1,
    shoulder: 47,
    pit: 54,
    length: 68,
    sleeve: 62,
  },
  {
    id: 11,
    name: "西裝外套",
    alt: "西裝外套",
    category: "Coat",
    price: 8000,
    Band: "Lad Musician",
    size: "L",
    imgUrl: [
      "/images/Product/LAD-suit-1.jpg",
      "/images/Product/LAD-suit-2.jpg",
      "/images/Product/LAD-suit-3.jpg",
      "/images/Product/LAD-suit-4.jpg",
    ],
    releasedAt: "2024-08-01T10:00:00Z",
    quantity: 1,
    shoulder: 45,
    pit: 51,
    length: 75,
    sleeve: 65,
  },
  {
    id: 12,
    name: "皮背心",
    alt: "皮背心",
    category: "Coat",
    price: 9000,
    Band: "Pierre Balmain",
    size: "L",
    imgUrl: [
      "/images/Product/PB-1.jpg",
      "/images/Product/PB-2.jpg",
      "/images/Product/PB-3.jpg",
      "/images/Product/PB-4.jpg",
    ],
    releasedAt: "2025-04-20T10:00:00Z", 
    quantity: 1,
    shoulder: 38,
    pit: 44,
    length: 60,
  },
  {
    id: 13,
    name: "長褲",
    alt: "長褲",
    category: "Bottom",
    price: 5000,
    Band: "Comme des Garçons",
    size: "M",
    imgUrl: [
      "/images/Product/CDG-1.jpg",
      "/images/Product/CDG-2.jpg",
      "/images/Product/CDG-3.jpg",
      "/images/Product/CDG-4.jpg",
    ],
    releasedAt: "2024-10-01T10:00:00Z",
    quantity: 1,
    length: 105,
  },
  {
    id: 14,
    name: "太陽眼鏡",
    alt: "太陽眼鏡",
    category: "Accessories",
    price: 7000,
    Band: "Jean Paul Gaultier",
    size: "M",
    imgUrl: [
      "/images/Product/JPG-90-1.jpg",
      "/images/Product/JPG-90-2.jpg",
    ],
    releasedAt: "2025-03-01T10:00:00Z",
    quantity: 1,
  },
  {
    id: 15,
    name: "太陽眼鏡",
    alt: "太陽眼鏡",
    category: "Accessories",
    price: 4500,
    Band: "Jean Paul Gaultier",
    size: "M",
    imgUrl: [
      "/images/Product/JPG-me-1.jpg",
      "/images/Product/JPG-me-2.jpg",
    ],
    releasedAt: "2025-05-10T10:00:00Z",
    quantity: 1,
  },
];





export const AVAILABLE_CATEGORIES = Array.from(new Set(AllProducts.map(p => p.category)));

export const AVAILABLE_BANDS = Array.from(new Set(AllProducts.map(p => p.Band)));

export const PRICE_RANGES = [
    { label: 'NT$5000 以下', value: '0-5000' },
    { label: 'NT$5000 - NT$9000', value: '5000-9000' },
    { label: 'NT$9000 以上', value: '9000-max' },
];