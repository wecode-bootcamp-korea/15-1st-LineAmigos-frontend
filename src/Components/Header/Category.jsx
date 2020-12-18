import React from 'react';
import './Category.scss'

class Category extends React.Component {


  render() {
    const {id, category, subCategories, handleCategoryOpen, isCategoryOpen } = this.props
    console.log(id)
    isCategoryOpen ? console.log('yes') : console.log('no')
    return (
      <div className="Category">
        <li onClick={() => handleCategoryOpen(id)}>
          <div>{category}</div>
          <img alt="Down arrow" src="/images/arrow-right-bold.png" />
          <div className={isCategoryOpen ? "navDropdown open" : "navDropdown"}>
            <ul>
              {subCategories &&
                subCategories.map((subCategory, index) => {
                  return (
                    // console.log(subCategory)
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
