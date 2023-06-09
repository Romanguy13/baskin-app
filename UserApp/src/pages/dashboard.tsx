import Layout from '../components/layout/Layout';
import DashSidebar from '../components/layout/DashSidebar';
import { useEffect, useState } from 'react';
import ProfileEdit from '../components/dashboard/ProfileEdit';
import ProductMenu from '../components/dashboard/product/ProductMenu';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async context => {
  return {
    props: {
      ...(await serverSideTranslations((context.locale as string) ?? 'en', ['common'])),
      locale: (context.locale as string) ?? 'en',
    },
  };
};
import AuthGuard from '../components/common/AuthGuard';
// import { useAppContext } from '../context';

interface Props {
  locale: string;
}

export default function Dashboard({ locale }: Props) {
  const [items, setItems] = useState<string[]>([]);
  const [current, setCurrent] = useState<string>('');

  // const { signedInUser } = useAppContext();
  // let profileSettings = t("dashboard.sidebar.profileSettings");
  // let products = t("dashboard.sidebar.products");

  const tabs = ['Profile Settings', 'Products'];

  const comps: Record<string, JSX.Element> = {
    'Profile Settings': <ProfileEdit />,
    Products: <ProductMenu />,
  };

  useEffect(() => {
    setItems(tabs);
    setCurrent(tabs[0]);
  }, []);

  return (
    <>
      <AuthGuard>
        <Layout
          sidebar={<DashSidebar items={items} current={current} setCurrent={setCurrent} />}
          locale={locale}
        >
          {comps[current]}
        </Layout>
      </AuthGuard>
    </>
  );
}
