import { GetServerSideProps } from 'next';
import { Product } from '@/graphql/product/schema';
import { Category } from '../graphql/category/schema';
import Layout from '../components/layout/Layout';
import Sidebar from '../components/layout/Sidebar';
import { ProductService } from '../graphql/product/service';
import { CategoryService } from '../graphql/category/service';
import CategoryContent from '../components/category/content';

// Within `getServerSideProps` we can (and should) query
// micro services directly. https://tinyurl.com/ysfwst5r
export const getServerSideProps: GetServerSideProps = async () => {
  const categoryPayload = {
    children: await new CategoryService().children(),
    products: await new ProductService().list({}),
    categories: await new CategoryService().list(),
  };
  return {
    props: { categoryPayload },
  };
};

export interface Props {
  categoryPayload: CategoryPayload;
}

export interface CategoryPayload {
  children: Category[];
  products: Product[];
  categories: Category[];
}

export default function IndexPage({ categoryPayload }: Props) {
  return (
    <Layout sidebar={<Sidebar categories={categoryPayload.categories} />}>
      <CategoryContent category={categoryPayload}/>
    </Layout>
  );
}
