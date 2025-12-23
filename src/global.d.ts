
declare module '*.css' {
  const content: any;
  export default content;
}

// 由於 swiper/css/xxx 是一種特殊路徑，如果上面的通用聲明無效，
// 也可以顯式地聲明 swiper 的 CSS 模組
declare module 'swiper/css' 
declare module 'swiper/css/navigation'
declare module 'swiper/css/pagination'