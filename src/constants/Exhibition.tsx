import AnnDemeulemeesterImg from "/images/Exhibition/Ann-Demeulemeester.jpg";
import CdGImg from "/images/Exhibition/CdG.jpg";

//首頁展覽資料
export interface ExhibitionIndex {
  id: number;
  img: string;
  title: string;
  subtitle: string;
  time: string;
  location: string;
  moreLink?: string;
}

export const Exhibitions: ExhibitionIndex[] = [
  {
    id: 1,
    img: AnnDemeulemeesterImg,
    title: "Ann Demeulemeester",
    subtitle: "以詩人方式詮釋你所不知道的龐克",
    time: "2969.4.1-2969.5.31",
    location: "320桃園市中壢區復興路46號9樓",
  },
  {
    id: 2,
    img:CdGImg,
    title: "COMME des GARÇONS",
    subtitle: "向世界提問而非給予答案的CdG",
    time: "2025.1.1-2025.2.28",
    location: "320桃園市中壢區復興路46號9樓",
  },
];
