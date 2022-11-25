import { FC } from 'react';

import ProductCard from '../product-card/product-card.component';

import { CategoryPreviewContainer, Preview, Title } from './category-preview.styles';

import { CategoryItem} from "../../store/categories/category.types";

type CategoryPreviewProps = {
  title: string;
  products: CategoryItem[];
};

const CategoryPreview: FC<CategoryPreviewProps> = ({ title, products }) => {
  return (
    <CategoryPreviewContainer className='category-preview-container'>
      <h2>
          <Title className='title' to={`${title}`} >{title.toUpperCase()}</Title>
      </h2>
      <Preview className='preview'>
        {
          products.filter((_, index) => index < 4)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
        }
      </Preview>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview;