// local mock data (eunjin) 
export const PRODUCTS_INFO = "./public/data/productsInfos.json"
export const REVIEWS_MAIN = "./public/data/reviews.json"

// local mock data (mihyun) 
export const FILTER_DATA = "./public/data/filterData.json"

// local mock data (kyungoh) 
export const REVIEW_DATA = "./public/data/reviewData.json"
export const MOCK_DATA="./public/data/mockData.json"

export const PRODUCTSDETAIL = './public/data/mockData.json'
export const PRODUCT_REVIEW = './public/data/reviewData.json'

// API from backend  
export const CATEGORY_API = "http://[호스트]/product/menu";
export const DETAIL_API = "http://[호스트]/product/[상품ID]";

export const ALPRODUCTS_API = 'http://10.168.1.149:8000/product/products_info' //-> 전체

export const SORT_AVERAGE_API = 'http://10.168.1.149:8000/product/products_info?sort=avg' //-> 평점평균정렬
export const SORT_REVIEW_API = 'http://10.168.1.149:8000/product/products_info?sort=review' //-> 리뷰많은순 정렬
export const SORT_LIKE_API = 'http://10.168.1.149:8000/product/products_info?sort=like' //-> 인기도순정렬
export const SORT_LOWPRICE_API = 'http://10.168.1.149:8000/product/products_info?sort=price' // -> 낮은 가격 정렬
export const SORT_RECENT_API = 'http://10.168.1.149:8000/product/products_info?ordering=-id'  // ->최신등록순 상품정렬

export const CATEGORY_API = 'http://10.168.1.149:8000/product/menu' //-> 메뉴/카테고리 정보
export const BEST_PRODUCTS_API = 'http://10.168.1.149:8000/product/best' //-> 베스트상품 정보
export const PRODUCT_DETAIL_API = 'http://10.168.1.149:8000/product/1' //-> 상세 제품 정보<int 1 ~ 64>
