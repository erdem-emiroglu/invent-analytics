import styles from '@/app/page.module.scss';
import ContentTable from '@/components/Tables/ContentTable';
import { setParams } from '@/store/paramStore';

type HomeProps = {
  searchParams: {
    search?: string;
    page?: string;
    year?: string;
    type?: string;
  };
};

const Home = ({ searchParams }: HomeProps) => {
  setParams(searchParams);
  return (
    <main className={styles.page}>
      <ContentTable />
    </main>
  );
};

export default Home;
