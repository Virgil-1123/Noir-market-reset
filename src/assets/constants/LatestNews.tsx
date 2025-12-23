import Ann from "../../../public/images/LatestNews/Ann.jpg";
import Cdg from "../../../public/images/LatestNews/CdG.jpg";
import MarketImg from "../../../public/images/LatestNews/Market.jpg";
import NewsImg from "../../../public/images/LatestNews/News.jpg";

// 最新消息資料介面
export interface LatestNews {
  id: number;
  img: string;
  title: string;
  subtitle: string;
  time: string;
  content: string;
  moreLink?: string;
  category: "Exhibition" | "Market" | "News";
  sections?: ContentSection[];
}

//文章內文會使用到的屬性
export interface ContentSection {
  type: "text" | "image" | "heading";

  images?: {
    value: string; // 圖片路徑
    caption?: string; // 圖片註解
  }[];

  // 單一圖片/文字的值
  value?: string;

  // 單一圖片的註解
  caption?: string;
}

export const LatestNewsIfo: LatestNews[] = [
  {
    id: 1,
    img: Ann,
    title: "Ann Demeulemeester",
    subtitle: "以詩人方式詮釋你所不知道的龐克",
    time: "2969.4.1-2969.5.31",
    content:
      "內在開始介紹這位在時裝界享負詩人盛名的傳奇前，我想大家可以問自己一個問題? 那就是你們對龐克的認知是什麼， 叛逆、不羈、 充滿暴戾之氣充其量只是這個文化的外在， 但深究其精神內核卻是非常的迷人，它使人們 打破傳統、放浪形骸、遵循本心， 這可能是你所不知道的龐克。",
    category: "Exhibition",

    sections: [
      {
        type: "image",
        images: [
          {
            value: "/images/Exhibition/AnnBook.jpg",
            caption: "Ann自傳",
          },
          {
            value: "/images/Exhibition/AnnLetter.jpg",
            caption: "Ann告別信",
          },
        ],
      },
      //內文第一段
      {
        type: "text",
        value:
          "在開始介紹這位在時裝界享負詩人盛名的傳奇前，我想大家可以問自己一個問題?那就是你們對龐克的認知是什麼，叛逆、不羈、充滿暴戾之氣充其量只是這個文化的外在，但深究其精神內核卻是非常的迷人，它使人們 打破傳統、放浪形骸、遵循本心，這可能是你所不知道的龐克。",
      },
      //內文第二段
      {
        type: "text",
        value:
          "而這個看似與龐克不著邊際的詩人，又是怎麼以詩意的方式去詮釋龐克?Ann Demeulemeester生於1959年比利時的小鎮，其最開始的夢想是成為一名肖像畫家，但在一次練習繪製古典肖像畫的過程中，她開始思考畫上人物的主體與穿著服飾之間的關係，夢想的天秤便悄悄地往服裝設計師的方向傾斜，在她高中畢業後便報考了安特衛普皇家藝術學院，而影響著現代時裝的安特衛普六君子，也在這時悄然的萌芽。",
      },
      //圖片
      {
        type: "image",
        value: "/images/Exhibition/AnnStore.jpg",
        caption: "Ann位於安特衛普的服飾店",
      },
      //內文第三段
      {
        type: "text",
        value:
          "Ann Demeulemeester所設計的服飾特色首先顏色的選擇就是其最大的特色，以黑白作為其服飾的主色，衣服常以不規則的絲質布料、皮繩去製造垂墜感，衣服兩側也因其釦子的不對稱，展現出衝突的美感，在80年代末至90年代，這樣的創作手法並非主流，80年代與90年代的風氣形成了兩個鮮明的對比，過度的裝扮與過度的簡樸，然而Ann Demeulemeester 的設計，卻好似置身在這兩股流行風潮之外，她曾說:「她厭倦了所有女性穿著貼身的服飾，為此她想創造一個新的輪廓。」因此在她的女裝設計中往往加入了一些中性的元素，她總是在以其他的方式展現女性的剛強，她從不認為性別應該被定義，她將所有的標籤撕下，用自己的方式去呈現女裝，而這樣的表現方式你也可以在男裝發布的單品中發現。",
      },
      //圖片
      {
        type: "image",
        value: "/images/Exhibition/AnnExhibition.jpg",
        caption: "Ann服飾展",
      },
      //內文第四段
      {
        type: "text",
        value:
          "Ann Demeulemeester在其設計的服飾裡，其精神與龐克所想表達的文化內核，也有不謀而合之處，無論是她想改變女裝在主流市場上的定位、抑或是她只遵循本心不追隨世界的潮流，在黑與白的世界裡找出更多能探尋的可能性，這些洽洽與龐克文化的內涵有著強大的關聯性，最終這位來自比利時的傳奇也贏得了巴黎的掌聲，讓品牌得以存續至今，而讓粉絲們感到惋惜的莫過於2013年的發佈上遞出了一封信，一封告別自己的品牌並轉身投往與時尚毫不相關的產業中，也許是對10年後的時裝圈感到失望，也許是這個產業裡消費者們不再是為設計師的設計買單，更多的是因為哪個名人曾穿上它，故而想去擁有它，過去因欣賞、理解而選擇的消費模式變成了盲目的崇拜，故而選擇在這個時刻瀟灑的轉身離去，乘興而來，興盡而返，就像這個時裝圈賜予她的美名一樣。",
      },
      //結尾
      {
        type: "text",
        value:
          "本次展出Ann Demeulemeester的收藏為1990-2011，為本人期的作品，無論是想認識品牌抑或是粉絲想來交流，我們都歡迎，本展覽不出售任何商品，想分享這個文化的脈絡，傳播些許的知識，讓臺灣有更多人能認識到這個傳奇，歡迎各位的蒞臨。 ",
      },
    ],
  },
  {
    id: 2,
    img: Cdg,
    title: "COMME des GARÇONS",
    subtitle: "不給世界答案只向時代提問",
    time: "2969.4.1-2969.5.31",
    content:
      "來自東瀛在1973年成立自己的品牌COMME des GARCONS，大家對於CdG的認知可能來自一個長著可愛雙眼的Logo，但那只是該品牌的冰山一角，它的主線其實是設計師品牌，在品牌僅成立8年便大膽向巴黎進軍，並在那一夜讓巴黎的人們對這個未來亞洲將升升冉起的新星為之震驚。",
    category: "Exhibition",
  },

  {
    id: 3,
    img: MarketImg,
    title: "未來復古市集",
    subtitle: "尋找 80 年代數位龐克下的黃金時代",
    time: "2969.6.15-2969.6.17",
    content:
      "本次市集將會聚集頂尖的復古服飾收藏家與藝術家，以 80 年代賽博龐克精神為主軸，展售一系列珍稀單品與未來科技裝置。請務必攜帶您的數位錢包與一顆對過去充滿熱愛的心。",
    category: "Market",
  },
  {
    id: 4,
    img: NewsImg,
    title: "品牌總監專訪",
    subtitle: "打破界線，探索時尚的哲學思辨",
    time: "2969.4.1",
    content:
      "我們很榮幸邀請到品牌總監進行深度對話。在訪談中，總監闡述了當代時尚如何超越穿著，成為一種哲學和社會符號。她強調了可持續性與獨立設計師精神的重要性。",
    category: "News",
  },
];


export  const CATEGORY_MAP = {
    Exhibition: "展覽介紹",
    Market: "市集活動",
    News: "最新消息",
  };
