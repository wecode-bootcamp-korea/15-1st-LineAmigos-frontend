import React from 'react'
import { Link } from 'react-router-dom'
import Category from './Category'
import './Header.scss'

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      categoriesList: [],
      searchValue: '',
      searchList: [],
      isloggedIn: false,
      scrollTop: 0,
      isNavFixed: false,
    }
  }

  handleSearchValue = (e) => {
    this.setState({
      searchValue: e.target.value,
    })
  }

  goToSearchResult = (e) => {
    e.preventDefault()
    this.props.history.push(
      `/product/products_info?search='${this.state.searchValue}'`
    )
  }

  handleScroll = (e) => {
    const scrollTop = ('scroll', e.srcElement.scrollingElement.scrollTop)
    this.setState({
      scrollTop,
      isNavFixed: scrollTop > 140 ? true : false,
    })
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll)
    fetch('http://10.168.1.149:8000/product/menu')
      // fetch('/data/productsInfos.json')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ categoriesList: data.main })
      })
      .catch((err) => console.log(err))

    // fetch('/data/productsInfos.json')
    fetch('http://10.168.1.149:8000/product/products_info')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ searchList: data.PRODUCTS })
      })
      .catch((err) => console.log(err))
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    const {
      categoriesList,
      searchValue,
      searchList,
      isloggedIn,
      isNavFixed,
    } = this.state
    const {
      handleSearchValue,
      handleLoginStatus,
      goToProductList,
      goToSearchResult,
    } = this
    const filteredList = searchList.filter(
      (product) =>
        product.name.toLowerCase().includes(searchValue.toLowerCase()) &&
        product
    )
    // localStorage.getItem('token') && this.setState({ isloggedIn: true })

    return (
      <header className={`Header ${isNavFixed && 'scrolled'}`}>
        <div className='innerContainer'>
          <nav>
            <div className='navIconLeft'>
              <img alt='Naver logo' src='/images/naver-logo.png' />
              <div>
                <img alt='Shop' src='/images/shop-bold.png' />
                <span>
                  <Link to={'/cart'}>장바구니</Link>
                </span>
              </div>
            </div>
            <div className='navIconRight' onClick={handleLoginStatus}>
              {isloggedIn && (
                <span className='gnbBtn cart'>
                  <Link to={'/cart'}>장바구니</Link>
                </span>
              )}
              <span className='gnbBtn logIn'>
                <Link to={isloggedIn ? '/' : '/login'} className='reset'>
                  {isloggedIn ? '로그아웃' : '로그인'}
                </Link>
              </span>
              <img alt='Menu' src='/images/menu.png' />
            </div>
          </nav>
          <div className='logoAndSearch'>
            <h1>
              <Link to='/'>
                <img
                  alt='Line Amigos Logo'
                  src='/images/line-amigos-logo-black.png'
                />
              </Link>
            </h1>
            <div className='searchContainer'>
              <form onSubmit={goToSearchResult}>
                <input
                  type='text'
                  placeholder='검색어를 입력해보세요'
                  onChange={handleSearchValue}
                />
                <button>
                  <img
                    alt='Search Icon'
                    src='/images/search.png'
                    className='searchIcon'
                  />
                </button>
              </form>
              <ul
                className={`searchListContainer ${
                  searchValue && filteredList.length && 'open'
                }`}
              >
                {filteredList.length > 0 &&
                  filteredList.map((item) => {
                    return (
                      <li key={item.product_id}>
                        <img
                          alt={item.name}
                          src={item.product_image}
                          className='itemImg'
                        />
                        <div>
                          <span className='productName'>{item.name}</span>
                          <span className='price'>
                            {(+item.price).toLocaleString()}원
                          </span>
                        </div>
                      </li>
                    )
                  })}
              </ul>
            </div>
          </div>
          <div className='topMenuAndHover'>
            <ul className='topMenu'>
              {categoriesList &&
                categoriesList.map((category, index) => {
                  return (
                    <Category
                      key={index}
                      category={category}
                      goToProductList={goToProductList}
                    />
                  )
                })}
            </ul>
            <div className='hoverBox' />
          </div>
        </div>
      </header>
    )
  }
}
export default Header
