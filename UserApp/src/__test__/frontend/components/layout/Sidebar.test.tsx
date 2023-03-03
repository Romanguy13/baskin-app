import { render } from '@testing-library/react';
import CategoryControls from '../../../../components/category/controls';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      query: { slug: 'toys' },
    };
  },
  push: jest.fn(),
}));

const categories = [
  { name: 'Electronics', slug: 'electronics' },
  { name: 'Clothing', slug: 'clothing' },
  { name: 'Sports Equipment', slug: 'sports-equipment' },
  { name: 'Toys', slug: 'toys' },
  { name: 'Furniture', slug: 'furniture' },
  { name: 'Instruments', slug: 'instruments' },
];

const category =  {
  name: 'string',
  ancestors: [],
  children: [],
  products: [],
  categories: categories,
};

const renderView = async () => {
  render(<CategoryControls category={category} />);
};

test('Renders', async () => {
  renderView();
});

test('Select Catagory', async () => {
  renderView();
});
