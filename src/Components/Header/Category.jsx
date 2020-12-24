import React from 'react';
import { Link } from 'react-router-dom';
import './Category.scss'

class Category extends React.Component {

  render() {
    const { category } = this.props
    return (
      <div className="Category">
        <li>
          <div className="categoryItem">{category.menu}</div>
          <img 
            alt="Down arrow" 
            src="/images/arrow-right-bold.png" 
            className={category.categories.length>1 ? 'show' : 'hide'}/>
          <div className={category.categories.length>1 ? "navDropdown" : "navDropdown preventHover"}>
            <ul className="subCategories">
              {category.categories.length > 0 &&
                category.categories.map((subCategory, index) => {
                  return (
                    <li key={index}><Link to="/product/products_info?limit=20">{subCategory}</Link></li>
                  )
                })
              }
            </ul>
          </div>
        </li>
      </div>
    );
  }
}

export default Category;
