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
export const DETAIL_API = "http://[호스트]/product/[상품ID]";
// 은진님 메뉴 카테고리, 리뷰데이터, 상품검색
export const ALPRODUCTS_API = 'http://10.168.1.149:8000/product/products_info' //-> 전체상품정보
export const CATEGORY_API = 'http://10.168.1.149:8000/product/menu' //-> 메뉴/카테고리 정보
export const REVIEWS_API = 'http://10.168.1.140:8000/review/reviews'  // -> 리뷰 데이터 
// 경오님 상세페이지 관련
export const BEST_PRODUCTS_API = 'http://10.168.1.149:8000/product/best' //-> 베스트상품 정보
export const PRODUCT_DETAIL_API = 'http://10.168.1.149:8000/product/1' //-> 상세 제품 정보<int 1 ~ 64>
// 미현님 회원가입, 로그인, 상품리스트 정렬하기
export const SIGN_UP_API = 'http://10.168.1.140:8000/user/signup' // -> 회원가입
export const SIGN_IN_API = 'http://10.168.1.140:8000/user/signin'  // -> 로그인
export const SORT_AVERAGE_API = 'http://10.168.1.149:8000/product/products_info?sort=avg' //-> 평점평균정렬
export const SORT_REVIEW_API = 'http://10.168.1.149:8000/product/products_info?sort=review' //-> 리뷰많은순 정렬
export const SORT_LIKE_API = 'http://10.168.1.149:8000/product/products_info?sort=like' //-> 인기도순정렬
export const SORT_LOWPRICE_API = 'http://10.168.1.149:8000/product/products_info?sort=price' // -> 낮은 가격 정렬
export const SORT_RECENT_API = 'http://10.168.1.149:8000/product/products_info?ordering=-id'  // ->최신등록순 상품정렬