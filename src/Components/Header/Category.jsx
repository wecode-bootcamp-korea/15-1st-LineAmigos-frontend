import React from 'react';
import './Category.scss'

class Category extends React.Component {

  constructor() {
    super()
    this.state = {
      isCategoryOpen: false,
    }
  }
  render() {
    const {id, category, subCategories, handleCategoryOpen, isCategoryOpen } = this.props
    return (
      <div className="Category">
        <li onClick={() => handleCategoryOpen(id)}>
          <div>{category}</div>
          <img alt="Down arrow" src="/images/arrow-right-bold.png" />
          <div className="navDropdown">
            <ul className={isCategoryOpen ? "subCategories open" : "subCategories"} >
              {/*{subCategories &&
                subCategories.map((subCategory, index) => {
                  return (
                    // console.log(subCategory)
                    <li key={index}>{subCategory}</li>
                  )
                })
              }*/}
              테스트
            </ul>
          </div>
        </li>
      </div>
    );
  }
}

export default Category;
