import React from 'react';
import { CategoryFilterProps } from './types';
import {
  FilterContainer,
  FilterLabel,
  CategoryButton
} from './styled';

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange 
}) => {
  return (
    <FilterContainer>
      <FilterLabel>Filter by category:</FilterLabel>
      <CategoryButton
        isActive={selectedCategory === 'All'}
        onClick={() => onCategoryChange('All')}
      >
        All ({categories.length})
      </CategoryButton>
      {categories.map((category) => (
        <CategoryButton
          key={category}
          isActive={selectedCategory === category}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </CategoryButton>
      ))}
    </FilterContainer>
  );
};

export default CategoryFilter;
