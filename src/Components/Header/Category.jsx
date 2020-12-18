import React from 'react';
import './Category.scss'

class Category extends React.Component {


  render() {
    const {id, category, subCategories, handleCategoryOpen, handleCategoryClose, isCategoryOpen, goToProductList } = this.props
    return (
      <div className="Category">
        <li 
          onMouseOver={() => handleCategoryOpen(id)}
          onMouseLeave={() => handleCategoryClose(id)}>
          <div className="categoryItem">{category}</div>
          <img 
            alt="Down arrow" 
            src="/images/arrow-right-bold.png" 
            className={subCategories.length>1 ? 'show' : 'hide'}/>
          <div className={subCategories.length>1 && isCategoryOpen ? "navDropdown open" : "navDropdown"}>
            <ul 
              onClick={() => goToProductList(id)}
              className="subCategories">
              {subCategories &&
                subCategories.map((subCategory, index) => {
                  return (
                    <li key={index}>{subCategory}</li>
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
