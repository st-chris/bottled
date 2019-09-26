import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCategories } from '../../selectors/category';

import CategoryItem from '../category-item/Category-item';

import './category.scss';

const Category = ({ categories }) => {
  return (
    <div className='home-categories'>
      {categories.map(({ id, ...otherCategoryProps }) => (
        <CategoryItem key={id} {...otherCategoryProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  categories: selectCategories
});

export default connect(mapStateToProps)(Category);
